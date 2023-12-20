import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
    const router = useRouter();

    return (
        <View>
            <Button onPress={() => router.push("/register")} title="Open Sign up" />
            <Link href={"/register"} asChild>
                <Button title="Open Sign up with Link" />
            </Link>

            <Link href={"/(tabs)/home"} asChild>
                <Button title="Open Login Tab" />
            </Link>
        </View>
    );
};

export default Page;