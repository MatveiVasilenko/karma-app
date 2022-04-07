import {View, StyleSheet, Text} from 'react-native';
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';
import svgSprite from './../../../project/svg/svgSprite';

const ProfileHead = ({
    profile
}) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.fio}>Василий Иванов</Text>
                <Text style={styles.capital}>{profile ? 'Профиль' : 'Капитализация с 12.01.2020'}</Text>
            </View>
            <View>
            {svgSprite('IconUser')}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: LayoutsStyles.paddingMain,
        marginBottom: LayoutsStyles.marginBottom
    },
    fio: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyBold,
        fontSize: 22
    },
    capital: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyLight,
        fontSize: 12
    }
})

export default ProfileHead;
