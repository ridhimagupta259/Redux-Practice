import React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag} from '../services/Home/action';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, flag} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Move to Login</Text>
          {/* <Text>{flag}</Text> */}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    // setTimeout(() => {
    //this.props.toggleHomeFlag();
    // }, 4000);
    // console.log(this.props);
    // //console.log(this.props.flag);
    // this.props.toggleHomeFlag();
    // console.log(this.props.flag);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEdit: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
});

const mapStateToProps = state => ({
  //flag: state.homeReducer.homeFlag,
});

const mapDispatchToProps = {
  //toggleHomeFlag: toggleFlag,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
