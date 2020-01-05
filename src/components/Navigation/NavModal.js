import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import {Button, Icon, Overlay} from 'react-native-elements';
import styles from '../../../styles/mainStyles';

class NavModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Overlay isVisible={this.props.visible} animationType="slide">
        <Button
          icon={<Icon name="close" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: 50,
          }}
          title=""
          onPress={this.props.hideNavBox}
        />
      </Overlay>
    );
  }
}

export default NavModal;
