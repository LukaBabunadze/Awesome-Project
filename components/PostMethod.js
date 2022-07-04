import {View, TextInput, Button, StyleSheet} from "react-native";
import {Formik} from "formik";

const PostMethod = () => {
    return(
        <Formik
            initialValues={{title: '', price: '', description: '', image: '', category: ''}}
            onSubmit={(values) => fetch('https://fakestoreapi.com/products',{
                method:"POST",
                body:JSON.stringify(
                    {
                        title: values.title,
                        price: values.price,
                        description: values.description,
                        image: values.image,
                        category: values.category
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))}
        >
            {({handleChange, handleSubmit, values}) => 
            (
                <View>
                    <TextInput onChangeText={handleChange('title')} value={values.title} placeholder="title" style={s.input}/>
                    <TextInput onChangeText={handleChange('price')} value={values.price} placeholder="price" style={s.input}/>
                    <TextInput onChangeText={handleChange('description')} value={values.description} placeholder="description" style={s.input}/>
                    <TextInput onChangeText={handleChange('image')} value={values.image} placeholder="image" style={s.input}/>
                    <TextInput onChangeText={handleChange('category')} value={values.category} placeholder="category" style={s.input}/>
                    <Button title="submit!" onPress={handleSubmit}/>
                </View>
            )}
        </Formik>
    );
}

export default PostMethod;

const s = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
      }
})