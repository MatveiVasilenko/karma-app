import {View, StyleSheet, TextInput} from 'react-native';
import { LayoutsStyles } from './../../../styles/layouts/layouts-styles';

const InputUI = ({
    item
}) => {
    const {type, placeholder} = item
    const config = {
        keyboard: type === 'phone' ? 'phone-pad' : 'default'
    }
    return (
        <View style={styles.inputWrapper}>
            <TextInput 
                autoComplete="tel"
                keyboardType={config.keyboard}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 10
    },  
    input: {
        color: '#fff',
        fontSize: 18,
        fontFamily: LayoutsStyles.fontFamily,
        width: 300,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderWidth: 1
    }
})

export default InputUI;
