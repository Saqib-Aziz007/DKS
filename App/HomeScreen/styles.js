import {StyleSheet} from 'react-native';

import {
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  TEXT_COLOR_BLACK,
  TEXT_COLOR_WHITE,
} from '../Constants/colors';

const styles = StyleSheet.create({
  appBar: {
    height: '8%',
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  appBarTitle: {
    marginBottom: 4,
  },
  flatListStyle: {
    padding: 8,
    backgroundColor: TEXT_COLOR_WHITE,
  },
  inputStyle: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: PRIMARY_COLOR,
    color: TEXT_COLOR_BLACK,
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  button: {
    height: 56,
    width: '100%',
    backgroundColor: TERTIARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 32,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    // width: '100%',
    color: TEXT_COLOR_WHITE,
    alignSelf: 'center',
    position: 'absolute',
  },
  modalOuterView: {flex: 1},
  modalInnerView: {
    backgroundColor: TEXT_COLOR_WHITE,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {color: TEXT_COLOR_BLACK},
});

export default styles;
