import { View, Text, StyleSheet, Image, Button } from "react-native";


export const Details = ({navigation, route}) => {
    return(
        <View style={s.container}>
            <Text style={s.title}>{route.params.title}</Text>
            <Image style={s.image} source={{uri: route.params.imgUrl}}/>
            <Text style={s.desc}>{route.params.description}</Text>
            <View style={s.button}>
                <Button title="Go Back" color={'red'} onPress={() => navigation.navigate("Index")}/>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20,
    },
    title: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 1.2,
        marginVertical: 10,
    },
    image: {
        height: 270,
        width: '100%',
        borderRadius: 40,
        marginBottom: 10,
    },
    desc: {
        alignSelf: 'center',
        textAlign: 'justify',
        marginHorizontal: 10,
        lineHeight: 24,
        fontSize: 15,
        letterSpacing: 0.3
    },
    button: {
        width: 200,
        alignSelf: 'center',
        borderRadius: 30,
        margin: 20,
    }
})