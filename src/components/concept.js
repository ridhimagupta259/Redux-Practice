import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {conceptApi} from '../services/Authenticate/action';
import {toggleSplash} from '../services/Home/action';
import {colorConstants, imageConstants} from '../config/constants';

class Concept extends React.Component {
  constructor(props) {
    super(props);
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('header', this.props.headerTag);
    } catch (error) {
      console.warn('error while logging out');
    }
  };
  logout = async () => {
    await AsyncStorage.clear();
    this.props.toggleSplash();
    this.props.navigation.navigate('Splash');
  };

  render() {
    const {navigation, conceptData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.concept}>
          <View>
            <Text style={styles.textstyle}>Select Concept</Text>
          </View>
          <TouchableOpacity onPress={() => this.logout()}>
            <View>
              <Image style={styles.imagestyle} source={imageConstants.logout} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={conceptData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Listing');
                  }}>
                  <View style={styles.textEdit}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    const {headerTag} = this.props;
    this.props.conceptHomeApi(headerTag);
    this.storeData();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.white,
    flex: 1,
  },
  textEdit: {
    height: 60,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    marginLeft: 20,
  },
  concept: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textstyle: {
    marginLeft: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagestyle: {height: 25, width: 25, marginRight: 20, marginTop: 7},
});

const mapStateToProps = state => ({
  conceptData: state.authenticateReducer.conceptData,
  headerTag: state.homeReducer.header,
});

const mapDispatchToProps = {
  conceptHomeApi: conceptApi,
  toggleSplash: toggleSplash,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concept);
