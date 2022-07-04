import {View, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = () => {

    const navigation = useNavigation();
    return(
        <>
            <StatusBar style="light" backgroundColor="#4FA192"/>
            <View style={s.container}>
                <Entypo name="menu" size={24} color="white" />
                <Text style={s.textStyle}>Search</Text>
                <Feather name="map" size={20} color="white" onPress={() => navigation.navigate("MyImagePicker")}/>
            </View>
        </>
    );
};

export default Header;

const s = StyleSheet.create({
    container: {
        backgroundColor: '#4FA192',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingBottom: 18,
        paddingTop: 8,
    },
    textStyle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    }
})

