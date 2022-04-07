import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { View, StyleSheet, Text, useWindowDimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MainSliderItem from './MainSliderItem';
import { LayoutsStyles } from './../../../../../styles/layouts/layouts-styles';
import svgSprite from './../../../../../project/svg/svgSprite';
import { threeMoney } from './../../../../../project/helpers';

const MainSlider = () => {
    const {width} = useWindowDimensions()
    const [streamsData, setStreamsData] = useState([
        {
            id: 1,
            title: 'Первый поток',
            money: 18072
        },
        {
            id: 2,
            title: 'Второй поток',
            money: 2223
        },
    ])
    const renderItem = ({item, index}) => {
        return (
            <View style={{
                minHeight: 200,
                marginBottom: LayoutsStyles.marginBottom
            }}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#008735', '#EEFFF5', '#008735']}
                    style={styles.card}
                    start={{
                        x: 1, 
                        y: 1
                    }}
                    >
                        <LinearGradient
                            style={styles.cardInner}
                            colors={['#0C7835', '#113F23']}
                            start={{
                                x: 0.5, 
                                y: 1
                            }}
                        >
                        <View style={styles.stream}>
                            <View style={styles.streamInfo}>
                                <Image style={styles.streamInfoImg} source={require('./../../../../../assets/image/logoSmall.png')} />
                                <View>
                                    <Text style={styles.streamInfoTitle}>Доверительное управление</Text>
                                    <Text style={styles.streamInfoTitle}>{item.title}</Text>
                                </View>
                            </View>
                            <Text style={styles.streamID}>***{item.id}</Text>
                            <View style={styles.streamBody}>
                                <View>
                                    <View style={styles.streamMoney}>
                                        <Text style={styles.streamMoneyValue}>{threeMoney(item.money)}</Text>
                                        <Text style={styles.streamMoneyText}>USDT</Text>
                                    </View>
                                    <View style={styles.streamDate}>
                                        <Text style={styles.streamDateValue}>365/730</Text>
                                        {svgSprite('clock', {
                                            height: 20,
                                            width: 20
                                        })}
                                    </View>
                                </View>
                                <View style={styles.streamPercent}>
                                    <View style={styles.streamPercentMoney}>
                                        <Text style={styles.streamPercentMoneyValue}>{threeMoney(120)}</Text>
                                        <Text style={styles.streamPercentMoneyText}>USDT</Text>
                                    </View>
                                    <View style={styles.streamPercentDate}>
                                        <Text style={styles.streamPercentDateValue}>2/10</Text>
                                        {svgSprite('clock', {
                                            height: 18,
                                            width: 18
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </LinearGradient>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel 
                layout={"default"}
                data={streamsData}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width - 56}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 2,
        borderRadius: 20,
        height: '100%',
    },
    cardInner: {
        borderRadius: 20,
        height: '100%',
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    stream: {
        
    },
    streamInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    streamInfoImg: {
        width: 75,
        height: 49
    },  
    streamInfoTitle: {
        color: LayoutsStyles.colorSub,
        textAlign: 'right',
        fontFamily: LayoutsStyles.fontFamily
    },
    streamID: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyMedium,
        letterSpacing: 3,
        fontSize: 22,
        marginBottom: 16,
        paddingHorizontal: 16
    },
    streamMoney: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    streamMoneyValue: {
        fontSize: 22,
        fontFamily: LayoutsStyles.fontFamilyBold,
        color: LayoutsStyles.colorMain,
        marginRight: 3
    },
    streamMoneyText: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilyBold,
        paddingBottom: 1
    },
    streamBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16
    },
    streamDate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    streamDateValue: {
        fontFamily: LayoutsStyles.fontFamily,
        color: LayoutsStyles.colorSub,
        marginRight: 3
    },
    streamPercentMoney: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    streamPercentMoneyValue: {
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilySemiBold,
        fontSize: 16,
        marginRight: 3
    },
    streamPercentMoneyText: {
        fontSize: 11,
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamilySemiBold,
        paddingBottom: 2
    },
    streamPercentDate: {
        flexDirection: 'row',
    },
    streamPercentDateValue: {
        color: LayoutsStyles.colorSub,
        fontFamily: LayoutsStyles.fontFamily,
        fontSize: 12,
        marginRight: 3
    }
})

export default MainSlider;
