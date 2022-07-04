import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import {Image, Button, Text, View, StyleSheet} from "react-native"

const MyImagePicker = ({navigation}) => {

    const [photoLocation, setPhotoLocation] = useState();

    const pickImage = async() => {
        const image = await launchCameraAsync({
            quality: 0.5,
            allowsEditing: true,
            aspect: [16, 9],
        });

        setPhotoLocation(image.uri);
    }

    return(
        <View style={s.container}>
            <Text style={s.title} onPress={() => navigation.goBack()}>
                You Can Pick Your Favorite Image
            </Text>
            <View style={s.imageWrapper}>
                <Image source={{uri: photoLocation}} height={200} width={'90%'}/>
            </View>
            <View style={s.button}>
                <Button title="Pick Image" onPress={pickImage}/>
            </View>
        </View>
    );
}

export default MyImagePicker;

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
    button: {
        width: 140,
        alignSelf: 'center',
        marginTop: 10,
    },
    imageWrapper: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})