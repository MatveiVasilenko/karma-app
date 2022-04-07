import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native"
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';

const ButtonUIUniversal = ({
    title,
    navigation,
    screen = 'Home',
    options = {
        radius: {
            topstart: false,
            topend: false,
            botstart: false,
            botend: false,
            value: 20
        },
        fontSize: 14
    },
    type = 'primary',
    children,
    onPress = false
}) => {
    const clickHandler = () => {
        if (onPress) {
            onPress()
        } else {
            navigation.navigate(screen)
        }
    }
    return (
        <TouchableOpacity 
            onPress={clickHandler}
        >
            <View style={{
                        // ...styles.button,
                        overflow: 'hidden',
                        ...(options.radius.topstart ? {borderTopStartRadius: options.radius.value} : {}),
                        ...(options.radius.topend ? {borderTopEndRadius: options.radius.value} : {}),
                        ...(options.radius.botstart ? {borderBottomStartRadius: options.radius.value} : {}),
                        ...(options.radius.botend ? {borderBottomEndRadius: options.radius.value} : {}),
                    }}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#008735', '#EEFFF5', '#008735']}
                    style={{
                        ...styles.button,
                    //     ...(options.radius.topstart ? {borderTopStartRadius: options.radius.value} : {}),
                    //     ...(options.radius.topend ? {borderTopEndRadius: options.radius.value} : {}),
                    //     ...(options.radius.botstart ? {borderBottomStartRadius: options.radius.value} : {}),
                    //     ...(options.radius.botend ? {borderBottomEndRadius: options.radius.value} : {}),
                    }}
                    start={{
                        x: 1, 
                        y: 1
                    }}
                    >
                        <View style={{
                                    overflow: 'hidden',
                                    ...(options.radius.topstart ? {borderTopStartRadius: options.radius.value - 1} : {}),
                                    ...(options.radius.topend ? {borderTopEndRadius: options.radius.value - 1} : {}),
                                    ...(options.radius.botstart ? {borderBottomStartRadius: options.radius.value - 1} : {}),
                                    ...(options.radius.botend ? {borderBottomEndRadius: options.radius.value - 1} : {}),
                                }}>
                            <LinearGradient
                                style={{
                                    ...styles.buttonInner,
                                    // ...(options.radius.topstart ? {borderTopStartRadius: options.radius.value - 1} : {}),
                                    // ...(options.radius.topend ? {borderTopEndRadius: options.radius.value - 1} : {}),
                                    // ...(options.radius.botstart ? {borderBottomStartRadius: options.radius.value - 1} : {}),
                                    // ...(options.radius.botend ? {borderBottomEndRadius: options.radius.value - 1} : {}),
                                }}
                                start={{
                                    x: 1, 
                                    y: 1
                                }}
                                colors={type === 'primary' ? ['#113F23', '#0C7835'] : type === 'dark' ? ['#102418', '#102418'] : ['#0D4724', '#0D4724']}
                            >
                                {children ? children : <Text style={{
                                    ...styles.text,
                                    ...{
                                        fontSize: options.fontSize
                                    }
                                }}>{title}</Text>}
                                
                            </LinearGradient>
                        </View>
                        
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        overflow: 'hidden',
        paddingVertical: 1,
        paddingHorizontal: 0.5,
        // height: '100%'
    },
    buttonInner: {
        overflow: 'hidden',
        backgroundColor: "red",
        // height: '100%'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 12,
        fontFamily: LayoutsStyles.fontFamilyMedium,
        // borderBottomEndRadius: 30,
        // borderBottomStartRadius: 30,
        // borderTopEndRadius: 34,
    }
})
export default ButtonUIUniversal