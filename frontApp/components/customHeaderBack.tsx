import { StyleSheet, TouchableOpacity, Platform, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const customHeaderBack = () => {
    return (

        <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity style={styles.container} onPress={() => router.back()}>
                <View>
                    <Ionicons name={'arrow-back-circle-sharp'} size={42} color={'#fff'} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#e0a5a5",
        paddingTop: Platform.OS === 'android' ? 5 : 0
    },
    container: {
        height: 40,
        marginLeft: 20,
        marginTop: 5,
        width: 40,
    },
});

export default customHeaderBack;