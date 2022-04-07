import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CabinetMainScreen from './../cabinet/main/CabinetMainScreen';
import CabinetOrderScreen from './../cabinet/order/CabinetOrderScreen';
import CabinetStatsScreen from './../cabinet/stats/CabinetStatsScreen';
import CabinetProfileScreen from './../cabinet/profile/CabinetProfileScreen';
import { LayoutsStyles } from './../../styles/layouts/layouts-styles';
import { Platform, Text, useWindowDimensions } from 'react-native';
import svgSprite from './../../project/svg/svgSprite';

const CabinetNav = () => {
    const Tab = createBottomTabNavigator()
    const {height} = useWindowDimensions()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'rgba(255,255,255,0.8)',
                tabBarActiveBackgroundColor: '#015924',
                tabBarInactiveBackgroundColor: 'rgb(1, 59, 3)',
                headerStyle: {
                    height: 0
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontFamily: LayoutsStyles.fontFamily,
                    height: 20,
                    marginBottom: 10
                },
                tabBarIconStyle: {
                    marginTop: 10
                },
                tabBarIcon: ({focused}) => {
                    return (
                        svgSprite(`${route.name}Icon`, {
                            fill: focused ? '#fff' : '#CCD5D0'
                        })
                    )
                },
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 100 : 70,
                }
            })}
            
        >
            <Tab.Screen 
                name="CabinetMain" 
                component={CabinetMainScreen}
                
                options={{ 
                    tabBarLabel: 'Кабинет'
                }}
                />
            <Tab.Screen 
                name="CabinetStats" 
                component={CabinetStatsScreen} 
                options={{
                    tabBarLabel: 'Статистика'
                }}
                />
            <Tab.Screen 
                name="CabinetOrder" 
                component={CabinetOrderScreen} 
                options={{
                    tabBarLabel: 'Ордера'
                }}
                />
            <Tab.Screen 
                name="CabinetProfile" 
                component={CabinetProfileScreen} 
                options={{
                    tabBarLabel: 'Профиль'
                }}
                />
        </Tab.Navigator>
    )
}

export default CabinetNav;
