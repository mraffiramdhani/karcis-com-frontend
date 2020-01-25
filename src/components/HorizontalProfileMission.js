import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconF from 'react-native-vector-icons/Feather'
import IconI from 'react-native-vector-icons/Ionicons'

export default class HorizontalProfileMission extends Component {
  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.containerMission}>
          <View style={styles.containerMissionItem}>
            <Icon name="cellphone-settings" size={30} color="#0064D2" />
            <View style={styles.containerHeight}>
              <Text style={styles.textCardMissionItem}>Verifikasi nomor ponselmu</Text>
              <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>5000</Text>
                <Icon name="ticket-confirmation" size={20} color='#FFBF00' />
              </View>
            </View>
            <TouchableOpacity
              style={styles.btn}>
              <Text style={styles.textBtn}>VERFIKASI</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.containerMissionItem}>
            <IconF name="user-plus" size={30} color="#0064D2" />
            <View style={styles.containerHeight}>
              <Text style={styles.textCardMissionItem}>Lengkapi detail utama Smart Profil</Text>
              <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>2000</Text>
                <Icon name="ticket-confirmation" size={20} color='#FFBF00' />
              </View>
            </View>
            <TouchableOpacity
              style={styles.btn}>
              <Text style={styles.textBtn}>LENGKAPI</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.containerMissionItem}>
            <Icon name="account-card-details-outline" size={30} color="#0064D2" />
            <View style={styles.containerHeight}>
              <Text style={styles.textCardMissionItem}>Tambah & lengkapi 1 Smart Profile baru</Text>
              <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>2000</Text>
                <Icon name="ticket-confirmation" size={20} color='#FFBF00' />
              </View>
            </View>
            <TouchableOpacity
              style={styles.btn}>
              <Text style={styles.textBtn}>TAMBAH</Text>
            </TouchableOpacity >
          </View>
          <View style={[styles.containerMissionItem, { marginRight: 16 }]}>
            <IconI name="md-paper" size={30} color="#0064D2" />
            <View style={styles.containerHeight}>
              <Text style={styles.textCardMissionItem}>Gabung ke tiket.com</Text>
              <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>1000</Text>
                <Icon name="ticket-confirmation" size={20} color='#FFBF00' />
              </View>
            </View>
            <Text style={styles.textDoneMission}>Misi Selesai!</Text>
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  containerMission: {
    flexDirection: "row"
  },
  containerMissionItem: {
    width: 170,
    height: 180,
    marginLeft: 16,
    elevation: 7,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCardMissionItem: {
    color: '#35405A',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
    marginTop: 5
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textPrice: {
    color: '#646D83',
    fontSize: 13,
    marginBottom: 10,
    marginRight: 2
  },
  btn: {
    width: '95%',
    backgroundColor: '#FEDD00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 50
  },
  textBtn: {
    color: '#0064D2',
    fontWeight: 'bold',
    fontSize: 18
  },
  containerHeight: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDoneMission: {
    color: '#1FAF85'
  }
})
