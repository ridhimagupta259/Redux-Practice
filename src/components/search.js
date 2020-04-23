import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {searchApi} from '../services/Authenticate/action';
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
    const {navigation, searchdata, headerTag, isloading} = this.props;
    console.log(this.props);
    if (isloading === true) {
      return <Text>Nothing found</Text>;
    }
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text>{newdata[0].storeId}</Text> */}
        <TextInput
          style={styles.TextInputView}
          autoCapitalize="none"
          onChangeText={keyword => this.setState({keyword})}
        />
        {/* <TouchableOpacity
          onPress={() => {
            this.props.searchHomeApi(this.state.keyword, this.props.headerTag);
          }}>
          <Text>search</Text>
        </TouchableOpacity> */}
        <FlatList
          data={searchdata}
          renderItem={({item}) => {
            return (
              <View style={styles.textEdit}>
                <Text>{item.productName}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textEdit: {
    width: 300,
    height: 50,
    backgroundColor: '#d98cb3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
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
