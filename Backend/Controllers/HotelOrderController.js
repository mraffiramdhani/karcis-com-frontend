/* eslint-disable no-else-return */
const moment = require('moment');
const {
	response, dateRange, convertDate
} = require('../Utils');
const {Hotel, RoomTypes, HotelOrder, HotelRooms, Balance, BalanceHistories } = require('../Services');

const getOrders = async (req, res) => {
	const { id } = req.auth;
	await HotelOrder.getOrders(id).then(async (result) => {
		if (result.length > 0) {
			for(let i = 0; i < result.length; i++){
				const hotel = await Hotel.getHotelById(result[i].hotel_id);
				const room = await RoomTypes.getRoomType(result[i].room_type_id);
				var hotelName = hotel;
				var roomName = room;
				result[i].hotel = hotelName[0].name;
				result[i].room = roomName[0].name;
			}
			return response(res, 200, true, 'Data Found.', result);
		}
		else {
			return response(res, 200, true, 'Your Order List Is Empty.');
		}
	}).catch((error) => response(res, 200, false, 'Error At Fetching User Hotel Order.', error));
};

const getOrderHistories = async (req, res) => {
	const { id } = req.auth;
	await HotelOrder.getOrderHistories(id).then(async (result) => {
		if (result.length > 0) {
			for(let i = 0; i < result.length; i++){
				const hotel = await Hotel.getHotelById(result[i].hotel_id);
				const room = await RoomTypes.getRoomType(result[i].room_type_id);
				var hotelName = hotel;
				var roomName = room;
				result[i].hotel = hotelName[0].name;
				result[i].room = roomName[0].name;
			}
			return response(res, 200, true, 'Data Found.', result);
		}
		else {
			return response(res, 200, true, 'Your Order History Is Empty.');
		}
	}).catch((error) => response(res, 200, false, 'Error At Fetching Order Histories.', error));
};

const getOrder = async (req, res) => {
	const { id } = req.auth;
	const { orderId } = req.params;
	await HotelOrder.getOrderById(orderId, id).then(async (result) => {
		if (result.length > 0) {
			for(let i = 0; i < result.length; i++){
				const hotel = await Hotel.getHotelById(result[i].hotel_id);
				const room = await RoomTypes.getRoomType(result[i].room_type_id);
				var hotelName = hotel;
				var roomName = room;
				result[i].hotel = hotelName[0].name;
				result[i].room = roomName[0].name;
			}
			return response(res, 200, true, 'Data Found.', result);
		}
		else {
			return response(res, 200, true, 'Data Not Found.');
		}
	}).catch((error) => response(res, 200, false, 'Error At Fetching User Order By ID', error));
};

const createOrder = async (req, res) => {
	const { id } = req.auth;
	const room = await HotelRooms.getRoom(req.body.room_type_id, req.body.hotel_id);
	const balance = await Balance.getBalance(id);
	const roomCost = room;
	const userBalance = balance;
	req.body.cost = roomCost[0].cost;
	req.body.subtotal = roomCost[0].cost * dateRange(req.body.check_out, req.body.check_in);
	req.body.duration = dateRange(req.body.check_out, req.body.check_in);
	req.body.check_in = convertDate(req.body.check_in);
	req.body.check_out = convertDate(req.body.check_out);
	if (userBalance[0].balance > req.body.subtotal) {
		const userBalanceAfter = userBalance[0].balance - req.body.subtotal;
		await HotelOrder.createOrder(id, req.body).then(async (result) => {
			if (result.insertId > 0) {
				await HotelOrder.getOrderById(result.insertId, id).then(async (_result) => {
					if (_result.length > 0) {
						await Balance.updateBalance(id, -req.body.subtotal).then(async (__result) => {
							if (__result.affectedRows > 0) {
								await BalanceHistories.createBalanceHistory(id, userBalance[0].id, { balance: userBalanceAfter }).then((___result) => {
									if (___result.affectedRows > 0) {
										return response(res, 200, true, 'Order Created Successfuly.', _result[0]);
									}
									else {
										return response(res, 200, false, 'Creating Balance History Failed. Please Try Again.');
									}
								}).catch((error) => response(res, 200, false, 'Error At Creating Balance Histories.', error));
							}
							else {
								return response(res, 200, false, 'Updating User Balance Failed. Please Try Again.');
							}
						}).catch((error) => response(res, 200, false, 'Error At Updating User Balance.', error));
					}
					else {
						return response(res, 200, false, 'Data Not Found.');
					}
				}).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Order.', error));
			}
			else {
				return response(res, 200, false, 'Creating Order Failed. Please Try Again.');
			}
		}).catch((error) => response(res, 200, false, 'Error At Creating Hotel Order.', error));
	}
	else {
		return response(res, 200, false, 'Insufficient User Balance. Please Top Up Your Balance First.', {errno: 1});
	}
};

