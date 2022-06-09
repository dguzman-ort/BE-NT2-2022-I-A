import styles from "./styles";
import { Text, View, Button, Image } from 'react-native';
import contactService from "../../services/contacts";
import { useEffect, useState } from "react";
import Contact from "../../components/Contact";
import FormContact from "../../components/formContact";
import { Input, Icon, Skeleton } from "@rneui/themed";

const Details = ({ navigation, route }) => {

    const { params } = route

    const [contact, setContact] = useState({})

    useEffect(() => {
        contactService.getContactDetails(params.id).then(res => res.json())
            .then(data => setContact(data))
        // return () => {
        //     // desconectar el socket client
        // }
    }, [])

    const deleteContact = () => contactService.deleteContact(contact.id).finally(() => navigation.goBack())
    const updateContact = () => contactService.deleteContact(contact.id).finally(() => navigation.goBack())

    return (
        <View style={styles.container}>
            {/* <Contact contact={contact} /> */}
            {
                contact.id !== undefined ?
                <FormContact contact={contact} />
                :
                <Skeleton circle={true} style={{height: 50}} />
                // <Text> Cargando...</Text>
            }
            
            {/* <Image
                style={styles.image}
                source={{
                    uri: 'https://media-cdn.tripadvisor.com/media/photo-l/0e/65/c0/cf/ma-der-la-by-phuthai.jpg',
                }}
            /> */}
            <Button
                title="Delete"
                onPress={deleteContact}

            />
        </View>
    )
}
export default Details
