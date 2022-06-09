import styles from "./styles";
import { Text, View, Button, Image } from 'react-native';
import contactService from "../../services/contacts";
import { useEffect, useState, useContext } from "react";
import Contact from "../../components/Contact";
import { Avatar } from "@rneui/themed";

import authenticationContext, { authData } from "../../services/authenticationContext";

const Profile = () => {


    const { authenticationData, setAuthenticationData } = useContext(authenticationContext)

    const logout = () => {
        console.log(authData)
        setAuthenticationData(authData)
    }
    return (
        <View style={styles.container}>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 30,
                }}
            >

                <Avatar
                    size={100}
                    rounded
                    source={authenticationData.picture ? { uri: authenticationData.picture } : {}}
                />

            </View>
            <Contact contact={authenticationData} />

            <Button
                title="Logout"
                onPress={logout}

            />
        </View>
    )
}
export default Profile
