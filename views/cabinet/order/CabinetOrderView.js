import {View, StyleSheet, useWindowDimensions} from 'react-native';
import CabinetHead from '../../../widgets/screens/cabinet/CabinetHead';
import OrderGrid from './components/OrderGrid';

const CabinetOrderView = () => {
    const {height} = useWindowDimensions()
    return (
        <View style={{
            minHeight: height * 0.8
        }}>
            <CabinetHead 
                title="Ордера"
            />
            <OrderGrid />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CabinetOrderView;
