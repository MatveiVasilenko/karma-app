import {View, StyleSheet, Text, Image} from 'react-native';
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';
import svgSprite from './../../../project/svg/svgSprite';

const CabinetHead = ({
    title
}) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.capital}>Капитализация с 12.01.2020</Text>
            </View>
            <View>
                <Image style={styles.logoImg} source={require('./../../../assets/image/logoSmall.png')} />
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
        marginBottom: 24
    },
    title: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyBold,
        fontSize: 22
    },
    capital: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyLight,
        fontSize: 12
    },
    logoImg: {
        width: 78,
        height: 49
    }
})

export default CabinetHead;
