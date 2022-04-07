import {View, StyleSheet, useWindowDimensions} from 'react-native';
import ProfileTableUserItem from './ProfileTableUserItem';

const ProfileTableUser = () => {
    const userData = {
        id: 1,
        email: 'test-test@gmail.com',
        phone: '+380953422443',
        wallet: 'sadddasd8sad87d66asdhasd',
        password: '2231321'
    }
    const {height} = useWindowDimensions()
    return (
        <View>
            {Object.keys(userData).map((attr, idx) => (
                <ProfileTableUserItem 
                    elem={userData[attr]}
                    attr={attr}
                    key={idx}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default ProfileTableUser;
