import { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import AuthHead from '../../../widgets/screens/authHead/AuthHead';
import Auth from './../../../layouts/auth/Auth';
import { globalStyles } from './../../../styles/global';
import EnterHelpButtons from './../../../widgets/screens/authHead/EnterHelpButtons';
import ButtonUI from './../../../widgets/ui/Button/ButtonUI';
import { inputDataLoginFunc } from './utils';
import InputUI from './../../../widgets/ui/Input/InputUI';

import * as LocalAuthentication from 'expo-local-authentication';

const LoginScreen = ({
    navigation
}) => {
    const inputData = useMemo(() => inputDataLoginFunc(), [])

    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
          if (!savedBiometrics){
            setIsBiometricSupported(false)
            // return Alert.alert(
            //     'Биометрическая запись не найдена',
            //     'Пожалуйста, подтвердите свою личность с помощью пароля',
            //     'OK',
        //   )
          } else {
              return true
          }
    }

    // Проверьте, поддерживает ли оборудование биометрию
    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
            if (compatible){
                const data = await handleBiometricAuth()
                if (data) {
                    const authTrue = await LocalAuthentication.authenticateAsync()
                    if (authTrue?.success){
                        navigation.navigate('Cabinet')
                    }
                }
            }
        })();
    });

    return (
        <Auth>
            <View style={globalStyles.containerCenter}>
                <AuthHead 
                    navigation={navigation}
                />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    {inputData.map((item, idx) => (
                        <InputUI 
                            item={item}
                            key={`input${idx}`}
                        />
                    ))}
                </View>
                
                <View>
                    <ButtonUI 
                            navigation={navigation}
                            title="Вход"
                            screen="Cabinet"
                            options={{}}
                            type="secondary"
                        />
                </View>
                <EnterHelpButtons />
            </View>
        </Auth>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
export default LoginScreen