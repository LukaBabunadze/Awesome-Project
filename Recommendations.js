import { View, Text, FlatList, Button, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import PostMethod from "./components/PostMethod";


const userProducts = async() => {
    const products = await fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(result=>result);
    return products;
};


export const Recommendations = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        userProducts().then(res => setProducts(res));
    }, []);
    
    return(
        <View style={s.container}>
            <FlatList 
                data={products} 
                renderItem={({item}) => (<ProductItem key={item.id} name={item.title} description={item.description} imgUrl={item.image}/>)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={s.flatlistStyle}
            />
            {/* <PostMethod/>*/}
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    flatlistStyle: {
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
    }
})