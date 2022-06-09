import { useEffect, useState } from "react"
import { TextInput, View } from "react-native"


export default ({contact}) => {
    // console.log(contact)
    const [formContact, setFormContact] = useState({})

    useEffect(() => {
        setFormContact(contact)
    }, [])

    return (
        <View>
            <TextInput value={formContact.name} onChangeText={text => setFormContact({...formContact, name : text})} placeholder={'Nombre'} />
            <TextInput value={formContact.phone} onChangeText={text => setFormContact({...formContact, phone : text})} placeholder={'Telefono'} />
            <TextInput value={formContact.email} onChangeText={text => setFormContact({...formContact, email : text})} placeholder={'Email'} />
        </View>
    )
}