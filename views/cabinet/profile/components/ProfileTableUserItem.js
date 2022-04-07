import {View, StyleSheet, Text} from 'react-native';
import svgSprite from './../../../../project/svg/svgSprite';
import { LayoutsStyles } from './../../../../styles/layouts/layouts-styles';

const ProfileTableUserItem = ({
    elem,
    attr
}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.icon}>
                {svgSprite(`${attr}Profile`)}
            </View>
            <Text style={styles.value}>{elem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    icon: {
        marginRight: 12,
        width: 30
    },
    value: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyMedium,
        fontSize: 18
    }
})

export default ProfileTableUserItem;
