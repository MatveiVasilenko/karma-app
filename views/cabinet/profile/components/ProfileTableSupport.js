import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import ProfileItem from './ProfileItem';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileTableAbout from './ProfileTableAbout';

const ProfileTableSupport = ({
    navigation
}) => {
    const supportData = [
        {
            type: 'document',
            title: 'Мои договора'
        },
        {
            type: 'support',
            title: 'Служба поддержки'
        }
    ]
    const {height} = useWindowDimensions()
    return (
        <View>
            <View style={styles.wrapperBlock}>
                {supportData.map((elem, idx) => (
                    <ProfileItem 
                        elem={elem}
                        key={idx}
                    />
                ))}
            </View>
            <View style={styles.wrapper}>
                <LinearGradient
                        // Background Linear Gradient
                        colors={['rgba(0, 138, 64, 0.6)', 'rgba(0, 101, 46, 0.633333)', '#003317']}
                        style={styles.content}
                    >
                    <ProfileTableAbout 
                        navigation={navigation}
                    />
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden'
    },
    wrapperBlock: {
        padding: 24
    }
})

export default ProfileTableSupport;
