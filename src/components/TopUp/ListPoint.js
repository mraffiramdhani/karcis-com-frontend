import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

class ListPoints extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FormTopUp')}>
              <ListItem>
                <Text>Top Up Saldo Karcis Point</Text>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FormHistory')}>
              <ListItem>
                <Text>Top Up History</Text>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  }
}

const ListPoint = withNavigation(ListPoints);
export default ListPoint;
