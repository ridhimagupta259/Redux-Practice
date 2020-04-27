import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {dataApi} from '../services/Authenticate/action';
import {colorConstants, imageConstants} from '../config/constants';
class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, newdata} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.concept}>
          <View style={styles.upperview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Concept');
              }}>
              <Image
                style={styles.backimage}
                source={imageConstants.backArrow}
              />
            </TouchableOpacity>
            <Text style={styles.textstyle}>Select Store</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <View>
              <Image style={styles.findimage} source={imageConstants.find} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlistview}>
          <FlatList
            data={newdata}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Search');
                  }}>
                  <View style={styles.textEdit}>
                    <Text style={styles.uppertext}>{item.storeName}</Text>
                    <View style={styles.lowertext}>
                      <Text style={styles.textfont}>{item.storeAddress}, </Text>
                      <Text style={styles.textfont}>{item.city}</Text>
                    </View>
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
    this.props.dataHomeApi(this.props.headerTag);
    console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.white,
    flex: 1,
  },
  upperview: {flexDirection: 'row'},
  textEdit: {
    //width: '100%',
    height: 100,
    backgroundColor: colorConstants.white,
    padding: 20,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.08,
    shadowRadius: 6.32,

    elevation: 1,
  },
  concept: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 10,
  },
  textstyle: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textfont: {
    fontSize: 17,
  },
  backimage: {height: 25, width: 25, marginTop: 7},
  findimage: {height: 25, width: 25, marginRight: 20, marginTop: 7},
  flatlistview: {marginHorizontal: 20},
  uppertext: {fontWeight: 'bold', fontSize: 17},
  lowertext: {flexDirection: 'row', marginTop: 5},
});

const mapStateToProps = state => ({
  headerTag: state.homeReducer.header,
  newdata: state.authenticateReducer.isData,
});

const mapDispatchToProps = {
  dataHomeApi: dataApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing);
