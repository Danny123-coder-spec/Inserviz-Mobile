import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`flex-1 bg-[#f0f2f5]`}>
            <ScrollView style={tw`pt-4 px-4 pb-6`} showsVerticalScrollIndicator={false}>
                <View style={tw`flex flex-row items-center gap-x-25`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon color="#00ACEE" name='arrow-back' size={22}/>
                    </TouchableOpacity>
                    <Text style={tw`text-2xl text-[#00ACEE]`}>About us</Text>
                </View>
                <View style={tw`pt-4`}>
                    <Text>Inserviz is a platform connecting African
                        youth with gig economy opportunities to monetize
                        their skills and services. We empower informal sector
                        youth to connect with clients and short-term contracts,
                        and enable NGOs to recruit volunteers for social impact.

                    </Text>
                    <Text style={tw`pt-3`}>
                        Our diverse community includes verified service providers
                        in digital, entertainment, health, domestic, beauty,
                        and artisanal services. We offer a payment assurance
                        service to ensure secure and
                        seamless transactions. Join us today to transform the
                        gig economy and empower African youth.
                    </Text>
                    <Text style={tw`pt-3`}>
                        Inserviz is a platform connecting African youth
                        with gig economy opportunities to monetize their
                        skills and services. We empower informal sector
                        youth to connect with clients and short-term contracts,
                        and enable NGOs to recruit volunteers for social impact.

                    </Text>
                    <Text>
                        Our diverse community includes verified service providers
                        in digital, entertainment, health, domestic, beauty,
                        and artisanal services. We offer a payment assurance
                        service to ensure secure and seamless transactions.
                        Join us today to transform the gig economy and empower
                        African youth.
                    </Text>
                    <Text style={tw`pt-3`}>
                        Inserviz is not just a platform; it's a dynamic
                        ecosystem that's revolutionizing the way African
                        youth engage with the gig economy, allowing them
                        to harness their unique skills and services for
                        financial independence and personal growth.
                        We are passionate about connecting the informal
                        sector youth with exciting opportunities for short-term contracts
                        and, in doing so, fostering a thriving community
                        of service providers and change-makers.
                    </Text>
                    <Text style={tw`pt-3`}>
                        At Inserviz, we are committed to creating a world
                        where the boundaries of possibility are defined
                        by the talents and aspirations of our youth.
                        Our platform serves as a bridge between those
                        seeking services and the talented individuals
                        ready to provide them.

                    </Text>
                    <Text style={tw`pt-3`}>
                        Whether you're looking
                        for digital expertise, entertainment that
                        captivates, healthcare services that heal,
                        domestic support that simplifies, beauty
                        transformations, or artisanal creations,
                        InServiz has you covered with a diverse pool of verified
                        service providers who are committed to delivering excellence.
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})