import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import svgSprite from './../../../../project/svg/svgSprite';
import { LayoutsStyles } from './../../../../styles/layouts/layouts-styles';

const ProfileItem = ({
    elem,
    attr
}) => {
    const handleClick = () => {
        if (elem.onPress){
            elem.onPress()
        }
    }
    return (
        <TouchableOpacity onPress={handleClick}>
            <View style={styles.wrapper}>
                <View style={styles.icon}>
                    {svgSprite(`${elem.type}Profile`)}
                </View>
                <Text style={styles.value}>{elem.title}</Text>
            </View>
        </TouchableOpacity>
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

export default ProfileItem;
