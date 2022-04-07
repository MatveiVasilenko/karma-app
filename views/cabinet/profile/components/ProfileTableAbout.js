import {View, StyleSheet, useWindowDimensions} from 'react-native';
import ProfileItem from './ProfileItem';

const ProfileTableAbout = ({navigation}) => {
    const aboutData = [
        {
            type: 'company',
            title: 'О компании'
        },
        {
            type: 'block',
            title: 'Блокировать доступ'
        },
        {
            type: 'exit',
            title: 'Выйти',
            onPress(){
                navigation.navigate('Login')
            }
        }
    ]
    const {height} = useWindowDimensions()
    return (
        <View style={{...styles.wrapper, minHeight: 0.5 * height}}>
            {aboutData.map((elem, idx) => (
                <ProfileItem
                    elem={elem}
                    key={idx}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 24
    }
})

export default ProfileTableAbout;
