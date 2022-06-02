import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import {  Card, Icon } from '@rneui/themed';
import Contact from "../Contact";

export default ({ contacts, navigation }) => {
    return (
        <ScrollView>
            {contacts.map(contact => 
                <TouchableOpacity 
                    key={contact.id}
                    onPress={()=> navigation.navigate("Detalles", {id: contact.id})}
                    onLongPress={() => console.log("Aqui hago un LongPress")}
                >
                    <Contact contact={contact} />
                </TouchableOpacity>
            )}
        </ScrollView>
    )
}