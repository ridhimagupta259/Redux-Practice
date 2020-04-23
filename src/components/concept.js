import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag} from '../services/Home/action';
import {conceptApi} from '../services/Authenticate/action';
class Concept extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, conceptData} = this.props;
    console.log(this.props.conceptData);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={conceptData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Listing');
                }}>
                <View style={styles.textEdit}>
                  <Text>{item.retailer.retailerName}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  componentDidMount() {
    const {headerTag, conceptData} = this.props;
    this.props.conceptHomeApi(headerTag);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
  },
  textEdit: {
    width: '100%',
    height: 50,
    backgroundColor: '#d98cb3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
});

const mapStateToProps = state => ({
  //flag: state.homeReducer.homeFlag,
  conceptData: state.authenticateReducer.conceptData,
  headerTag: state.homeReducer.header,
});

const mapDispatchToProps = {
  conceptHomeApi: conceptApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concept);
