import { Text, View, StyleSheet, Button } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useContext, useEffect } from "react";
import authenticationContext from "../../services/authenticationContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Login = () => {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '184106474332-pg0d71hku4l24pbqd0kds06vickj49vo.apps.googleusercontent.com'
    });

    const { setAuthenticationData } = useContext(authenticationContext)

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            console.log(authentication)


            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
            .then(res => res.json())
            .then(data => setAuthenticationData(data))

        }
    }, [response]);


    return (
        <View style={styles.container}>
            <Button title="LOGIN CON GOOGLE" onPress={() => {
                //TODO: Redireccionar al home
                promptAsync()
            }} />


        </View>
    )
}

export default Login