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
      username: '',
      password: '',
      headerTag: ' ',
      isLoggedin: false,
    };
  }
  render() {
    const {navigation, flag, headerTag, isLoading} = this.props;
    if (isLoading === true) {
      return (
        <SafeAreaView style={styles.activity}>
          <ActivityIndicator size={'large'} />
        </SafeAreaView>
      );
    } else if (headerTag) {
      return <SafeAreaView>{navigation.navigate('Concept')}</SafeAreaView>;
    }
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter User Id"
          onChangeText={text => this.setState({username: text})}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter User Id"
          onChangeText={text => this.setState({password: text})}
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={() => {
            this.props.toggleHomeFlag(this.state.username, this.state.password);
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>{flag}</Text>
      </SafeAreaView>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    flex: 0.07,
    width: '80%',
    borderRadius: 10,
    fontSize: 20,
    margin: 10,
  },
});

const mapStateToProps = state => ({
  headerTag: state.homeReducer.header,
  loading: state.homeReducer.isLoading,
});

const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
