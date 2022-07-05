import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

import FAB from '../Components/FAB';
import ListItem from '../Components/ListItem';
import {
  globalStyles,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  TEXT_COLOR_WHITE,
} from '../Constants/colors';
import {getData, storeData} from '../utils/Storage';
import styles from './styles';

const Data = [
  {
    id: 1,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 2,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 3,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 4,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 5,
    product_name: 'Head & Shoulder 100ml ORIGINAL ORIGINAL ORIGINAL',
    prodduct_disc: 'ORIGINAL ORIGINAL ORIGINAL ORIGINAL ORIGINAL ORIGINAL ',
    invoice_price: 1100,
    retail_price: 120,
  },
  {
    id: 6,
    product_name: 'Head & Shoulder 100ml qw e r r ',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 7,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 8,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 9,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 10,
    product_name: 'Head & Shoulder 100ml ORIGINAL ORIGINAL ORIGINAL',
    prodduct_disc: 'ORIGINAL ORIGINAL ORIGINAL ORIGINAL ORIGINAL ORIGINAL ',
    invoice_price: 1100,
    retail_price: 120,
  },
  {
    id: 11,
    product_name: 'Head & Shoulder 100ml qw e r r ',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
  {
    id: 12,
    product_name: 'Head & Shoulder 100ml',
    prodduct_disc: 'ORIGINAL',
    invoice_price: 110,
    retail_price: 120,
  },
];

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDisc, setProductDisc] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [invoice, setInvoice] = useState('');
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleGetProduct = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      const prods =
        jsonValue != null
          ? JSON.parse(jsonValue)
          : AsyncStorage.setItem('@storage_Key', JSON.stringify([]));
      setProducts(prods);
      // console.log('PRODUCTSSSSSS', JSON.stringify(products, null, 2));
    } catch (e) {
      console.log('ERROR READING VALUE FROM ASYNC STORAGE : ', e);
    }
  };

  const filterList = list =>
    list?.filter(item =>
      item?.product_name?.toLowerCase().includes(searchText.toLowerCase()),
    );

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleAddProduct = async () => {
    if (
      productName?.trim()?.length > 0 &&
      retailPrice?.trim()?.length > 0 &&
      invoice?.trim()?.length > 0
    ) {
      const date = new Date();
      const ItemToPush = {
        id: date.toISOString(),
        product_name: productName,
        prodduct_disc: productDisc,
        invoice_price: invoice,
        retail_price: retailPrice,
      };
      try {
        const prod = products;
        prod.push(ItemToPush);
        setProducts(prod);
        const jsonValueToStore = JSON.stringify(prod);
        await AsyncStorage.setItem('@storage_Key', jsonValueToStore);
        // alert('Product Added');
      } catch (e) {
        console.log('ERROR WHILE STORING DATA TO ASYNC STORAGE', e);
      }
      // console.log('PRODUCTS~~~~~~~~~~~', products);
      setProductName('');
      setProductDisc('');
      setInvoice('');
      setRetailPrice('');
      setAddProduct(false);
    } else {
      alert('Please add Product Name, Retail Price, Invoice Price');
    }
  };

  const handleDeleteProduct = async val => {
    try {
      const prod = products?.filter(item => item?.id !== val)?.reverse();
      setProducts(prod);
      const jsonValueToStore = JSON.stringify(prod);
      await AsyncStorage.setItem('@storage_Key', jsonValueToStore);
      const newProd = await AsyncStorage.getItem('@storage_Key');
      setProducts(JSON.parse(newProd));
      // console.log(JSON.stringify(newProd, null, 2));
    } catch (e) {
      console.log('ERROR WHILE STORING DATA TO ASYNC STORAGE', e);
    }
    // console.log('PRODUCTS~~~~~~~~~~~', products);
  };

  return (
    <>
      <View style={styles.appBar}>
        {search ? null : (
          <Text
            style={{
              position: 'absolute',
              fontSize: 16,
              color: TEXT_COLOR_WHITE,
              left: '2%',
              bottom: '8%',
            }}>
            {products?.length}
          </Text>
        )}
        {search ? (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              marginHorizontal: 16,
              marginVertical: 8,
            }}>
            <FAB
              onPress={() => setSearch(false)}
              icon={'close'}
              iconColor={TERTIARY_COLOR}
              size={32}
              containerStyle={{
                position: 'relative',
                backgroundColor: SECONDARY_COLOR,
                bottom: null,
                right: null,
              }}
            />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              style={{
                width: '90%',
                height: 32,
                backgroundColor: SECONDARY_COLOR,
                marginHorizontal: 8,
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
            />
          </View>
        ) : (
          <Text style={[globalStyles.heading2, styles.appBarTitle]}>DKS</Text>
        )}
        {search ? null : (
          <Icon
            name="search"
            size={24}
            onPress={() => setSearch(true)}
            color={TEXT_COLOR_WHITE}
            style={{position: 'absolute', bottom: '8%', right: '4%'}}
          />
        )}
      </View>
      <FlatList
        keyExtractor={item => item?.id}
        data={filterList(products)}
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        renderItem={({item, index}) => {
          return (
            <ListItem
              id={item?.id}
              title={item?.product_name}
              subTitle={item?.prodduct_disc}
              rp={item?.retail_price}
              inv_p={item?.invoice_price}
              onLongPress={val => handleDeleteProduct(val)}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                marginBottom: products?.length - 1 === index ? 140 : 4,
              }}
            />
          );
        }}
      />
      <FAB onPress={() => setAddProduct(true)} icon={'add'} />
      <Modal visible={addProduct} style={styles.modalOuterView}>
        <View style={styles.modalInnerView}>
          <View>
            <Text style={styles.label}>Product Name:</Text>
            <TextInput
              value={productName}
              onChangeText={setProductName}
              style={styles.inputStyle}
            />
            <Text style={styles.label}>Product Disc:</Text>
            <TextInput
              value={productDisc}
              onChangeText={setProductDisc}
              style={styles.inputStyle}
            />
            <Text style={styles.label}>Retail Price:</Text>
            <TextInput
              value={retailPrice}
              onChangeText={setRetailPrice}
              style={styles.inputStyle}
            />
            <Text style={styles.label}>Invoice Price:</Text>
            <TextInput
              value={invoice}
              onChangeText={setInvoice}
              style={styles.inputStyle}
            />
            <TouchableOpacity onPress={handleAddProduct} style={styles.button}>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
          </View>
          <FAB
            onPress={() => setAddProduct(false)}
            icon={'close'}
            size={38}
            containerStyle={{top: '8%', right: '8%'}}
          />
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;
