import {View, Text, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const BottomNavigation = () => {
    return(
        <View style={s.container}>
            <View style={s.iconsWrapper}>
                <Feather name="search" size={24} color="#5c5c5c" />
                <Text style={s.text}>Search</Text>
            </View>
            <View style={s.iconsWrapper}>
                <Ionicons name="heart-outline" size={26} color="#5c5c5c" />
                <Text style={s.text}>Favorites</Text>
            </View>
            <View style={s.iconsWrapper}>
                <FontAwesome name="user-o" size={24} color="#5c5c5c" />
                <Text style={s.text}>Profile</Text>
            </View>
            <View style={s.iconsWrapper}>
                <Feather name="settings" size={23} color="#5c5c5c" />
                <Text style={s.text}>Settings</Text>
            </View>
        </View>
    );
};

export default BottomNavigation;

const s = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '88%',
        height: 50,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 12,
        elevation: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: 'gray',
    }
})