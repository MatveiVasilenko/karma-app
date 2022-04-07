import HomeScreen from './auth/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './auth/login/LoginScreen';
import RegisterScreen from './auth/register/RegisterScreen';
import CabinetNav from './navigation/CabinetNav';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: '' }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: '' }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: '' }}
            />
            <Stack.Screen
                name="Cabinet"
                component={CabinetNav}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
    )
}
export default AppNavigation