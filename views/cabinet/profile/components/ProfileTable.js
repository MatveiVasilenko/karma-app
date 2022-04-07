import {View, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileTableUser from './ProfileTableUser';
import ProfileTableSupport from './ProfileTableSupport';

const ProfileTable = ({
    navigation
}) => {
    return (
        <View style={styles.wrapper}>
            <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0, 138, 64, 0.6)', 'rgba(0, 101, 46, 0.633333)', '#003317']}
                    style={styles.content}
                >
                <View style={styles.wrapperBlock}>
                    <ProfileTableUser />
                </View>
                <View style={styles.wrapper}>
                    <LinearGradient
                            // Background Linear Gradient
                            colors={['rgba(0, 138, 64, 0.6)', 'rgba(0, 101, 46, 0.633333)', '#003317']}
                            style={styles.content}
                        >
                        <ProfileTableSupport 
                            navigation={navigation}
                        />
                    </LinearGradient>
                </View>
            </LinearGradient>
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

export default ProfileTable;
