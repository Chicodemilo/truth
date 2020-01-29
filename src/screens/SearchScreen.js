import React, {Component} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../../styles/mainStyles';
import SearchBox from '../components/Search/SearchBox';
import {connect} from 'react-redux';

class SearchScreen extends Component {
  state = {
    searchString: '',
    testValue: false,
  };

  handleSearchInput = text => {
    this.setState({
      searchString: text,
    });
  };

  setTestValue = value => {
    this.setState({
      testValue: value,
    });
  };

  saveFilters = () => {
    const appliedFilters = {
      testFilter: this.state.testValue,
    };
    console.log(appliedFilters);
  };

  render() {
    let searchText =
      this.state.searchString.length < 1
        ? null
        : this.props.fillerTruths
            .filter(truth => {
              return truth.searchTerms
                .substring(0, this.state.searchString.length)
                .toLowerCase()
                .includes(this.state.searchString.toLowerCase());
            })
            .map(result => {
              return (
                <View style={styles.test} key={result.id}>
                  <Text>{result.searchTerms}</Text>
                </View>
              );
            });

    return (
      <View>
        <SearchBox searchOnChange={this.handleSearchInput} />
        <View style={styles.test}>
          <Text>Switch Test: {this.props.userName}</Text>
          <Switch
            trackColor={{true: 'orange', false: 'red'}}
            thumbColor="#0a2963"
            value={this.state.testValue}
            onValueChange={newValue => this.setTestValue(newValue)}
          />
        </View>
        {searchText}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fillerTruths: state.truths.fillerTruths,
    userName: state.truths.userName,
  };
};

// Use this later
const mapDispatchToProps = dispatch => {
  return {
    onNameChange: () => dispatch(),
  };
};

// The second arg on conn would be mapping dispatch to props
export default connect(mapStateToProps)(SearchScreen);
