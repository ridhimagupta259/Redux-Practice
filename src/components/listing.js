import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {dataApi} from '../services/Authenticate/action';
class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, newdata, headerTag} = this.props;
    //console.log(newdata[0].storeId);
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text>{newdata[0].storeId}</Text> */}
        <FlatList
          data={newdata}
          renderItem={({item}) => {
            return (
              <View style={styles.textEdit}>
                <Text>{item.storeId}</Text>
                <Text>{item.storeName}</Text>
                <Text>{item.city}</Text>
                <Text>{item.storeAddress}</Text>
                <Text>{item.storezipcode}</Text>

              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.props.dataHomeApi();
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
    width: '100%',
    height: 100,
    backgroundColor: '#d98cb3',
    borderRadius:10,
    padding:10,
    marginVertical:5,

  },
});

const mapStateToProps = state => ({
  //headerTag: state.homeReducer.header,
  newdata: state.authenticateReducer.isData,
});

const mapDispatchToProps = {
  dataHomeApi: dataApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing);
