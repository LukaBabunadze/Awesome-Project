import {Pressable, View, Text, Image, StyleSheet} from "react-native";

const Item = ({imgUrl, name, time, openModal}) => {
    return(
        <Pressable style={s.container} onPress={() => openModal(name, time, imgUrl)}>
            <Image style={s.image} source={{uri: `${imgUrl}`}}/>
            <View style={s.textContainer}>
                <Text style={s.title}>{name}</Text>
                <Text style={s.subText}>{time}</Text>
            </View>
        </Pressable>
    );
};

export default Item;

const s = StyleSheet.create({
    container: {
        height: 150,
        width: 130,
        marginRight: 15,
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 5,
        overflow: 'hidden',
        marginLeft: 5,
    },
    image: {
        width: '100%',
        height: '55%',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 1,
    },
    subText: {
        fontSize: 14,
        color: 'grey'
    },
    textContainer: {
        paddingVertical: 10,
        alignSelf: 'center',
    }
})