import {View, Text, StyleSheet, Image, Modal, Button} from "react-native";



const ItemModal = ({isOpen, modalClose, itemName}) => {
    return(
        <Modal transparent={true} visible={isOpen} animationType="slide">
            <View style={s.modalContainer}>
                <View style={s.contentContainer}>
                    <Text style={s.title}>{itemName[0]}</Text>
                    <Image source={{uri: `${itemName[2]}`}} style={s.image}/>
                    <Text style={s.time}>{itemName[1]}</Text>
                    <View style={s.button}>
                        <Button title="close" onPress={() => modalClose()} color={'#f55e51'}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ItemModal;

const s = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(132, 173, 143, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        height: 300,
        width: '80%',
        backgroundColor: 'white',
    },
    image: {
        height: 140,
        width: 280,
        borderRadius: 10,
        alignSelf: 'center',
    },
    title: {
        alignSelf: 'center',
        marginVertical: 15,
        fontSize: 18,
        letterSpacing: 1.2,
        fontWeight: '600',
    },
    time: {
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 14,
        letterSpacing: 0.5,
        fontWeight: '400',
    },
    button: {
        width: 140,
        alignSelf: 'center',
        marginTop: 10,
    }
})