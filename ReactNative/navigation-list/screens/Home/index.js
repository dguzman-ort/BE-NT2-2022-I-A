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
        contactService.getContacts().then(data => {
            setContacts(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            {/* <Text>HOME.</Text>

            <Button title="Ir a detalle" onPress={() => {
                // navigation.navigate("Detalles", { nombre })
                navigation.navigate("Detalles")
            }} /> */}
            <View>
                <ContactsScrollView contacts={contacts} navigation={navigation} />         
                {/* <ContactsFlatList contacts={contacts} /> */}
            </View>

        </View>
    )
}
export default Home
