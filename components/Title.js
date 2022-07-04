import {View, Text, StyleSheet} from "react-native";



const Title = ({title}) => {
    return(
        <Text style={s.text}>{title}</Text>
    );
};

export default Title;

const s = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 1,
        marginLeft: 20,
        marginTop: 10,
    }
})