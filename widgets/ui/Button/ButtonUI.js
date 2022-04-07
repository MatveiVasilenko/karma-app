import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';

const ButtonUI = ({
    title,
    navigation,
    screen = 'Home',
    options = {},
    type = 'primary'
}) => {
    console.log(screen)
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate(screen)}
        >
            <View >
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#008735', '#EEFFF5', '#008735']}
                    style={styles.button}
                    start={{
                        x: 1, 
                        y: 1
                    }}
                    >
                        <LinearGradient
                            style={styles.buttonInner}
                            colors={type === 'primary' ? ['rgba(0, 133, 53, 1)', 'rgba(0, 137, 54, 1)'] : ['#003917', '#004119']}
                    >
                        <Text style={styles.text}>{title}</Text>
                    </LinearGradient>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    primary: {
        fontFamily: LayoutsStyles.fontFamilySemiBold,
        // fontSize: 23,
    },
    button: {
        width: 300,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        borderTopEndRadius: 40,
        overflow: 'hidden',
        paddingVertical: 1,
        paddingHorizontal: 1,
    },
    buttonInner: {
        width: 298,
        borderBottomEndRadius: 38,
        borderBottomStartRadius: 38,
        borderTopEndRadius: 38,
        overflow: 'hidden'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 20,
        fontSize: 18,
        fontFamily: LayoutsStyles.fontFamilySemiBold,
        // borderBottomEndRadius: 30,
        // borderBottomStartRadius: 30,
        // borderTopEndRadius: 34,
    }
})
export default ButtonUI