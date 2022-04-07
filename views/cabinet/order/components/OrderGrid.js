import { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import OrderGridBody from './OrderGridBody';
import OrderGridFilter from './OrderGridFilter';
import { LinearGradient } from 'expo-linear-gradient';

const OrderGrid = () => {
    const loadData = [
        {
            type: 'add',
            status: 'ready',
            money: 2002,
            date: '13.02.2022'
        },
        {
            type: 'out',
            status: 'ready',
            money: 900,
            date: '13.02.2022'
        },
        {
            type: 'add',
            status: 'open',
            money: 1000,
            date: '13.02.2022'
        },
        {
            type: 'percent',
            status: 'open',
            money: 9300,
            date: '12.02.2022'
        },
        {
            type: 'stream',
            status: 'ready',
            money: 13000,
            date: '12.02.2022'
        },
        {
            type: 'stream',
            status: 'ready',
            money: 13500,
            date: '11.02.2022'
        },
    ]
    const {height} = useWindowDimensions()
    const [activeFilter, setActiveFilter] = useState('open')
    const [orderData, setOrderData] = useState(loadData.filter(el => el.status === activeFilter))
    const filterFunc = (status) => {
        setActiveFilter(status)
        setOrderData(loadData.filter(el => el.status === status))
    }
    return (
        <View>
            <OrderGridFilter 
                activeFilter={activeFilter}
                filterFunc={filterFunc}
            />
            <View style={styles.content}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0, 0, 0, 0.46)', 'rgba(0, 0, 0, 0.49)']}
                    style={{
                        // ...styles.content,
                        ...{
                            minHeight: height * 0.8,
                        }
                    }}
                >
                    <OrderGridBody orderData={orderData}/>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden'
    }
})

export default OrderGrid;
