import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log('ERROR WHILE STORING DATA TO ASYNC STORAGE', e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null
      ? JSON.parse(jsonValue)
      : AsyncStorage.setItem('@storage_Key', JSON.stringify([]));
  } catch (e) {
    console.log('ERROR READING VALUE FROM ASYNC STORAGE : ', e);
  }
};
