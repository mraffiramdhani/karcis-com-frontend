/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Card} from 'native-base';
// import {withNavigation} from 'react-navigation';

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
});

class FilterButton extends Component {
  render() {
    return (
      <Card
        style={styles.bottom}
        onPress={() => this.props.navigation.navigate('FilterPage')}>
        <Text style={{color: '#0064D2', margin: 5}}>
          {' '}
          <Icons name="filter" style={styles.iconFilter} /> Urutkan & Filter{' '}
        </Text>
      </Card>
    );
  }
}

// const FilterButton = withNavigation(FilterButtons);
export default FilterButton;
