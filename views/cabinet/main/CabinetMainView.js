import {View, StyleSheet} from 'react-native';
import ProfileHead from './../../../widgets/screens/cabinet/ProfileHead';
import MainBalance from './components/balance/MainBalance';
import MainSlider from './components/slider/MainSlider';

const CabinetMainView = () => {
    return (
        <View>
            <ProfileHead />
            <MainSlider />
            <MainBalance />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CabinetMainView;
