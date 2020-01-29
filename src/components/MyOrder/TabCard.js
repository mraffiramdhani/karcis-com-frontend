import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Tab, Tabs, TabHeading, ScrollableTab} from 'native-base';
import MyIcons from 'react-native-vector-icons/Octicons';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AfterLogin from './AfterLogin';
import AfterOrder from './AfterOrder';
import ComingSoon from './ComingSoon';
import AfterLoginAll from './AfterLoginAll';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 40,
    backgroundColor: '#0064D2',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  card1: {
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
  card2: {
    marginRight: 10,
    marginLeft: 10,
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
});

class TabCard extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return (
      <Tabs
        locked={true}
        renderTabBar={() => (
          <ScrollableTab
            underlineStyle={{backgroundColor: '#0064D2'}}
            style={{
              backgroundColor: '#fff',
              height: 70,
            }}
          />
        )}>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <MyIcons
                    name="primitive-dot"
                    style={{marginLeft: 5, fontSize: 30, color: 'yellow'}}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginBottom: 10,
                      marginLeft: 5,
                    }}>
                    Semua
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
            {/* <AfterLoginAll /> */}
          <AfterOrder />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Icons1
                    name="plane"
                    style={{
                      marginLeft: 5,
                      marginTop: 5,
                      fontSize: 20,
                      color: '#0064D2',
                    }}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Pesawat
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
          <ComingSoon />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Icons1
                    name="hotel"
                    style={{
                      marginTop: 5,
                      marginLeft: 5,
                      fontSize: 20,
                      color: 'red',
                    }}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Hotel
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
            <AfterLogin />
           
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Icon
                    name="train"
                    style={{
                      marginLeft: 5,
                      marginTop: 5,
                      fontSize: 20,
                      color: 'orange',
                    }}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Kereta
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
          <ComingSoon />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Icon2
                    name="directions-car"
                    style={{
                      marginLeft: 5,
                      marginTop: 5,
                      fontSize: 20,
                      color: 'green',
                    }}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Sewa Mobil
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
          <ComingSoon />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card1}>
                  <Icon3
                    name="tent"
                    style={{
                      marginLeft: 5,
                      marginTop: 5,
                      fontSize: 20,
                      color: 'green',
                    }}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Atraksi
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
          <ComingSoon />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{backgroundColor: '#0064D2', width: 100}}>
              <TouchableOpacity>
                <View style={styles.card2}>
                  <Icon3
                    name="ticket"
                    style={{
                      marginLeft: 5,
                      marginTop: 5,
                      fontSize: 20,
                      color: 'purple',
                    }}
                  />
                  <Text
                    style={{
                      color: '#0064D2',
                      fontSize: 12,
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Event
                  </Text>
                </View>
              </TouchableOpacity>
            </TabHeading>
          }>
          <ComingSoon />
        </Tab>
      </Tabs>
    );
  }
}

export default TabCard;
