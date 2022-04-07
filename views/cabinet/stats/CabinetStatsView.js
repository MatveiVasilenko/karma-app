import {View, StyleSheet, useWindowDimensions} from 'react-native';
import CabinetHead from '../../../widgets/screens/cabinet/CabinetHead';
import StatsCharts from './components/StatsCharts';

const CabinetStatsView = () => {
    const {height} = useWindowDimensions()
    return (
        <View style={{
            minHeight: height * 0.8
        }}>
            <CabinetHead 
                title="Статистика"
            />
            <StatsCharts />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CabinetStatsView;
