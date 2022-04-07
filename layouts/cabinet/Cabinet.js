import { View, StyleSheet, useWindowDimensions, ScrollView, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import { LinearGradient } from 'expo-linear-gradient';

const Cabinet = ({
    children
}) => {
    const {width, height} = useWindowDimensions()
    return (
        <View style={{...globalStyles.containerCenter, ...{backgroundColor: 'red'}}}>
            <LinearGradient
                    // Background Linear Gradient
                    colors={['#1A1A1A', '#00742D']}
                    style={{
                        ...styles.content,
                        ...{
                            minWidth: width,
                        }
                    }}
                >
                    <ScrollView>
                        <View style={{
                            flex: 1,
                            paddingTop: 50,
                            // height: height
                        }}>
                            {children}
                        </View>
                    </ScrollView>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        minHeight: 500
    }
})

export default Cabinet;
