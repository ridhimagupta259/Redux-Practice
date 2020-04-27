import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {searchApi} from '../services/Authenticate/action';
import {colorConstants, imageConstants} from '../config/constants';
class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.keyword.length >= 3) {
      props.searchHomeApi(state.keyword, props.headerTag);
    }
  }

  render() {
    const {navigation, searchdata} = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.concept}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Listing');
            }}>
            <Image style={styles.backimage} source={imageConstants.backArrow} />
          </TouchableOpacity>
          <TextInput
            style={styles.TextInputView}
            autoCapitalize="none"
            placeholder="Search..."
            placeholderTextColor="#808080"
            onChangeText={keyword => this.setState({keyword})}
          />
        </View>
        <View style={styles.lowerView}>
          <FlatList
            data={searchdata}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {data: item});
                  }}>
                  <View style={styles.textEdit}>
                    <Text>{item.productName}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.white,
    flex: 1,
  },
  lowerView: {
    flex: 0.87,
    backgroundColor: colorConstants.white,
    marginTop: 10,
  },
  textEdit: {
    height: 70,
    padding: 20,
    marginVertical: 5,
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: colorConstants.greyStrip,
  },
  TextInputView: {
    height: 40,
    width: 300,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  concept: {
    flex: 0.13,
    flexDirection: 'row',
    backgroundColor: colorConstants.white,
    alignItems: 'flex-end',
    shadowColor: colorConstants.shadow,
    shadowOffset: {width: 0, height: 0.7},
    shadowOpacity: 0.38,
    shadowRadius: 5.0,

    elevation: 1,
  },
  backimage: {
    height: 28,
    width: 28,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
  },
});

const mapStateToProps = state => ({
  headerTag: state.homeReducer.header,
  searchdata: state.authenticateReducer.searchData,
  isloading: state.authenticateReducer.isloading,
});

const mapDispatchToProps = {
  searchHomeApi: searchApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing);
