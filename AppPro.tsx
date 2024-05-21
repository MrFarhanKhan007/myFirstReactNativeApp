import React from "react";
import { } from "react-native"

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppPro(): React.JSX.Element {
    const isDarMode = useColorScheme() === 'dark'

    return (
        <View style={styles.container}>
            <Text style={
                isDarMode ? styles.whiteText : styles.darkText}>
                Hello World !
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center", //aligns horizontally
            justifyContent: "center" //aligns vertically
        },
        whiteText: {
            color: '#FFFFFF'
        },
        darkText: {
            color: '#000000',
            fontSize: 30,
            fontWeight: "condensedBold"
        },
    }
)
export default AppPro
