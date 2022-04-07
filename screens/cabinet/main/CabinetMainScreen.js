import {View, StyleSheet, Text} from 'react-native';
import Cabinet from '../../../layouts/cabinet/Cabinet';
import CabinetMainView from '../../../views/cabinet/main/CabinetMainView';

const CabinetMainScreen = () => {
    return (
        <Cabinet>
            <CabinetMainView />
        </Cabinet>
    );
}

const styles = StyleSheet.create({})

export default CabinetMainScreen;
