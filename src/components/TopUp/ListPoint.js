import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';

class ListPoint extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Top Up Saldo Karcis Point</Text>
            </ListItem>
            <ListItem>
              <Text>Top Up History</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default ListPoint;
