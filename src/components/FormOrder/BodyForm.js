import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Left, Card, CardItem, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Octicons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import rupiahFormat from '../../utils/rupiahFormat';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#000',
		padding: 5,
	},
	banner: {
		height: 50,
		backgroundColor: '#0064D2',
	},
	icon: {
		fontSize: 25,
		color: 'white',
		padding: 5,
		paddingRight: 15,
		paddingBottom: 10,
		marginTop: 10,
	},
	iconFilter: {
		fontSize: 20,
		color: '#0064D2',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	bottom: {
		bottom: -160,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		height: 30,
		width: 150,
		elevation: 5,
	},
	image: {
		width: '60%',
		height: 50,
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 5,
	},
	buttonLogin: {
		backgroundColor: 'yellow',
		borderRadius: 50,
		height: 45,
		width: 350,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#0064D2',
		fontSize: 17,
	},
});

class BodyForms extends Component {
	render() {
		const { orderData, hotelDetail, costRoom, auth } = this.props
		return (
			<ScrollView>
				<View style={{ backgroundColor: '#fff' }}>

					<View>
						<Text style={{ margin: 15 }}>Detail Hotel</Text>
					</View>

					<Card style={{ width: '90%', alignSelf: 'center', backgroundColor: '#eee' }}>
						<View style={{ flexDirection: 'row' }}>
							<CardItem style={{ width: 80, paddingLeft: 10, paddingRight: 10, backgroundColor: '#eee' }}>
								<Image style={styles.image} source={require('../../image/aquinahouse.jpg')} />
							</CardItem>

							<View style={{ marginTop: 12 }}>
								<Text style={{ fontSize: 13 }}>{hotelDetail.name}</Text>
								<View style={{ marginTop: 10, flexDirection: 'row' }}>
									<Text style={{ color: 'grey' }}>
										{orderData.roomValue} kamar
                                    </Text>
									<Icon name="primitive-dot" style={{ color: 'grey', marginTop: 3, marginLeft: 10, marginRight: 10 }} />
									<Text style={{ color: 'grey' }}>
										{orderData.personValue} Tamu
                                    </Text>
									<Icon name="primitive-dot" style={{ color: 'grey', marginTop: 3, marginLeft: 10, marginRight: 10 }} />

									<Text style={{ color: 'grey' }}>
										{orderData.daterange} Malam
                                    </Text>
								</View>
							</View>
						</View>
					</Card>

					<View style={{ flexDirection: 'row', margin: 15 }}>
						<Text>
							Check-in
                    </Text>
						<Right>
							<Text style={{ color: 'grey' }}>
								{orderData.chosenDate1.toString().substr(4, 12)}
							</Text>
						</Right>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginBottom: 15 }}>
						<Text>
							Check-out
                    </Text>
						<Right>
							<Text style={{ color: 'grey' }}>
								{orderData.chosenDate2.toString().substr(4, 12)}
							</Text>
						</Right>
					</View>

					<View>
						<Text style={{ margin: 15 }}>Detail Pemesan</Text>
					</View>

					<Card style={{ width: '90%', alignSelf: 'center', backgroundColor: '#eee' }}>

						<View style={{ margin: 12 }}>
							<Text style={{ fontSize: 13 }}>
								tuan {auth.first_name} {auth.last_name}
                                </Text>
							<Text style={{ fontSize: 13 }}>
								{auth.email}
                                </Text>
						</View>
					</Card>

					<View>
						<Text style={{ margin: 15 }}>Permintaan Khusus</Text>
					</View>
					<View>
						<Text style={{ fontSize: 13, marginBottom: 10, marginLeft: 15, marginTop: -5, color: 'grey' }}>
							Ada permintaan khusus yang membuat Anda lebih nyaman ? Minta disini.
							Partner kami akan berusaha memenuhinya, tergantung ketersediaan dan
							dikenakan biaya tambahan
                        </Text>
					</View>

					<TouchableOpacity>
						<Card style={{ width: '90%', alignSelf: 'center', backgroundColor: '#eee' }}>
							<View style={{ margin: 12 }}>
								<Text style={{ fontSize: 13, color: '#0064D2' }}>
									Buat Permintaan Khusus
                                </Text>
							</View>
						</Card>
					</TouchableOpacity>

					<View style={{ backgroundColor: '#eee', height: 1, marginTop: 30 }}></View>

					<View style={{ height: 54, backgroundColor: '#fff', flexDirection: 'row' }}>

						<Left style={{ marginLeft: 20 }}>
							<View>
								<Text>Total</Text>
							</View>
						</Left>



						<Right style={{ marginRight: 20 }}>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ color: '#0064D2', fontSize: 15 }}>{rupiahFormat(costRoom, 'Rp. ')
								}</Text>
								<Text style={{ fontSize: 13, color: 'grey', marginLeft: 3 }}>/kamar/malam</Text>
							</View>
						</Right>

					</View>

					<View style={{ alignItems: 'center', marginBottom: 10 }}>
						<TouchableOpacity
							onPress={() => this.props.handleConfirmOrder()}
							style={styles.buttonLogin}>
							<Text style={styles.buttonText}>LANJUTKAN KE PEMBAYARAN</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		)
	}
}

const BodyForm = withNavigation(BodyForms)
export default BodyForm