const cancelOrder = async (req, res) => {
	const { id } = req.auth;
	const { orderId } = req.params;
	const order = await HotelOrder.getOrderById(orderId, id);
	const orderStatus = order;
	const currentDate = new Date();
	console.log(currentDate);
	const orderDateRange = moment(currentDate).isBetween(orderStatus[0].check_in, orderStatus[0].check_out);
	if (orderStatus[0].is_complete !== 1) {
		if (orderDateRange) {
			await HotelOrder.cancelOrder(orderId, id).then(async (result) => {
				if (result.affectedRows > 0) {
					await HotelOrder.getOrders(id).then((_result) => {
						if (_result.length > 0) {
							return response(res, 200, true, 'Order Canceled Successfuly.', _result);
						}
						else {
							return response(res, 200, true, 'Data Not Found');
						}
					}).catch((error) => response(res, 200, false, 'Error At Fetching Orders.', error));
				}
				else {
					return response(res, 200, false, 'Canceling Order Failed. Please Try Again.');
				}
			}).catch((error) => response(res, 200, false, 'Error At Canceling Order.', error));
		}
		else if (moment(currentDate).isBefore(orderStatus[0].check_in)) {
			await Balance.updateBalance(id, orderStatus[0].subtotal).then(async (result) => {
				if (result.affectedRows > 0) {
					await Balance.getBalance(id).then(async (_result) => {
						if (_result.length > 0) {
							const data = { balance: _result[0].balance, top_up: orderStatus[0].subtotal }
							await BalanceHistories.createBalanceHistory(id, _result[0].id, data).then(async (__result) => {
								if (__result.insertId > 0) {
									await HotelOrder.cancelOrder(orderId, id).then(async (___result) => {
										if (___result.affectedRows > 0) {
											await HotelOrder.getOrders(id).then((____result) => {
												if (____result.length > 0) {
													return response(res, 200, true, 'Order Has Been Canceled.', ____result);
												}
												else {
													return response(res, 200, true, 'Data Not Found');
												}
											}).catch((error) => response(res, 200, false, 'Error At Fetching Orders.', error));
										}
										else {
											return response(res, 200, false, 'Canceling Order Failed. Please Try Again.');
										}
									}).catch((error) => response(res, 200, false, 'Error At Canceling Order.', error));
								}
								else {
									return response(res, 200, false, 'Balance Top Up Failed. Please Try Again.');
								}
							}).catch((error) => response(res, 200, false, 'Error At Storing Top Up History.', error));
						}
						else {
							return response(res, 200, false, 'Fetching User Balance Failed. Please Try Again.');
						}
					}).catch((error) => response(res, 200, false, 'Error At Fetching User Balance.', error));
				}
				else {
					return response(res, 200, false, 'Updating Balance Failed. Please Try Again.');
				}
			}).catch((error) => response(res, 200, false, 'Error At Updating User Balance.', error));
		}
		else if (moment(currentDate).isAfter(orderStatus[0].check_out)) {
			await HotelOrder.cancelOrder(orderId, id).then(async (result) => {
				return response(res, 200, true, 'Your Order Is Canceled Automaticaly Because The Check Out Time Has Been Passed');
			}).catch((error) => response(res, 200, false, 'Error At Canceling Order', error));
		}
	}
	else {
		return response(res, 200, false, 'Order That Already Completed Cannot Be Canceled.');
	}
};

const completeOrder = async (req, res) => {
	const { id } = req.auth;
	const { orderId } = req.params;
	const order = await HotelOrder.getOrderById(orderId, id);
	const orderStatus = order;
	if (orderStatus[0].is_canceled !== 1) {
		await HotelOrder.completeOrder(orderId, id).then(async (result) => {
			if (result.affectedRows > 0) {
				await HotelOrder.getOrders(id).then((_result) => {
					if (_result.length > 0) {
						return response(res, 200, true, 'Order Completed Successfuly.', _result);
					}
					else {
						return response(res, 200, true, 'Data Not Found');
					}
				}).catch((error) => response(res, 200, false, 'Error At Fetching Orders.', error));
			}
			else {
				return response(res, 200, false, 'Completing Order Failed. Please Try Again.');
			}
		}).catch((error) => response(res, 200, false, 'Error At Completing Order.', error));
	}
	else {
		return response(res, 200, false, 'Order That Already Canceled Cannot Be Completed.');
	}
};

const deleteOrder = async (req, res) => {
	const { id } = req.auth;
	const { orderId } = req.params;
	await HotelOrder.deleteOrder(orderId, id).then(async (result) => {
		if (result.affectedRows > 0) {
			await HotelOrder.getOrders(id).then((_result) => {
				if (_result.length > 0) {
					return response(res, 200, true, 'Order Deleted Successfuly.', _result);
				}
				else {
					return response(res, 200, true, 'Data Not Found');
				}
			}).catch((error) => response(res, 200, false, 'Error At Fetching Orders.', error));
		}
		else {
			return response(res, 200, false, 'Deleting Order Failed. Please Try Again.');
		}
	}).catch((error) => response(res, 200, false, 'Error At Deleting Order.', error));
};

module.exports = {
	getOrders,
	getOrderHistories,
	getOrder,
	createOrder,
	cancelOrder,
	completeOrder,
	deleteOrder
};
