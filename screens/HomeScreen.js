import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Profile from '../components/Profile'
import TotalGigs from '../components/TotalGigs'
import Earnings from '../components/Earnings'
import OngoingGigs from '../components/OngoingGigs'


const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={tw`m-3 mt-4`}>
                <Profile />
                <TotalGigs />
                <Earnings />
                <OngoingGigs />
            </SafeAreaView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
});

export default HomeScreen