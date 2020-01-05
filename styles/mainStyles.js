import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    flexDirection: 'column',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  redBox: {
    flex: 2,
    backgroundColor: 'red',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBox: {
    flex: 1,
    backgroundColor: 'green',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    width: '100%',
    borderBottomColor: '#8bb4e0',
    borderBottomWidth: 1,
  },
  searchBox: {
    width: '100%',
    borderBottomColor: '#8bb4e0',
    marginBottom: 15,
    borderBottomWidth: 1,
  },
  headlineItem: {
    backgroundColor: '#EEE',
    padding: 5,
    marginVertical: 5,
  },
  headlineInput: {
    fontSize: 13,
    fontFamily: 'Ubuntu-Light',
    letterSpacing: 1.1,
  },
  test: {
    padding: 5,
    backgroundColor: '#fcfcfc',
    borderColor: '#ededed',
    borderWidth: 1,
  },
  linksModal: {
    padding: 30,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  linksBox: {
    width: '50%',
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ubuntuLight: {
    fontFamily: 'Ubuntu-Light',
  },
  searchText: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.2,
  },
});

export default styles;
