import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import styles from '../../../styles/mainStyles';

export default class SearchBox extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
    this.props.searchOnChange(search);
    // console.log(this.state.search);
  };

  render() {
    const {search} = this.state;
    return (
      <View style={styles.searchBox}>
        <SearchBar
          lightTheme={true}
          placeholder="verification search..."
          onChangeText={this.updateSearch}
          value={search}
          inputStyle={styles.searchText}
        />
      </View>
    );
  }
}
