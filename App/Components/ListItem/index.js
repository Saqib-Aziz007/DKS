import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../Constants/colors';
import styles from './styles';

const ListItem = ({
  id,
  title,
  subTitle,
  rp,
  inv_p,
  containerStyle,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      key={id}
      onLongPress={() => onLongPress(id)}
      style={[styles.mainContainer, containerStyle]}>
      <View style={styles.productNameContainer}>
        <Text numberOfLines={1} style={styles.productName}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.productDisc}>
          {subTitle}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTextStyle}>
          Retail: <Text style={styles.retailPriceText}>{rp}</Text>
        </Text>
        <Text style={styles.priceTextStyle}>
          Invoice: <Text style={styles.productDisc}>{inv_p}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
