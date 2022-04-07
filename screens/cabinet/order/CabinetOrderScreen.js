import {View, StyleSheet, Text} from 'react-native';
import CabinetOrderView from '../../../views/cabinet/order/CabinetOrderView';
import Cabinet from './../../../layouts/cabinet/Cabinet';

const CabinetOrderScreen = () => {
    return (
        <Cabinet>
            <CabinetOrderView />
        </Cabinet>
    );
}

const styles = StyleSheet.create({})

export default CabinetOrderScreen;
