import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
    return <Tabs>
        <Tabs.Screen name="home" options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
                <Ionicons name='home' />
            )
        }} />

        <Tabs.Screen name="friends" options={{
            tabBarLabel: 'Friends',
            tabBarIcon: () => (
                <Ionicons name='people-circle' />
            )
        }} />
    </Tabs>
};

export default Layout;