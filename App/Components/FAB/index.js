import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PRIMARY_COLOR, TEXT_COLOR_WHITE} from '../../Constants/colors';
const FAB = ({
  icon,
  containerStyle,
  onPress,
  size = 56,
  iconColor = TEXT_COLOR_WHITE,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        backgroundColor: PRIMARY_COLOR,
        height: size,
        width: size,
        borderRadius: size / 2,
        bottom: '4%',
        right: '4%',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}>
      <Icon name={icon} color={iconColor} size={size / 2} />
    </TouchableOpacity>
  );
};

export default FAB;
