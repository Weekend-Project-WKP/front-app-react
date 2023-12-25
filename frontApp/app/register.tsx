import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
    const router = useRouter();
    const faceoffImage = '../assets/images/faceoff.png';

    return (
        <View style={styles.container}>
            <ImageBackground source={require(faceoffImage)} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <View style={styles.headerBtn}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <View>
                                <Ionicons name="arrow-back-circle-outline" size={42} color={'#fff'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.centerView}>
                    <Text style={styles.text}>Create a free account!</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email."
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password."
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInputConfirmPassword}
                            placeholder="Confirm Password."
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                    <TouchableOpacity style={styles.signUpBtn}>
                        <View style={styles.signUpView}>
                            <Text style={styles.signUpText}>Sign up</Text>
                            <Ionicons name={'arrow-forward-circle'} size={32} color={'#fff'} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 36,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 35,
    },
    centerView: {
        alignItems: 'center',
        marginBottom: '20%'
    },
    inputView: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    textInputConfirmPassword: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontStyle: 'italic'
    },
    signUpBtn: {
        width: '70%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB1313',
        color: '#FFFFFF',
        marginBottom: 150
    },
    signUpText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: '42%',
        marginRight: '25%'
    },
    signUpView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: "row",
        marginBottom: '40%',
        marginLeft: '11%'
    },
    headerBtn: {
        flex: 1,
        justifyContent: 'flex-start',
        color: 'white',
    },
});

export default Page;