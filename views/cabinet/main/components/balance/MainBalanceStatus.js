import {View, StyleSheet, Text} from 'react-native';
import ButtonUIUniversal from '../../../../../widgets/ui/Button/ButtonUIUniversal';
import { LayoutsStyles } from './../../../../../styles/layouts/layouts-styles';
import svgSprite from './../../../../../project/svg/svgSprite';
import { threeMoney } from './../../../../../project/helpers';

const MainBalanceStatus = () => {
    return (
        <View style={styles.wrapper}>
            <View style={{...styles.wrapperBlock, paddingRight: 5}}>
                <ButtonUIUniversal 
                    options={{
                        radius: {
                            topstart: false,
                            topend: true,
                            botstart: true,
                            botend: true,
                            value: 30
                        }
                    }}
                >
                    <View style={styles.button}>
                        <View style={styles.buttonIcon}>
                            {svgSprite('allMoney')}
                        </View>
                        <View style={styles.buttonMoney}>
                            <Text style={styles.buttonMoneyValue}>{threeMoney(18070)}</Text>
                            <Text style={styles.buttonMoneyText}>USDT</Text>
                        </View>
                        <Text style={styles.buttonText}>Всего в активах</Text>
                    </View>
                </ButtonUIUniversal>
            </View>
            <View style={{...styles.wrapperBlock, paddingLeft: 5}}>
                <ButtonUIUniversal 
                    type="secondary"
                    options={{
                        radius: {
                            topstart: true,
                            topend: false,
                            botstart: true,
                            botend: true,
                            value: 30
                        }
                    }}
                >
                    <View style={styles.button}>
                        <View style={styles.buttonIcon}>
                            {svgSprite('circle')}
                        </View>
                        <View style={styles.buttonMoney}>
                            <Text style={styles.buttonMoneyValue}>{threeMoney(2500)}</Text>
                            <Text style={styles.buttonMoneyText}>USDT</Text>
                        </View>
                        <Text style={styles.buttonText}>Активы в обработке</Text>
                    </View>
                </ButtonUIUniversal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    },
    wrapperBlock: {
        flex: 1
    },
    buttonAdd: {
        marginBottom: 10,
        // width: '50%'
    },
    button: {
        paddingVertical: 35,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonIcon: {
        marginBottom: 6
    },
    buttonMoney: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    buttonMoneyValue: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyBold,
        fontSize: 20,
        marginRight: 3
    },
    buttonMoneyText: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilySemiBold,
        fontSize: 13,
        paddingBottom: 2
    },
    buttonText: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamily,
        textAlign: 'center',
        fontSize: 13
    }
})

export default MainBalanceStatus;
