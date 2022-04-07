import {View, StyleSheet, Text} from 'react-native';
import { LayoutsStyles } from '../../../../../styles/layouts/layouts-styles';
import MainBalanceMoney from './MainBalanceMoney';
import MainBalanceStatus from './MainBalanceStatus';
import MainButtons from './MainButtons';

const MainBalance = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Управление балансом</Text>
            <MainBalanceMoney />
            <MainButtons />
            <MainBalanceStatus />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: LayoutsStyles.paddingMain
    },
    title: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamily,
        fontSize: 18,
        marginBottom: 12
    }
})

export default MainBalance;
