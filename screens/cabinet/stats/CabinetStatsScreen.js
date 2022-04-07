import {View, StyleSheet, Text} from 'react-native';
import CabinetStatsView from '../../../views/cabinet/stats/CabinetStatsView';
import Cabinet from './../../../layouts/cabinet/Cabinet';

const CabinetStatsScreen = () => {
    return (
        <Cabinet>
            <CabinetStatsView />
        </Cabinet>
    );
}

const styles = StyleSheet.create({})

export default CabinetStatsScreen;
