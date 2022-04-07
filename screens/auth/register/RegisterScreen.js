import { useMemo } from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import Auth from '../../../layouts/auth/Auth';
import AuthHead from '../../../widgets/screens/authHead/AuthHead';
import InputUI from '../../../widgets/ui/Input/InputUI';
import { globalStyles } from './../../../styles/global';
import EnterHelpButtons from './../../../widgets/screens/authHead/EnterHelpButtons';
import ButtonUI from './../../../widgets/ui/Button/ButtonUI';
import { inputDataFunc } from './utils';

const RegisterScreen = ({
    navigation
}) => {
    const inputData = useMemo(() => inputDataFunc(), [])
    const { height, width } = useWindowDimensions();
    return (
        <Auth>
            <View style={globalStyles.containerCenter}>
                <ScrollView>
                <AuthHead
                    navigation={navigation}
                    login={false}
                    />
                    <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
                        {inputData.map((item, idx) => (
                            <InputUI 
                                item={item}
                                key={`input${idx}`}
                            />
                        ))}
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <ButtonUI 
                            navigation={navigation}
                            title="Регистрация"
                            screen="Register"
                            options={{}}
                            type="secondary"
                            />
                    </View>
                    <EnterHelpButtons />
                </ScrollView>
            </View>
        </Auth>
    )
}
export default RegisterScreen