import styles from "./styles";
import { Text, View, Button } from 'react-native';
import contactService from "../../services/contacts";
import { useEffect, useState } from "react";
import Contact from "../../components/Contact";

const Details = ({navigation, route}) => {

    const { params } = route

    const [contact, setContact] = useState({})

    useEffect(()=> {
        contactService.getContactDetails(params.id).then(data => setContact(data))
    }, [])

    const deleteContact = () => contactService.deleteContact(contact.id).finally(() => navigation.goBack())

    return (
        <View style={styles.container}>
            <Contact contact={contact} />
            <Button 
                title="Delete" 
                onPress={deleteContact}

            />
        </View>
    )
}
 export default Details
