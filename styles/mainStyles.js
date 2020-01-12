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
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderColor: '#ededed',
    borderWidth: 1,
    height: 150,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  truthCard: {
    margin: 10,
    height: '93%',
    padding: 0,
    borderColor: '#ededed',
    borderWidth: 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    elevation: 3,
  },
  truthCardScroll: {
    padding: 15,
    height: 50,
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  truthCardImage: {
    width: '100%',
    height: 150,
  },
  truthCardHeadline: {
    height: 35,
    backgroundColor: '#383838',
    alignItems: 'center',
    justifyContent: 'center',
  },
  truthCardHeadlineText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'ubuntu-light',
  },
});

export default styles;
