import { Text, Button, View, StyleSheet } from 'react-native';
import Auth from '../../layouts/auth/Auth';
import ButtonUI from './../../widgets/ui/Button/ButtonUI';
import { LayoutsStyles } from './../../styles/layouts/layouts-styles';
import { useSelector } from 'react-redux';
import EnterHelpButtons from '../../widgets/screens/authHead/EnterHelpButtons';

const HomeScreen = ({
    navigation
}) => {
    const night = useSelector(state => state.night)
    console.log(night)
    return (
        <Auth>
            <View style={styles.buttonBlock}>
                <View style={styles.buttonBlockHead}>
                    <Text style={styles.buttonBlockHeadText}>Добро пожаловать!</Text>
                </View>
                <View style={styles.buttonBlockItem}>
                    <ButtonUI 
                        navigation={navigation}
                        title="Вход"
                        screen="Login"
                        options={{}}
                        type="primary"
                    />
                </View>
                <View>
                    <ButtonUI 
                        navigation={navigation}
                        title="Регистрация"
                        screen="Register"
                        options={{}}
                        type="secondary"
                    />
                </View>
                <EnterHelpButtons />
            </View>
        </Auth>
    )
}
const styles = StyleSheet.create({
    buttonBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    buttonBlockItem: {
        marginBottom: 20
    },
    buttonBlockHead: {
        paddingBottom: 20,
    },
    buttonBlockHeadText: {
        color: 'white',
        fontSize: 18,
        fontFamily: LayoutsStyles.fontFamily
    }
})
export default HomeScreen