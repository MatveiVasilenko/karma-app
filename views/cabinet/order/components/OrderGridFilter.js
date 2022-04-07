import { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonUIUniversal from './../../../../widgets/ui/Button/ButtonUIUniversal';

const OrderGridFilter = ({
    activeFilter,
    filterFunc
}) => {
    
    return (
        <View style={styles.wrapper}>
            <View style={{...styles.filterBlock, paddingRight: 6}}>
                <ButtonUIUniversal 
                    title="В обработке"
                    type={activeFilter === 'open' ? 'primary' : 'dark'}
                    onPress={() => filterFunc('open')}
                    options={{
                        radius: {
                            topstart: false,
                            topend: true,
                            botstart: false,
                            botend: false,
                            value: 30
                        }
                    }}
                    />
            </View>
            <View style={{...styles.filterBlock, paddingLeft: 6}}>
                <ButtonUIUniversal
                    title="Выполненные"
                    type={activeFilter === 'ready' ? 'primary' : 'dark'}
                    onPress={() => filterFunc('ready')}
                    options={{
                        radius: {
                            topstart: true,
                            topend: false,
                            botstart: false,
                            botend: false,
                            value: 30
                        }
                    }}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        flexDirection: 'row',
        marginBottom: 24
    },
    filterBlock: {
        flex: 1,
    }
})

export default OrderGridFilter;
