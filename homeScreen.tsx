import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface componentNameProps { }

const HomeScreen = (props: componentNameProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>CRAZY COLORS!!!!!</Text>
            <Text style={styles.bodyStyle}>Enjoy your stay!</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, textStyle: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "600"
    }, bodyStyle: {
        color: "blue",
        fontWeight: "200"
    }
});
