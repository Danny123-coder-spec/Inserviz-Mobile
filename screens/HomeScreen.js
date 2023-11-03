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
        <SafeAreaView style={[tw`px-3 pt-4 pb-4`, styles.home]}>

            <Profile />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TotalGigs/>
                <Earnings/>
                <OngoingGigs/>
            </ScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        
    },
    scroll: {
        flex: 1
    }
});

export default HomeScreen