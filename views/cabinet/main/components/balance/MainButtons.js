import {View, StyleSheet, Text} from 'react-native';
import ButtonUIUniversal from '../../../../../widgets/ui/Button/ButtonUIUniversal';
import { LayoutsStyles } from './../../../../../styles/layouts/layouts-styles';

const MainButtons = () => {
    return (
        <View style={styles.wrapper}>
            <View style={{...styles.wrapperBlock, paddingRight: 5}}>
                <View style={styles.buttonAdd}>
                    <ButtonUIUniversal 
                        title="Пополнить баланс"
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
                <View style={styles.buttonAdd}>
                    <ButtonUIUniversal 
                        title="Вывести"
                        options={{
                            radius: {
                                topstart: false,
                                topend: false,
                                botstart: true,
                                botend: true,
                                value: 30
                            }
                        }}
                        type="secondary"
                    />
                </View>
            </View>
            <View style={{...styles.wrapperBlock, paddingLeft: 5}}>
                <ButtonUIUniversal 
                    options={{
                        radius: {
                            topstart: true,
                            topend: false,
                            botstart: true,
                            botend: true,
                            value: 30
                        }
                    }}
                >
                    <Text style={styles.buttonDover}>Перевести в доверительное управление</Text>
                </ButtonUIUniversal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginBottom: LayoutsStyles.marginBottom
    },
    wrapperBlock: {
        flex: 1
    },
    buttonAdd: {
        marginBottom: 10,
        // width: '50%'
    },
    buttonDover: {
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 22,
        fontFamily: LayoutsStyles.fontFamilyMedium
    }
})

export default MainButtons;
