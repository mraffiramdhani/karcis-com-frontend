const express = require('express'),
  {
    AmenityController,
    AuthController,
    BalanceController,
    CityController,
    HomeController,
    HotelController,
    HotelOrderController,
    HotelRoomController,
    RoomTypeController,
    UserController
  } = require('../Controllers'),
  router = express.Router();
const { auth, hasRole } = require('../Services/middleware');

// HomeController
router.get('/', HomeController.index);
router.get('/city', CityController.getCity);

// Auth Routes
router
  .post('/register', AuthController.register)
  .post('/login', AuthController.login)
  .post('/password', AuthController.forgotPassword)
  .post('/password/reset', AuthController.resetPassword)
  .post('/otp/check', AuthController.checkOTP)
  .get('/logout', auth, AuthController.logout)
  .get('/u/profile', auth, AuthController.getProfile)
  .patch('/u/profile', auth, AuthController.updateProfile);

// User Routes
router
  .get('/user', UserController.getUsers)
  .get('/user/:id', UserController.getUserById)
  .post('/user/email/check', UserController.getUserByEmail)
  .post('/user', auth, hasRole('administrator'), UserController.createUser)
  .patch('/user/:id', auth, hasRole('administrator'), UserController.updateUser)
  .delete('/user/:id', auth, hasRole('administrator'), UserController.deleteUser);

// Hotel Routes
router
  .get('/hotel', HotelController.getHotels)
  .get('/hotel/:id', HotelController.getHotelById)
  .post('/hotel', auth, hasRole('administrator'), HotelController.createHotel)
  .patch('/hotel/:id', auth, hasRole('administrator'), HotelController.updateHotel)
  .delete('/hotel/:id', auth, hasRole('administrator'), HotelController.deleteHotel);

// Balance Routes
router
  .get('/balance', auth, BalanceController.getBalanceByUser)
  .get('/balance/history', auth, BalanceController.getBalanceHistories)
  .patch('/top-up', auth, hasRole('customer'), BalanceController.updateBalance);

// AmenityController
router
  .get('/amenity', AmenityController.getAmenities)
  .get('/amenity/:id', AmenityController.getAmenity)
  .post('/amenity', auth, hasRole('administrator'), AmenityController.createAmenity)
  .patch('/amenity/:id', auth, hasRole('administrator'), AmenityController.updateAmenity)
  .delete('/amenity/:id', auth, hasRole('administrator'), AmenityController.deleteAmenity);

// RoomTypeController
router
  .get('/room/type', RoomTypeController.getRoomTypes)
  .get('/room/type/:id', RoomTypeController.getRoomTypeById)
  .post('/room/type', auth, hasRole('administrator'), RoomTypeController.createRoomType)
  .patch('/room/type/:id', auth, hasRole('administrator'), RoomTypeController.updateRoomType)
  .delete('/room/type/:id', auth, hasRole('administrator'), RoomTypeController.deleteRoomType);

// HotelRoomController
router
  .get('/hotel/:id/room', HotelRoomController.getHotelRooms)
  .get('/hotel/:id/room/:roomId', HotelRoomController.getHotelRoomById)
  .post('/hotel/:id/room', auth, hasRole('administrator'), HotelRoomController.createHotelRoom)
  .patch('/hotel/:id/room/:roomId', auth, hasRole('administrator'), HotelRoomController.updateHotelRoom)
  .delete('/hotel/:id/room/:roomId', auth, hasRole('administrator'), HotelRoomController.deleteHotelRoom);

// HotelOrderController
router
  .get('/order/hotel', auth, hasRole('customer'), HotelOrderController.getOrders)
  .get('/order/hotel/history', auth, hasRole('customer'), HotelOrderController.getOrderHistories)
  .get('/order/hotel/:orderId', auth, hasRole('customer'), HotelOrderController.getOrder)
  .post('/order/hotel/', auth, hasRole('customer'), HotelOrderController.createOrder)
  .patch('/order/hotel/:orderId/cancel', auth, hasRole('customer'), HotelOrderController.cancelOrder)
  .patch('/order/hotel/:orderId/complete', auth, hasRole('customer'), HotelOrderController.completeOrder)
  .delete('/order/hotel/:orderId', auth, hasRole('customer'), HotelOrderController.deleteOrder);

module.exports = router;
