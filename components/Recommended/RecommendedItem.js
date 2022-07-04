import {View, Pressable, Text, Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

const descText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "

const RecommendedItem = ({imgUrl, name}) => {

    const navigation = useNavigation();

    return(
        <Pressable style={s.container} onPress={() => navigation.navigate("Details", {title: name, description: descText, imgUrl: imgUrl})}>
            <Image style={s.imageStyle} source={{uri: `${imgUrl}`}}/>
            <Text style={s.name}>{name}</Text>
            <Text>...</Text>
        </Pressable>
    );
};

export default RecommendedItem;

const s = StyleSheet.create({
    container: {
        marginRight: 15,
        width: 176,
        height: 230,
        marginLeft: 5,
    },
    imageStyle: {
        height: '84%',
        borderRadius: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1,
        alignSelf: 'center',
        marginTop: 5,
    }
})