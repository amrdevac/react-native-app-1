import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, ScrollViewBase, ScrollView } from 'react-native'
import colors from '../assets/colors/colors'
import Entypo from "react-native-vector-icons/Entypo"
import React, { version } from 'react'

const height = Dimensions.get("window").height;

const Detail = ({ route, navigation }) => {
    const { item } = route.params
    return (
        <View style={styles.container}>
            <ImageBackground source={item.image} style={styles.backgrounImage} >
                <TouchableOpacity style={styles.backgrounImageIcon} onPress={() => {
                    navigation.goBack()
                }}>
                    <Entypo name='chevron-left' size={32} color={colors.white} />
                </TouchableOpacity>

                <View style={styles.titleWrapper}>
                    <Text style={styles.itemTitle}> {item.title} </Text>

                    <View style={styles.locationWrapper}>
                        <Entypo name='location-pin' size={24} color={colors.white} />
                        <Text style={styles.locationText}> {item.location} </Text>
                    </View>
                </View>
                {/* {console.log(item)} */}
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name='heart' size={32} color={colors.orange} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>
                        
                        {item.title}
                    </Text>
                    <ScrollView>
                        <Text style={styles.descriptionText}>
                            {item.description}
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}> PRICE </Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}> ${item.price} </Text>
                            <Text style={styles.infoSubtext}> /Person </Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}> RATING </Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}> {item.rating} </Text>
                            <Text style={styles.infoSubtext}> /stars </Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}> DURATION </Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}> {item.duration} </Text>
                            <Text style={styles.infoSubtext}> /Hours </Text>
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => { alert("you book the trip") }}>
                    <Text style={styles.buttonText}>
                        BOOK
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgrounImage: {
        height: height * 0.6,
        justifyContent: 'space-between'
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25
    },
    backgrounImageIcon: {
        marginLeft: 20,
        marginTop: 50,
    },

    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,

    },
    itemTitle: {
        color: colors.white,
        fontFamily: "Lato-Bold",
        fontSize: 25,
    },
    locationWrapper: {
        color: colors.white,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,

    },
    locationText: {
        color: colors.white,
        fontFamily: "Lato-Bold",
        fontSize: 16
    },
    heartWrapper: {
        position: "absolute",
        right: 40,
        top: -30,
        backgroundColor: colors.white,
        borderRadius: 64,
        width: 64,
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
        height: 130,

    },
    descriptionTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        marginBottom:20,
        color:colors.black
    },
    descriptionText: {
        marginTop: 20,
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.darkGray,
        // height: 85,
    },
    infoWrapper: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    infoItem: {

    },
    infoTitle: {
        marginTop: 20,
        fontFamily: "Lato-Bold",
        fontSize: 12,
        color: colors.black
    },
    infoTextWrapper: {
        flexDirection: "row",
        alignItems: 'flex-end',
        marginTop: 5,
    },
    infoText: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.orange
    },
    infoSubtext: {
        fontSize: 14,
        color: colors.black,
        fontFamily: "Lato-Bold"
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 25,
        backgroundColor: colors.orange,
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: "Lato-Bold"

    },

})

export default Detail