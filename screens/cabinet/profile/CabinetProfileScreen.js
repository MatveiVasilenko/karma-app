import {View, StyleSheet, Text} from 'react-native';
import CabinetProfileView from '../../../views/cabinet/profile/CabinetProfileView';
import Cabinet from './../../../layouts/cabinet/Cabinet';

const CabinetProfileScreen = ({
    navigation
}) => {
    return (
        <Cabinet>
            <CabinetProfileView 
                navigation={navigation}
            />
        </Cabinet>
    );
}

const styles = StyleSheet.create({})

export default CabinetProfileScreen;
