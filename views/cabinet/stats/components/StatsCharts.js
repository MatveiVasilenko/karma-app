import { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Chart from './Chart';
import StatsChartsFilter from './StatsChartsFilter';
import { LinearGradient } from 'expo-linear-gradient';

const StatsCharts = () => {
    const {height} = useWindowDimensions()
    const loadData = []
    const [statsData, setStatsData] = useState(loadData)
    const [activeFilter, setActiveFilter] = useState('money')
    const filterFunc = () => {
        setActiveFilter(activeFilter === 'money' ? 'ready': 'open')
        setStatsData(loadData.filter(el => el.status === activeFilter))
    }
    return (
        <View style={styles.wrapper}>
            <StatsChartsFilter 
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
                    <Chart />
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
    },
    wrapper: {
    }
})

export default StatsCharts;
