import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LayoutsStyles } from './../../styles/layouts/layouts-styles';
const Auth = ({
    children
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                <View style={styles.logo}>
                    <Image style={styles.logoImg} source={require('./../../assets/image/logo.png')} />
                </View>
                <View style={styles.quote}>
                    <Text style={{
                        fontFamily: LayoutsStyles.fontFamily
                    }}>Karma</Text>
                    <Text style={{
                        fontFamily: LayoutsStyles.fontFamily
                    }} style={styles.quoteBold}>Invest</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.mya}>

                </View>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#008935', '#01742E', '#1A1A1A']}
                    style={styles.content}
                >
                        {children}
                </LinearGradient>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: LayoutsStyles.background,
      fontFamily: LayoutsStyles.fontFamily
    },
    preview: {
        // height: '45%',
        backgroundColor: '#fff',
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    body: {
        // height: '55%',
        backgroundColor: 'yellow',
        position: 'relative',
        flex: 2,
        overflow: 'hidden',
    },
    mya: {
        position: 'absolute',
        top: -950,
        left: '50%',
        width: 1000,
        height: 1000,
        backgroundColor: '#fff',
        zIndex: 9,
        borderRadius: 1000,
        // borderBottomEndRadius: 500,
        // borderBottomStartRadius: 500,
        transform:[{translateX: -500}],
        // transformOrigin: 'center'
    },
    content: {
        flex: 1,
        paddingTop: 70
    },
    logo: {
        // flex: 1,
        alignItems: 'center',
        marginBottom: 50
    },
    logoImg: {
        width: 150,
        height: 100
    },
    quote: {
        color: '#028134',
        flexDirection: 'row'
    },
    quoteBold: {
        color: '#028134',
        fontFamily: LayoutsStyles.fontFamilyBold,
        paddingLeft: 5
    }
})
export default Auth