import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Home Tab</Text>
            <Button onPress={() => router.push('/settings')} title="Settings" />
        </View>
    );
};

export default Page;