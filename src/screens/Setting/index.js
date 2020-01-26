import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { List, ListItem, Left, Right, Radio, Switch } from 'native-base'
import Icon from 'react-native-vector-icons/Feather'

import { HeaderForgotPassword } from '../../components/Header'

class Setting extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderForgotPassword
          onPressLeft={() => this.props.navigation.pop(1)}
          title="Pengaturan" />
        <ScrollView>
          <View style={styles.body}>
            <List>
              <ListItem itemDivider>
                <Text style={styles.textSectionTitle}>Umum</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Bahasa</Text>
                </Left>
                <Right style={styles.containerRightListitem}>
                  <Radio selected={true}
                    color="#757575" /><Text style={styles.textOption}> IND   |    </Text>
                  <Radio selected={false}
                    color="#757575" /><Text style={styles.textOption}> ENG </Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Notifikasi</Text>
                </Left>
                <Right>
                  <Switch value={true}
                    trackColor="#0064D2"
                    thumbColor="#0064D2"
                  />
                </Right>
              </ListItem>
              {/* <View style={styles.containerSettingAfterLogin}>
                <ListItem itemDivider>
                  <Text style={styles.textSectionTitle}>Akun & Keamanan</Text>
                </ListItem>
                <ListItem style={styles.listItemAfterLogin}>
                  <Left>
                    <Text style={styles.textSectionSubtitle}>Email dan Nomor Ponsel</Text>
                  </Left>
                  <Right>
                    <Icon name="chevron-right" size={20} color="#757575" />
                  </Right>
                </ListItem>
                <ListItem style={styles.listItemAfterLogin}>
                  <Left>
                    <Text style={styles.textSectionSubtitle}>Pengaturan Keamanan</Text>
                  </Left>
                  <Right>
                    <Icon name="chevron-right" size={20} color="#757575" />
                  </Right>
                </ListItem>
              </View> */}
              <ListItem itemDivider>
                <Text style={styles.textSectionTitle}>Lainnya</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Tentang tiket.com</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" size={20} color="#757575" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Pusat Bantuan</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" size={20} color="#757575" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Kebijakan Privasi</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" size={20} color="#757575" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Syarat dan Ketentuan</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" size={20} color="#757575" />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text style={styles.textSectionSubtitle}>Beli Nilai App tiket.com</Text>
                </Left>
                <Right>
                  <Text style={styles.textSectionSubtitle}>v3.19.0</Text>
                </Right>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  body: {
    flex: 1,
    marginBottom: 10
  },
  textSectionTitle: {
    color: '#35405A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSectionSubtitle: {
    color: '#35405A',
    fontSize: 16,
  },
  containerRightListitem: {
    flexDirection: "row",
    flex: 0.5,
    alignItems: 'center'
  },
  textOption: {
    color: '#757575',
    fontSize: 12
  },
  containerSettingAfterLogin: {
    backgroundColor: '#F4F4F4',
    paddingVertical: 20,
  },
  listItemAfterLogin: {
    backgroundColor: '#FFF',
    marginLeft: 0,
    paddingLeft: 18
  }
})

export default Setting
