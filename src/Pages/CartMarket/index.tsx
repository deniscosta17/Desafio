import React from 'react';
import { View, Image, Text, Alert } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons'; 
import { styles } from './style';         
import  Logo  from '../../assets/logo.png';
import  AppleImg from '../../assets/apple.png';
import  BananaImg from '../../assets/banana.png';
import  WatermelonImg from '../../assets/watermelon.png';
import  PearImg from '../../assets/mango.png';
import  StrawberryImg from '../../assets/strawberry.png';
import  CitrusImg from '../../assets/citrus.png';

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

export function CartMarket() {

  const macaParameter = 'Maçã';
  const bananaParameter = 'Banana';
  const melanciaParameter = 'Melancia';
  const mangaParameter = 'Manga';
  const morangoParameter = 'Morango';
  const laranjaParameter = 'Laranja';

  const clickMe = (parameter: string) => (event: any) => {
    Alert.alert('Você adicinou uma ' + parameter);
  }

  return (
    <>
      <View style={ styles.container }> 
        <View style={ styles.headerContainer } >
          <Text style={ styles.textHeader }>FULANO </Text>
          <EvilIcons name="cart" size={40} color="black" styles={ styles.cartIcon } />
        </View>
        <View style={ styles.imageContainer }>
          <Image style={ styles.imageLogo } source={ Logo } />
        </View>
        <View style={ styles.hrContainer }></View>
      </View>
      <View style={ styles.listContainer}>
          <Image style={ styles.imgeFruits } source={ AppleImg } />
          <View style={ styles.textFruitContainer }>
            <Text style={ styles.textFruitInfo } >Maçã - 1,99kg</Text>
          </View>
          <Entypo name="squared-plus" size={40} color="black" 
                  style={ styles.Add } onPress={clickMe(macaParameter)} />
          <Image style={ styles.imgeFruits } source={ BananaImg } />
          <View style={ styles.textFruitContainer }>
            <Text style={ styles.textFruitInfo } >Banana - 3,99kg</Text>
          </View>
          <Entypo name="squared-plus" size={40} color="black" 
          style={ styles.Add } onPress={clickMe(bananaParameter)} />
          <Image style={ styles.imgeFruits } source={ WatermelonImg } />
          <View style={ styles.textFruitContainer }>
            <Text style={ styles.textFruitInfo } >Melancia - 6,99kg</Text>
          </View>
          <Entypo name="squared-plus" size={40} color="black" 
          style={ styles.Add } onPress={clickMe(melanciaParameter)} />
          <Image style={ styles.imgeFruits } source={ PearImg } />
          <View style={ styles.textFruitContainer }>
            <Text style={ styles.textFruitInfo } >Manga - 2,99kg</Text>
          </View>
          <Entypo name="squared-plus" size={40} color="black" 
          style={ styles.Add } onPress={clickMe(mangaParameter)} />
          <Image style={ styles.imgeFruits } source={ StrawberryImg } />
          <View style={ styles.textFruitContainer }>
            <Text style={ styles.textFruitInfo } >Morango - 2,99kg</Text>
          </View>
          <Entypo name="squared-plus" size={40} color="black" 
          style={ styles.Add } onPress={clickMe(morangoParameter)} />
          <Image style={ styles.imgeFruits } source={ CitrusImg } />
          <View style={ styles.textFruitContainer }>
            <Text style={ styles.textFruitInfo } >Laranja - 4,99kg</Text>
          </View>
          <Entypo name="squared-plus" size={40} color="black" 
          style={ styles.Add } onPress={clickMe(laranjaParameter)} />

        </View>
    </>
  )
}


