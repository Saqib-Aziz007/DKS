import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  TEXT_COLOR_BLACK,
} from '../../Constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: 80,
    width: '100%',
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 12,
    marginVertical: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: TERTIARY_COLOR,
    borderWidth: 0.3,
    overflow: 'hidden',
  },
  productNameContainer: {flex: 2.2},
  priceTextStyle: {fontSize: 12, color: TEXT_COLOR_BLACK},
  productName: {
    fontSize: 20,
    fontWeight: '500',
    color: PRIMARY_COLOR,
    overflow: 'scroll',
  },
  productDisc: {
    fontSize: 14,
    fontWeight: '400',
    color: TERTIARY_COLOR,
  },
  priceContainer: {
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.8,
    // backgroundColor: 'pink',
    paddingLeft: '10%',
  },
  retailPriceText: {
    fontSize: 16,
    fontWeight: '500',
    color: PRIMARY_COLOR,
  },
  invoicePriceText: {},
});

export default styles;
