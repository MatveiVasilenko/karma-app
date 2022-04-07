import {View, StyleSheet,Text, Image} from 'react-native';
import { LayoutsStyles } from './../../../../styles/layouts/layouts-styles';

const OrderGridRow = ({
    elem
}) => {
    const {money, type} = elem
    
    return (
        <View style={styles.order}>
            <View style={styles.orderInfo}>
                {
                    type === 'add' ? <Image style={styles.orderIcon} source={require('./../../../../assets/image/add-order.png')} />:
                    type === 'out' ? <Image style={styles.orderIcon} source={require('./../../../../assets/image/out-order.png')} />:
                    type === 'percent' ? <Image style={styles.orderIcon} source={require('./../../../../assets/image/out-percent.png')} />:
                    type === 'stream' ? <Image style={styles.orderIcon} source={require('./../../../../assets/image/stream.png')} />: <Text></Text>
                }
                <Text style={styles.orderInfoTitle}>
                    {
                        type === 'add' ? 'Ввод на баланс':
                        type === 'out' ? 'Вывод средств':          
                        type === 'percent' ? 'Вывод % на баланс':          
                        type === 'stream' ? 'Перевод в доверительное управление': ''
                    }
                </Text>
            </View>
            <View style={styles.orderMoney}>
                <Text style={styles.orderMoneyValue}>{money}</Text>
                <Text style={styles.orderMoneyText}>USDT</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginBottom: 12,
    },
    orderInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '65%'

    },  
    orderInfoTitle: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamily,
        // backgroundColor: 'red',
        width: '80%',
        fontSize: 16,
    },
    orderIcon: {
        width: 51,
        height: 50,
        marginRight: 12
    },
    orderMoney: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        // width: '20%',
    },
    orderMoneyValue: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyMedium,
        fontSize: 20,
        marginRight: 3
    },
    orderMoneyText: {
        color: LayoutsStyles.colorMain,
        fontSize: 13,
        fontFamily: LayoutsStyles.fontFamily,
        paddingBottom: 2
    }
})

export default OrderGridRow;
