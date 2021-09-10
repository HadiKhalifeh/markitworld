import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import useApi from './src/api/useApi'
import products from './src/api/getProducts'


export default function App() {
  const api=useApi(products.products)
  const [data,setData]=useState([]);
  const getProducts=async()=>{
  const result= await api.request('2378','1','446a6828200604377695aa034cf57e36');
  
  setData(result.data.products)
  
  console.log(data[0].images,'result');

  
  }
  
  useEffect(()=>{getProducts()},[])

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
    style={{width:400}}
      renderItem={({item}) => (
    <View style={{flex:1,flexDirection:'row'}}>
       <Text style={{fontSize:20,paddingRight:20}}>{item.title.substring(0,8)}</Text>
       <Text style={{fontSize:20,paddingRight:20}}>{item.price}</Text>
       <Image style={{width:20,height:20}} source={{uri:item.images[0].large}}/>

       </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:400,
    backgroundColor: '#fff',
    paddingLeft:20,
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
