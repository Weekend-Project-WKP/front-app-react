import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    return <Stack screenOptions={{
    }}>
        <Stack.Screen name='index' options={{ title: '', headerShown: false }} />
        <Stack.Screen name='settings' options={{ title: '', headerShown: false }} />
        <Stack.Screen name='profile' options={{ title: '', headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>;
};

export default Layout;