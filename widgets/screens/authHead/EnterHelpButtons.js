import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';
import svgSprite from './../../../project/svg/svgSprite';

const EnterHelpButtons = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.buttonBlock}>Войти с помощью</Text>
            <View style={styles.enterButton}>
                <TouchableOpacity>
                    <View style={styles.enterButtonItem}>
                        {svgSprite('Google')}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.enterButtonItem}>
                        {svgSprite('Facebook')}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBlock: {
        color: 'white',
        fontSize: 16,
        marginTop: 24,
        marginBottom: 16,
        fontFamily: LayoutsStyles.fontFamily
    },
    enterButton: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: LayoutsStyles.marginBottom
    },
    enterButtonItem: {
        paddingHorizontal: 5
    }
})

export default EnterHelpButtons;
    