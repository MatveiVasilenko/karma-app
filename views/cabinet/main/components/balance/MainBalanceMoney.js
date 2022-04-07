import {View, StyleSheet, Text, Image} from 'react-native';
import { LayoutsStyles } from './../../../../../styles/layouts/layouts-styles';
import svgSprite from './../../../../../project/svg/svgSprite';
import { threeMoney } from './../../../../../project/helpers';

const MainBalanceMoney = () => {
    const money = 92000
    return (
        <View style={styles.wrapper}>
            <View style={styles.money}>
                <View>
                    <Image style={styles.moneyIcon} source={require('./../../../../../assets/image/usdt.png')} />
                </View>
                <View style={styles.moneyBlock}>
                    <View style={styles.moneyBlockMoney}>
                        <Text style={styles.moneyBlockValue}>{threeMoney(money)}</Text>
                        <Text style={styles.moneyBlockText}>USDT</Text>
                    </View>
                    <View style={styles.moneyCheck}>
                        <Text style={styles.moneyCheckText}>автоматически переводить в доверительное управление</Text>
                    </View>
                </View>
            </View>
            <View style={styles.info}>
                {svgSprite('Info')}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginBottom: LayoutsStyles.marginBottom
    },
    money: {
        flexDirection: 'row',
        flex: 1
    },
    moneyIcon: {
        width: 50,
        height: 50,
        marginRight: 12
    },  
    moneyBlock: {
        width: '100%'
    },
    moneyBlockMoney: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    moneyBlockValue: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyBold,
        fontSize: 30,
        marginRight: 6
    },  
    moneyBlockText: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyBold,
        fontSize: 20,
        paddingBottom: 3
    },  
    moneyCheck: {
        width: '70%'
    },
    moneyCheckText: {
        color: LayoutsStyles.colorSub,
        fontSize: 11,
        fontFamily: LayoutsStyles.fontFamily
    }
})

export default MainBalanceMoney;
