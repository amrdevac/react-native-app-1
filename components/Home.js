import { Image, View, Text, Button, StyleSheet, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import activitiesData from "../assets/data/activityData"
import learnMoreData from "../assets/data/learnMoreData"
import discoveryData from "../assets/data/discoveryData"
import { SafeAreaView } from 'react-native-safe-area-context'
import Profile from "../assets/images/person.png"

const Home = ({ navigation }) => {

    const renderDiscoveryItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate("Detail", {
                    item: item

                })
            }} >
                <ImageBackground
                    source={item.image}
                    style={styles.discoverItem}
                    imageStyle={styles.discoverItemImage}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWraper}>
                        <Entypo name='location-pin' size={18} color={colors.white} />
                        <Text style={styles.discoverItemText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    const renderActivity = ({ item }) => {
        return (
            <View style={styles.activityItemWrapper}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.itemActivityText}> {item.title} </Text>
            </View>
        )
    }


    const renderLearnMoreItem = ({ item }) => {
        return (

            <ImageBackground source={item.image}
                style={styles.learnMoreItem}
                imageStyle={styles.learnMoreImage}

            >
                <Text style={styles.learnMoreItemText}> {item.title} </Text>

            </ImageBackground >


        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather name='menu' size={32} color={colors.black} style={styles.menuIcon} />
                        <Image source={Profile} style={styles.profileImage} />
                    </View>
                </SafeAreaView>
                {/* Discover Section  */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategories}>
                        <Text style={[
                            styles.discoverCategoriesText, { color: colors.orange }
                        ]}>All</Text>
                        <Text style={styles.discoverCategoriesText}>Destination</Text>
                        <Text style={styles.discoverCategoriesText}>Cities</Text>
                        <Text style={styles.discoverCategoriesText}>Expiriences</Text>
                    </View>
                </View>
                {/* Discover Section Items  */}
                <View style={styles.discoverItemsWrapper}>
                    <FlatList data={discoveryData}
                        renderItem={renderDiscoveryItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    ></FlatList>
                </View>
                {/*Activities */}
                <View style={styles.activityWrapper}>
                    <Text style={styles.activityTitle}>
                        Activities
                    </Text>
                    <View style={styles.activityItemsWrapper}>
                        <FlatList data={activitiesData}
                            keyExtractor={(item) => item.id}
                            renderItem={renderActivity}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        ></FlatList>
                    </View>
                </View>
                {/* Learn More */}
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreTitle}>
                        Learn More
                    </Text>
                    <View style={styles.learnMoreItemWrapper}>
                        <FlatList data={learnMoreData}
                            keyExtractor={(item) => item.id}
                            renderItem={renderLearnMoreItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        ></FlatList>
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    discoverWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color:colors.black
    },
    discoverCategories: {
        flexDirection: "row",
        marginTop: 20,
    },
    discoverCategoriesText: {
        marginRight: 30,
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: colors.black
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginLeft: 20,
    },
    discoverItemImage: {
        borderRadius: 20,

    },
    discoverItemTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
        color: colors.white,

    },
    discoverItemLocationWraper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,

    },
    discoverItemText: {
        marginLeft: 5,
        fontFamily: "Lato-Bold",
        fontSize: 14,
        color: colors.white
    },
    activityWrapper: {
        marginTop: 10,
    },
    activityTitle: {
        marginHorizontal: 20,
        fontFamily: "Lato-Bold",
        fontSize: 32,
        color: colors.black
    },
    activityItemsWrapper: {
        justifyContent: "flex-end"

    },
    activityItemWrapper: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: 20,
        paddingVertical: 20,

    },
    activityItemImage: {
        width: 36,

    },
    itemActivityText: {
        marginTop: 5,
        fontFamily: "Lato-Bold",
        fontSize: 14,
        color: colors.black
    },
    learnMoreWrapper: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    learnMoreTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.black

    },
    learnMoreItem: {
        marginTop: 10,
        width: 170,
        height: 180,
        justifyContent: "flex-end",
        marginLeft: 5,
        marginRight:10,
    },
    learnMoreImage: {
        borderRadius: 20,
    },
    learnMoreItemText: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,

    },

})

export default Home