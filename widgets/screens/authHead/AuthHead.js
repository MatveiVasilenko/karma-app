import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';

const AuthHead = ({
    login = true,
    navigation
}) => {
    const handlerFunc = () => {
        navigation.navigate(login ? "Register" : 'Login')
    }
    return (
        <View style={styles.head}>
            <Text style={styles.mainTitle}>{login ? 'Авторизация' : 'Регистрация'}</Text>
            <TouchableOpacity 
                onPress={handlerFunc}
            >
                <Text style={styles.subTitle}>{!login ? 'Авторизация' : 'Регистрация'}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    mainTitle: {
        fontFamily: LayoutsStyles.fontFamilyBold,
        color: '#fff',
        fontSize: 22,
        marginRight: 30
    },
    subTitle: {
        color: '#fff',
        fontSize: 14,
        fontFamily: LayoutsStyles.fontFamilyLight
    }
})
export default AuthHead;
