import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconA from 'react-native-vector-icons/AntDesign'
import { List, ListItem, Left, Right, Body } from 'native-base'

import { HeaderProfile } from '../../components/Header'
import HorizontalProfileMission from '../../components/HorizontalProfileMission'
import { ScrollView } from 'react-native-gesture-handler'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 4.9;

export default class Account extends Component {
  render() {
    return (
      <SafeAreaView>
        <HeaderProfile title="Akun" />
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.banner}>
            </View>
            <View style={styles.bannerContent}>
              <View style={styles.containerName}>
                <Text style={styles.textName}>Rahman Wu</Text>
                <Icon name="pencil" size={20} color='#0064D2' />
              </View>
              <View style={styles.containerVerify}>
                <Text style={styles.textVerify}>Unverified</Text>
                <IconA name="checkcircleo" color="#757575" />
              </View>
              <View style={styles.containerSaldo}>
                <Icon name="ticket-confirmation" size={20} color='#FFBF00' />
                <Text style={styles.textSaldo}>Basic - 1.000 </Text>
                <Text style={styles.textTixPoint}>TIX Point</Text>
              </View>
            </View>
            <Text style={styles.textSubtitle}>Selesaikan semua misi dan dapatkan 10.000 TIX Points</Text>
            <View>
              <HorizontalProfileMission />
            </View>
          </View>
          <View style={styles.containerOptionProfile}>
            <List>
              <ListItem>
                <Left>
                  <Icon name="account-card-details-outline" size={25} />
                </Left>
                <Body style={{ flex: 6 }}>
                  <Text style={styles.textTitleOption}>Smart Profile</Text>
                  <Text style={styles.textDescOption}>Pesan lebih cepat, isi data penumpang dengan satu klik.</Text>
                </Body>
                <Right style={{ flex: 0.6 }}>
                  <Icon name="chevron-right" size={25} color="#757575" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Icon name="credit-card" size={25} />
                </Left>
                <Body style={{ flex: 6 }}>
                  <Text style={styles.textTitleOption}>Smart Pay</Text>
                  <Text style={styles.textDescOption}>Cara membayar dan menerima refund yang lebih cepat & aman.</Text>
                </Body>
                <Right style={{ flex: 0.6 }}>
                  <Icon name="chevron-right" size={25} color="#757575" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Icon name="credit-card-plus" size={25} />
                </Left>
                <Body style={{ flex: 6 }}>
                  <Text style={styles.textTitleOption}>Daftar Refund</Text>
                  <Text style={styles.textDescOption}>Pesan lebih cepat, isi data penumpang dengan satu klik.</Text>
                </Body>
                <Right style={{ flex: 0.6 }}>
                  <Icon name="chevron-right" size={25} color="#757575" />
                </Right>
              </ListItem>
            </List>
          </View>
          <View style={styles.containerOptionProfile1}>
            <List>
              <ListItem last>
                <Body>
                  <Text style={styles.textTitleOption}>Loyalty Program</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={25} color="#757575" />
                </Right>
              </ListItem>
            </List>
          </View>
          <View style={styles.containerOptionProfile2}>
            <List>
              <ListItem>
                <Body>
                  <Text style={styles.textTitleOption}>Pengaturan</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={25} color="#757575" />
                </Right>
              </ListItem>
              <ListItem last>
                <Body>
                  <Text style={styles.textTitleOption}>Pusat Bantuan</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={25} color="#757575" />
                </Right>
              </ListItem>
            </List>
          </View>
          <View style={styles.containerOptionProfile3}>
            <List>
              <ListItem last>
                <Body>
                  <Text style={styles.textTitleOption}>Keluar</Text>
                </Body>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    height: BannerHeight,
    width: BannerWidth,
    backgroundColor: '#0064D2'
  },
  body: {
    backgroundColor: '#FFF',
    paddingBottom: 20,
    marginBottom: 20
  },
  bannerContent: {
    height: BannerHeight / 1,
    width: '90%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: -100,
    elevation: 5,
    borderRadius: 5,
    padding: 16
  },
  containerName: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textName: {
    color: '#35405A',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerVerify: {
    flexDirection: "row",
    alignItems: 'center'
  },
  textVerify: {
    fontSize: 13,
    color: '#F26A67',
    paddingVertical: 5,
    marginRight: 5
  },
  containerSaldo: {
    flexDirection: "row"
  },
  textSaldo: {
    color: '#35405A',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 2
  },
  textTixPoint: {
    color: '#35405A',
    fontSize: 14,
  },
  textSubtitle: {
    color: '#35405A',
    fontSize: 14,
    paddingHorizontal: 16,
    marginTop: 16
  },
  textTitleOption: {
    color: '#35405A',
    fontSize: 16
  },
  containerOptionProfile: {
    backgroundColor: '#FFF',
    marginBottom: 20
  },
  containerOptionProfile1: {
    backgroundColor: '#FFF',
    marginBottom: 20
  },
  containerOptionProfile2: {
    backgroundColor: '#FFF',
    marginBottom: 20
  },
  containerOptionProfile3: {
    backgroundColor: '#FFF',
    marginBottom: 100
  },
  textDescOption: {
    color: '#646D83',
    fontSize: 13
  }
})
