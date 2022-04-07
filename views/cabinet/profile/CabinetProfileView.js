import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Cabinet from './../../../layouts/cabinet/Cabinet';
import ProfileHead from './../../../widgets/screens/cabinet/ProfileHead';
import ProfileTable from './components/ProfileTable';

const CabinetProfileView = ({
    navigation
}) => {
    const {height} = useWindowDimensions()
    return (
        <View style={{
            minHeight: height * 0.8
        }}>
            <ProfileHead profile={true}/>
            <ProfileTable navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CabinetProfileView;
