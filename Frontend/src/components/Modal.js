import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';
import { TextInput } from 'react-native-paper'
import { List, Content, ListItem, Left, Body } from 'native-base'
import { SvgCssUri } from 'react-native-svg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ModalWidth = Dimensions.get('window').width;

export const ModalStateCode = (props) => {

  const _handleCloseStateCode = () => {
    props.closeModal()
  }

  const { isfetched, contriesData } = props

  return (
    <Modal
      visible={props.visible}
      modalAnimation={new SlideAnimation({
        slideFrom: 'bottom',
      })}
      style={styles.modalStateCode}
    >
      <ModalContent style={styles.ModalContentStateCode}>
        <View style={styles.header}>
          <View style={styles.containerTitleHeader}>
            <Icon name="close" size={25} color="#757575"
              onPress={_handleCloseStateCode} />
            <Text style={styles.textStateCode}>Kode Negara</Text>
          </View>
          <View>
            <TextInput
              label='Masukan nama negara'
              mode='outlined'
              style={styles.textInput}
              theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
            />
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Content>
              <List>
                {isfetched && contriesData.map(v => (
                  <ListItem key={v.alpha2Code}>
                    <Body style={{ flex: 1 }}>
                      <Text>{v.name} ({v.callingCodes})</Text>
                    </Body>
                  </ListItem>
                ))}
              </List>
            </Content>
          </ScrollView>
        </View>
      </ModalContent>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalStateCode: {
    flex: 1,
    margin: 0
  },
  ModalContentStateCode: {
    flex: 1,
    width: ModalWidth,
    margin: 0
  },
  header: {
    height: 110
  },
  containerTitleHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStateCode: {
    color: '#35405A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  textInput: {
    backgroundColor: "#FFF",
    height: 45,
    color: '#35405A',
    marginTop: 20
  }
})