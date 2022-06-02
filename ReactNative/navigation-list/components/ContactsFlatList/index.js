import { useCallback } from "react";
import { ScrollView, Text, View, FlatList } from "react-native"
import Contact from "../Contact";

export default ({ contacts }) => {

    const renderContact = useCallback(({item}) => <Contact contact={item} />)

    return (
        <FlatList
            renderItem={renderContact}
            data={contacts}
        />

    )
}