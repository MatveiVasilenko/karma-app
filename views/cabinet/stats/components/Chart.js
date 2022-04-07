import { View, StyleSheet, useWindowDimensions, Text } from 'react-native';
import {LineChart} from 'react-native-chart-kit'
import { LayoutsStyles } from './../../../../styles/layouts/layouts-styles';

const Chart = () => {
    const {width} = useWindowDimensions()
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Заработано компанией Karma Invest</Text>
            <LineChart 
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                            ]
                        }
                    ]
                }} 
                width={width - 12} // from react-native
                height={300}
                yAxisLabel=""
                yAxisSuffix="%"
                xAxisInterval={5} 
                yAxisInterval={'ss'} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "red",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    backgroundGradientTo: "yellow",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(192, 255, 217, ${opacity})`,
                    labelColor: (opacity = 1) => `#DDDDDD`,
                    style: {
                        borderRadius: 19,
                        fontFamily: LayoutsStyles.fontFamily

                        // backgroundColor: 'red'
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "1",
                        stroke: "#008735",
                        fill: '#008735',
                        fillOpacity: 0.5
                    },
                    propsForHorizontalLabels:{
                        // fontFamily: 'sans-serif'
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 5,
                    backgroundColor: 'tranparent',
                    fontFamily: LayoutsStyles.fontFamily
                }}
                withHorizontalLines={false}
                withVerticalLines={false}
                fromZero={true}
                segments={7}
                renderDotContent={({x, y, indexData}) => (
                    <View
                      style={{
                        position: 'absolute',
                        top: y - 25,
                        left: x - 8,
                      }}>
                      <Text style={styles.dotContent}>
                        {Math.floor(indexData)}%
                      </Text>
                    </View>
                  )}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 6
    },
    title: {
        paddingTop: 24,
        paddingHorizontal: 24,
        marginBottom: 16,
        color: LayoutsStyles.colorMain,
        fontFamily: LayoutsStyles.fontFamily
    },
    dotContent: {
        color: LayoutsStyles.colorSub,
        fontFamily: LayoutsStyles.fontFamily,
        fontSize: 10
    }
})

export default Chart;
