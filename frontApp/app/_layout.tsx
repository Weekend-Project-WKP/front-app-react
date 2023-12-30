import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import CustomHeaderBack from '../components/customHeaderBack';

const Layout = () => {
    return <Stack screenOptions={{
    }}>
        <Stack.Screen name='index' options={{ title: '', headerShown: false }} />
        <Stack.Screen name='register' options={{ title: '', headerShown: false }} />
        <Stack.Screen name='settings' options={{ title: '', header: () => <CustomHeaderBack /> }} />
        <Stack.Screen name='profile' options={{ title: '', header: () => <CustomHeaderBack /> }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>;
};

export default Layout;