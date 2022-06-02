import { Text, View, StyleSheet, Button } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default () => {
    return (        
        <View style={styles.container}>
            <Button title="LOGIN CON GOOGLE" onPress={() => {
                //TODO: Redireccionar al home
            }} />
            

        </View>
    )
}

