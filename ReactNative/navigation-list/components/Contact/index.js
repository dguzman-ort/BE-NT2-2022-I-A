import { Text } from "react-native"
import { Card } from '@rneui/themed';

export default ({ contact }) => {
    // console.log(contact)
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>Contact #{contact.id}</Card.Title>
            <Card.Divider />
            <Text h1>
                NOMBRE: {contact.name}
            </Text>            
            <Text h2>
                TELEFONO: {contact.phone}
            </Text>
            <Text h3>
                Email: {contact.email}
            </Text>
        </Card>
    )
}