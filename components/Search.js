import {View, TextInput, StyleSheet} from "react-native";
import { EvilIcons } from '@expo/vector-icons';



const Search = () => {
    return(
        <View style={s.container}>
            <EvilIcons name="search" size={26} color="grey" style={s.icon} />
            <TextInput placeholder="search for a resort or hotel..."/>
        </View>
    );
};

export default Search;

const s = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },    only for IOS System
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        elevation: 12,
    },
    icon: {
        marginHorizontal: 5,
    },
})