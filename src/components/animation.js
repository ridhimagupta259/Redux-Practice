import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  View,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {colorConstants} from '../config/constants';
class animation extends React.Component {
  constructor(props) {
    super(props);
    this.opacity = 1;
    this.opacitytext = 0;
    this.animationValue = new Animated.Value(this.opacity);
    this.animationvaluenew = new Animated.Value(this.opacitytext);

    this.state = {};
  }

  animate = () => {
    this.opacity = this.opacity === 1 ? 0 : 1;
    this.opacitytext = this.opacitytext === 0 ? 1 : 0;

    Animated.timing(this.animationValue, {
      toValue: this.opacity,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.animationvaluenew, {
      toValue: this.opacitytext,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            //backgroundColor:'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.Text
            style={
              (styles.maintext,
              {
                fontSize: 30,
                opacity: this.opacity,
                transform: [
                  {
                    translateY: this.animationValue.interpolate({
                      inputRange: [1, 2],
                      outputRange: [0, 300],
                    }),
                  },
                ],
              })
            }>
            PRISKOLL
          </Animated.Text>
          <Animated.Text
            style={{
              opacity: this.animationValue,
            }}>
            Some data
          </Animated.Text>

          <Animated.View
            style={{
              opacity: this.animationvaluenew,
            }}>
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
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.animate();
    }, 2000);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.white,
    flex: 1,
  },
  input: {
    fontSize: 15,
    borderBottomColor: colorConstants.greyColor,
    borderBottomWidth: 0.5,
    marginHorizontal: 30,
    paddingBottom: 25,
  },
  textview: {
    backgroundColor: colorConstants.orangeColor,
    //justifyContent: 'space-around',
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
)(animation);
