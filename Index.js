import { useState } from 'react';
import { StyleSheet, View,  FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import ItemModal from './components/ItemModal';
import Item from './components/Latest/Item';
import RecommendedItem from './components/Recommended/RecommendedItem';
import Search from './components/Search';
import Title from './components/Title';

const DATA = [
      {name: "London", time: "02 July - 05 July", imgUrl: "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg"},
      {name: "Tbilisi", time: "05 June - 15 June", imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/8a/ae/24/tbilisi.jpg?w=600&h=400&s=1"},
      {name: "Kiev", time: "02 Sep - 05 Sep", imgUrl: "https://thumbs.dreamstime.com/b/kiev-ukraine-vozdvyzhenka-barrio-historical-city-center-luxury-neighborhood-dramatical-sunset-147277716.jpg"}
    ];

const Recommended_Data = [
      {name: "Amsterdam", imgUrl: 'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg'},
      {name: "Mexico", imgUrl: 'https://www.fodors.com/wp-content/uploads/2021/05/UltimateMexicoCity__HERO_shutterstock_1058054480.jpg'},
];

export default function Index() {
  
  const [isOpen, setIsOpen] = useState(false); 
  const [itemName, setItemName] = useState([]);

  const modalIsOpen = (name, time, imgUrl) => {
    setIsOpen(true);
    setItemName([name, time, imgUrl]);
  };

  const modalIsClosed = () => {
    setIsOpen(false);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={s.container}>
          <Header/>
          <Search/>
          <View>
            <Title title="LATEST SEARCHES"/>
            <View style={s.itemContainer}>
              <FlatList 
                data={DATA}
                showsHorizontalScrollIndicator={false} 
                horizontal 
                renderItem={({item}) => (<Item openModal={modalIsOpen} name={item.name} time={item.time} imgUrl={item.imgUrl}/>)}
              />
            </View>
          </View>
          <Title title="TOP DESTINATIONS"/>
          <View style={s.recommendedContainer}>
              <FlatList 
                data={Recommended_Data} 
                showsHorizontalScrollIndicator={false} 
                horizontal 
                renderItem={({item}) => (<RecommendedItem name={item.name} imgUrl={item.imgUrl}/>)}
              />
          </View>
          {/* <BottomNavigation/> */}
          <ItemModal isOpen={isOpen} modalClose={modalIsClosed} itemName={itemName}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F0F0F0',
  },
  itemContainer: {
    height: 190,
    marginTop: 5,
    marginLeft: 15,
  },
  recommendedContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  }
})
