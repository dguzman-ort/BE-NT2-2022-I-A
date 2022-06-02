import { Text } from "react-native"
import { Card } from '@rneui/themed';

export default ({ contact }) => {
    console.log(contact)
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>Contact #{contact.id}</Card.Title>
            <Card.Divider />
            <Text h1>
                Nombre: {contact.nombreCompleto}
            </Text>
            <Text h2>
                Telefono: {contact.telefono}
            </Text>
            <Text h3>
                Edad: {contact.edad}
            </Text>
        </Card>
    )
}