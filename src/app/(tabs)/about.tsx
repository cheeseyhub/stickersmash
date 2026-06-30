import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About</Text>
            <Link href={"/"} style={{ textDecorationLine: "underline", color: "white" }} > Go to the home page</Link>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});
export default About