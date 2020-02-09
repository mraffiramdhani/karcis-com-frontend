/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Card, CardItem, Text, Body, Left } from 'native-base';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import MyIcon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Modal, { SlideAnimation, ModalTitle, ModalContent } from 'react-native-modals';
import AfterLogin from './AfterLogin';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: '#eee',
  },
  row: {
    flexDirection: 'row',
  },
  metode: {
    backgroundColor: '#eee',
    borderRadius: 10,
    height: 30,
    width: 150,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 12,
    marginLeft: 5,
  },
  buttonYes: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: 45,
    width: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNo: {
    backgroundColor: 'green',
    borderRadius: 50,
    height: 45,
    width: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextLogin: {
    color: '#0064D2',
    fontSize: 15,
  },
});

class AfterOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      isLoading: false,
      isSuccess: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hotelOrder.isLoading !== this.state.isLoading) {
      if (prevProps.hotelOrder.isLoading) {
        this.setState({ isLoading: true });
      }
      else {
        this.setState({ isLoading: false, isSuccess: prevProps.hotelOrder.isSuccess });
      }
    }
  }

  render() {
    return (
      <Container>
        <ScrollView>
          {
            this.state.isLoading &&
            <ActivityIndicator style={{ marginTop: 20 }} size="large" color="blue" />
          }
          {
            !this.state.isLoading && this.props.hotelOrder.data.length === 0 &&
            <AfterLogin />
          }
          {!this.state.isLoading && this.state.isSuccess &&
            this.props.hotelOrder.data.map((v, i) => {
              return (
                <Card key={i}>
                  <CardItem bordered>
                    <Left>
                      <Icons1
                        name="hotel"
                        style={{
                          marginRight: 5,
                          fontSize: 20,
                          color: 'red',
                        }}
                      />
                      <Text>Hotel</Text>
                    </Left>
                    <TouchableOpacity onPress={() => { this.setState({ visible: true }) }}>
                      <MyIcon name="dots-three-vertical" style={styles.icon} />
                    </TouchableOpacity>
                  </CardItem>
                  <Modal
                    visible={this.state.visible}
                    modalTitle={<ModalTitle title="Hapus / Cancel Order" />}
                    modalAnimation={new SlideAnimation({
                      slideFrom: 'bottom',
                    })}
                    onTouchOutside={() => {
                      this.setState({ visible: false });
                    }}>

                    <ModalContent style={{ width: 350 }}>
                      <View><Text>Hapus pesanan ini ?</Text></View>
                      <TouchableOpacity
                        onPress={() => this.setState({ visible: false })}
                        style={[{ alignItems: 'center', marginBottom: 10 }, styles.buttonLogin]} >
                        <Text style={styles.buttonTextLogin}>Ya</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.setState({ visible: false })}
                        style={[{ alignItems: 'center', marginBottom: 10 }, styles.buttonLogin]} >
                        <Text style={styles.buttonTextLogin}>Tidak</Text>
                      </TouchableOpacity>
                    </ModalContent>
                  </Modal>
                  <CardItem bordered>
                    <Body>
                      <View>
                        <Text style={{ color: 'grey' }}>Order ID : {(v.id).toString().padStart(3, "0")}</Text>
                      </View>

                      <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 16 }}>{v.hotel}</Text>
                      </View>

                      <View style={{ marginTop: 5 }}>
                        <Text style={{ color: 'grey' }}>
                          {v.guest_count} Tamu
                        <MyIcon name="dot-single" style={{ fontSize: 20 }} />
                          <Text style={{ color: 'grey' }}> {v.room_count} Kamar </Text>
                        </Text>
                      </View>

                      <View style={({ marginTop: 5 }, styles.row)}>
                        <Icons1
                          name="calendar"
                          style={{
                            fontSize: 15,
                            marginTop: 5,
                            marginRight: 5,
                            color: 'grey',
                          }}
                        />
                        <Text style={{ color: 'grey' }}>
                          {new Date(v.check_in).toDateString()}
                          <MyIcon name="dot-single" style={{ fontSize: 20 }} />
                          <Text style={{ color: 'grey' }}> 1 Malam </Text>
                        </Text>
                      </View>

                      <TouchableOpacity style={styles.metode}>
                        <Text style={styles.buttonText}>Pilih metode pembayaran</Text>
                      </TouchableOpacity>
                    </Body>
                  </CardItem>
                </Card>
              )
            })
          }
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotelOrder: state.hotelOrder
  }
}

export default connect(mapStateToProps)(AfterOrder);