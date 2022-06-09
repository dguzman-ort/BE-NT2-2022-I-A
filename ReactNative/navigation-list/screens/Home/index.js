import styles from "./styles";
import { Text, View, Button } from 'react-native';
import { useState, useEffect } from "react";
import contactService from "../../services/contacts";


import ContactsScrollView from "../../components/ContactsScrollView";
import ContactsFlatList from "../../components/ContactsFlatList";


const Home = ({ navigation }) => {
    // console.log(navigation)




    const [contacts, setContacts] = useState([])

    useEffect(() => {
        console.log("Esto se ejecuta la 1era vez que inicia mi componente: ")
        contactService.getContacts().then(res => res.json())
        .then(data => {
            console.log("Recibe data", data)
            setContacts(data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <View style={styles.container}>
            

            <Button title="Ir a Profile" onPress={() => {
                // navigation.navigate("Detalles", { nombre })
                navigation.navigate("Profile")
            }} /> 
            <View>
                {/* <ContactsScrollView contacts={contacts} navigation={navigation} />          */}
                <ContactsFlatList contacts={contacts} navigation={navigation} />
            </View>

        </View>
    )
}
export default Home
