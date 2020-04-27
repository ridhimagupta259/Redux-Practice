import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {colorConstants, imageConstants} from '../config/constants';
import {toggleFlag, toggleSuccess} from '../services/Home/action';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      headerTag: ' ',
      isLoggedin: false,
    };
  }
  render() {
    const {navigation, headerTag, isLoading} = this.props;
    return (
      <ImageBackground source={imageConstants.bg} style={styles.container}>
        <View style={styles.whiteview}>
          <View style={styles.logo}>
            <Image source={imageConstants.axfoodLogo} />
          </View>
          <View style={styles.textview}>
            <TextInput
              style={styles.input}
              placeholder="Enter User Id"
              placeholderTextColor="#808080"
              onChangeText={text => this.setState({username: text})}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#808080"
              secureTextEntry="true"
              onChangeText={text => this.setState({password: text})}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.container}>
            <View style={styles.loginview}>
              <TouchableOpacity
                style={styles.login}
                onPress={() => {
                  this.props.toggleHomeFlag(
                    this.state.username,
                    this.state.password,
                  );
                }}>
                <Text style={styles.logintext}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <Text style={styles.textpassword}>Forgot Password?</Text>
            </View>
            <View style={styles.lowerview}>
              <View style={styles.innerlowerview}>
                <Text style={styles.innertextstyle}>New User?</Text>
                <Text style={styles.innertext}>Signup</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
  togglesuccessvalue() {
    this.props.toggleSuccess();
  }
  static getDerivedStateFromProps(props, state) {
    const {navigation} = props;
    if (props.success === 'true') {
      navigation.reset({
        index: 0,
        routes: [{name: 'Concept'}],
      });
    }
    if (props.success === 'failed') {
      Alert.alert('Error', 'Wrong Login Credentials', [
        {
          text: 'Try Again',
          onPress: () => props.toggleSucess(),
        },
      ]);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 15,
    borderBottomColor: colorConstants.greyColor,
    borderBottomWidth: 0.5,
    marginHorizontal: 30,
    paddingBottom: 25,
  },
  whiteview: {
    flex: 0.7,
    backgroundColor: colorConstants.white,
  },
  logo: {
    marginTop: 110,
    marginLeft: 30,
  },
  textview: {
    marginTop: 80,
    justifyContent: 'space-around',
    flex: 1,
  },
  login: {
    paddingVertical: 15,
    backgroundColor: colorConstants.orangeColor,
    borderRadius: 5,
    margin: 30,
    height: 50,
  },
  loginview: {
    flex: 1,
    justifyContent: 'space-around',
  },
  logintext: {
    color: colorConstants.white,
    alignSelf: 'center',
    fontWeight: '500',
  },
  textpassword: {
    color: colorConstants.greyColor,
    alignSelf: 'center',
    marginTop: 20,
  },
  lowerview: {flex: 1, marginBottom: 10},
  innerlowerview: {flexDirection: 'row', justifyContent: 'center'},
  innertextstyle: {
    color: colorConstants.greyColor,
    alignSelf: 'center',
    marginTop: 10,
  },
  innertext: {
    color: colorConstants.orangeColor,
    marginTop: 10,
    fontWeight: '500',
  },
});

const mapStateToProps = state => ({
  headerTag: state.homeReducer.header,
  loading: state.homeReducer.isLoading,
  success: state.homeReducer.isSuccess,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  toggleSucess: toggleSuccess,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
