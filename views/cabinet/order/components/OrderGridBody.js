import {View, StyleSheet, Text} from 'react-native';
import OrderGridRow from './OrderGridRow';
import { LayoutsStyles } from './../../../../styles/layouts/layouts-styles';

const OrderGridBody = ({
    orderData
}) => {
    let date = true
    let activeDate = null
    let now = new Date()
    let yesterday = new Date()
    yesterday.setDate(now.getDate() - 1)
    now = `${now.getDate().toString().length > 1 ? now.getDate() : "0" + now.getDate()}.${(now.getMonth() + 1).toString().length > 1 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1)}.${now.getFullYear()}`
    yesterday = `${yesterday.getDate().toString().length > 1 ? yesterday.getDate() : "0" + yesterday.getDate()}.${(yesterday.getMonth() + 1).toString().length > 1 ? yesterday.getMonth() + 1 : "0" + (yesterday.getMonth() + 1)}.${yesterday.getFullYear()}`
    return (
        <View style={styles.wrapper}>
            {orderData.map((elem, idx) => {
                if (activeDate === elem.date){
                    date = false
                } else {
                    activeDate = elem.date
                    date = true
                }    
                return (
                    <View key={idx}>
                        {elem.date && date && <Text style={styles.date}>{now === elem.date ? 'Сегодня' : yesterday === elem.date ? 'Вчера' : elem.date}</Text>}
                        <OrderGridRow 
                            elem={elem}
                            key={idx}
                        />
                    </View>
                )

            })}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 24
    },
    date: {
        textAlign: 'center',
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamily,
        marginBottom: 20,
        marginTop: 12
    }
})

export default OrderGridBody;
