import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colorConstants, imageConstants} from '../config/constants';
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: true,
      finaldata: '',
    };
  }
  render() {
    const {navigation} = this.props;
    const data = this.state.finaldata;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={imageConstants.backArrow}
              style={styles.backbutton}
            />
          </TouchableOpacity>
          <Text style={styles.TitleTextView}>Product Details</Text>
        </View>
        <View style={styles.lowerNameView}>
          <Text style={styles.TextProductname}>{data.productName}</Text>
          <Text style={styles.textProductSAP}>{data.productNumberSAP}</Text>
        </View>
        <Text style={styles.lastScannedText}>Last Scanned Details</Text>
        <View style={styles.boxDetailsView}>
          <View style={styles.innerBoxQuantityView}>
            <Text style={styles.BoxHeadingText}>Quantity</Text>
            <Text style={styles.boxDataText}>
              {data.volume === null ? 0 : data.volume}Kg
            </Text>
          </View>
          <View style={styles.boxinnerViewPrice}>
            <Text style={styles.BoxHeadingText}>Price</Text>
            <Text style={styles.boxDataText}>
              ${data.price === null ? 0 : data.price}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  componentDidMount() {
    const {route} = this.props;
    if (this.state.input === true) {
      this.setState({finaldata: route.params.data, input: false});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorConstants.white,
    flex: 1,
  },
  lowerNameView: {
    flex: 0.11,
    backgroundColor: colorConstants.white,
    marginTop: 20,
  },
  boxinnerViewPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 25,
    alignItems: 'center',
    borderTopColor: '#d4d4d4',
    borderTopWidth: 1,
  },
  boxDataText: {fontSize: 17, fontWeight: '600', color: '#858585'},
  BoxHeadingText: {fontSize: 16, fontWeight: '500', color: '#858585'},
  innerBoxQuantityView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 25,
    alignItems: 'center',
  },
  textProductSAP: {
    marginHorizontal: 35,
    fontSize: 17,
    fontWeight: '400',
    marginTop: 10,
    color: '#4a4a4a',
  },
  lastScannedText: {
    fontSize: 14,
    marginHorizontal: 35,
    fontWeight: '400',
    color: '#4a4a4a',
    marginTop: 8,
  },
  boxDetailsView: {
    marginHorizontal: 35,
    flex: 0.15,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
    borderRadius: 3,
  },
  TextProductname: {fontSize: 22, marginHorizontal: 35, fontWeight: '400'},
  backbutton: {
    height: 28,
    width: 28,
    marginLeft: 18,
    marginBottom: 20,
  },
  headerView: {
    flex: 0.13,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  TitleTextView: {
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Details;
