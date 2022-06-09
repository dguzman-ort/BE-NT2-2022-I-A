import { useCallback } from "react";
import { ScrollView, Text, View, FlatList, TouchableOpacity } from "react-native"
import Contact from "../Contact";

export default ({ contacts, navigation }) => {

    const renderContact = useCallback(({ item }) =>
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("Detalles", { id: item.id })}
            onLongPress={() => console.log("Aqui hago un LongPress")}
        >
            <Contact contact={item} />
        </TouchableOpacity>)

    return (
        <FlatList
            renderItem={renderContact}
            data={contacts}
        />

    )
}