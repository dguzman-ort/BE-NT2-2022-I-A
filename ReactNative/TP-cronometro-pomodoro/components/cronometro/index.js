import { Text, View } from "react-native";
import { useContext } from "react";
import styles from "./styles";
import GlobalContext from "../global/context";

const Cronometro = ({fatherStyle}) => {

    const { timeRemaining } = useContext(GlobalContext)

    const mins = Math.floor(timeRemaining / 60)
    const secs = timeRemaining % 60

    const paddZero = num => num < 10 ? '0' + num: num

    return (
            <Text style={[styles.text, fatherStyle.center]}>{paddZero(mins)}:{paddZero(secs)}</Text>
        
    )
}

export default Cronometro