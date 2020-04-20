import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag} from '../services/Home/action';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'axfood',
      password: 'axfood@123',
      headerTag: ' ',
      isLoggedin: false,
    };
  }
  onChangeText(input) {}
  render() {
    const {navigation, loading, failed, success} = this.props;
    const {username, password} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.usernameView}>Username</Text>
          <TextInput
            style={styles.TextInputView}
            autoCapitalize="none"
            onChangeText={username => this.setState({username})}
          />
        </View>
        <View>
          <Text style={styles.usernameView}>Password</Text>
          <TextInput
            style={styles.TextInputView}
            autoCapitalize="none"
            onChangeText={password => this.setState({password})}
          />
        </View>
        <TouchableOpacity
          style={styles.touchableView}
          // onPress={() => navigation.navigate('HomeScreen')}
          onPress={() => {
            this.props.toggleHomeFlag(username, password);
            //console.warn(this.props);
            if (loading === true && success === false && failed === false) {
              //console.warn(this.props);
              return (
                <View style={styles.Activity}>
                  <ActivityIndicator />
                </View>
              );
            } else if (success === true) {
              navigation.navigate('Listing');
              //console.warn(this.props)
            } else if (loading === true && failed === true) {
              //console.warn(this.props);
              return Alert.alert('invalid credentials');
            }
          }}>
          <Text style={styles.usernameView}>press to login</Text>
        </TouchableOpacity>
        {/* <Text>input username is: {username}</Text>
        <Text> input password is : {password}</Text> */}
      </SafeAreaView>
    );
  }

  componentDidMount() {
    const {username, password} = this.state;
    //console.warn(this.props);
    // setTimeout(() => {
    // this.props.toggleHomeFlag(username, password);
    //console.warn(this.props);
    //   this.props.flag;
    // }, 4000);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
  },
  usernameView: {
    fontSize: 20,
    color: 'black',
  },
  TextInputView: {
    height: 40,
    width: 300,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  Activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  touchableView: {
    width: 200,
    height: 30,
    //backgroundColor: '',
    alignItems: 'center',
    marginBottom: 40,
  },
});

const mapStateToProps = state => ({
  failed: state.homeReducer.isFailed,
  success: state.homeReducer.isSuccess,
  loading: state.homeReducer.isLoading,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
