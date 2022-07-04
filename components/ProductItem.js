import {Pressable, View, Text, Image, StyleSheet} from "react-native";

const ProductItem = ({imgUrl, name, description}) => {
    return(
        <Pressable style={s.container} onPress={() => {}}>
            <Image style={s.image} resizeMode='center' source={{uri: `${imgUrl}`}}/>
            <View style={s.textContainer}>
                <Text style={s.title}>{name}</Text>
                <Text style={s.subText}>{description}</Text>
            </View>
        </Pressable>
    );
};

export default ProductItem;

const s = StyleSheet.create({
    container: {
        height: 250,
        width: 370,
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 5,
        overflow: 'hidden',
        marginLeft: 5,
        padding: 15,
    },
    image: {
        width: '100%',
        height: '55%',
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 1,
    },
    subText: {
        marginTop: 8,
        fontSize: 14,
        color: 'grey',
        height: 50,
    },
    textContainer: {
        paddingVertical: 10,
        alignSelf: 'center',
    }
})