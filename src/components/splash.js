import React from 'react';
import {View, AsyncStorage, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {toggleSplash} from '../services/Home/action';
import {colorConstants, imageConstants} from '../config/constants';
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerview}>
          <Image source={imageConstants.axfoodLogo} style={styles.LogoStyle} />
        </View>
      </View>
    );
  }
  retrieveData = async () => {
    const {navigation} = this.props;
    try {
      const value = await AsyncStorage.getItem('header');
      if (value !== null) {
        this.props.toggleSplash();
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Concept'}],
          });
        }, 3000);
      }
      if (value === null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    } catch (error) {
      console.log('no data');
    }
  };
  componentDidMount() {
    this.retrieveData();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerview: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoStyle: {
    height: 40.5,
    width: 200.5,
    resizeMode: 'contain',
  },
});
const mapStateToProps = state => ({
  tokenvalue: state.homeReducer.header,
});

const mapDispatchToProps = {
  toggleSplash: toggleSplash,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
