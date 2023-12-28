import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Settings = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <View style={styles.header2}>
                    <View>
                        <Text style={styles.headerText}>Settings</Text>
                    </View>
                </View>
            </View>

            <View>
            <Text style={styles.settingsTitleText}>General</Text>
                <TouchableOpacity style={styles.settingsBtn} onPress={() => router.push("/profile")}>
                    <View style={styles.settingsView}>
                        <View style={styles.iconSettings}>
                            <Ionicons name="person-circle-outline" size={32} color="#000" />
                        </View>
                        <Text style={styles.settingsBtnText}>Edit Profile</Text>
                        <MaterialIcons name="arrow-forward-ios" size={32} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>

            <View>
            <Text style={styles.settingsTitleText}>Account</Text>
                <TouchableOpacity style={styles.settingsBtn}>
                    <View style={styles.settingsView}>
                        
                        <View style={styles.iconSettings}>
                            <MaterialCommunityIcons name="cancel" size={32} color="#000" />
                        </View>
                        <Text style={styles.settingsBtnText}>Blocked Account</Text>
                        <MaterialIcons name="arrow-forward-ios" size={32} color="#000" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsBtn}>
                    <View style={styles.settingsView}>  
                        <View style={styles.iconSettings}>
                            <Ionicons name="notifications" size={32} color="#000" />
                        </View>
                        <Text style={styles.settingsBtnText}>Notifications</Text>
                        <MaterialIcons name="arrow-forward-ios" size={32} color="#000" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.settingsBtn}>
                    <View style={styles.settingsView}>
                        <View style={styles.iconSettings}>
                            <MaterialCommunityIcons name="connection" size={32} color="#000" />
                        </View>
                        <Text style={styles.settingsBtnText}>Connections</Text>
                        <MaterialIcons name="arrow-forward-ios" size={32} color="#000" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsBtn}>
                    <View style={styles.settingsView}>
                        <View style={styles.iconSettings}>
                            <Ionicons name="document-text-sharp" size={32} color="#000" />
                        </View>
                        <Text style={styles.settingsBtnText}>Terms of Service</Text>
                        <MaterialIcons name="arrow-forward-ios" size={32} color="#000" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsBtn}>
                    <View style={styles.settingsView}>
                        <View style={styles.iconSettings}>
                            <MaterialCommunityIcons name="theme-light-dark" size={32} color="#000" />
                        </View>
                        <Text style={styles.settingsBtnText}>Dark Mode</Text>
                        <MaterialCommunityIcons name="toggle-switch" size={32} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.logOutBtnTitleText} >
                <TouchableOpacity style={styles.logOutBtn}>
                    <View style={styles.settingsView}>
                        <Text style={styles.logOutBtnText}>LOG OUT</Text>
                        <Entypo name="log-out" size={32} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0a5a5"
    },
    header: {
        flexDirection:"row",
        marginBottom: '13%',
        marginTop: '15%',
        marginLeft: '34%'
    },
    header2: {
        flex: 3
    },
    headerText: {
        color: 'white',
        fontSize: 36,   
        fontWeight: 'bold',
        justifyContent: 'flex-end'
    },
    settingsTitleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left',
        marginLeft: '11%',
        marginBottom: '3%',
        fontSize: 19, 
    },
    settingsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingsBtn: {
        width: '70%',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        marginLeft: '15%',
        marginBottom: '3%',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    settingsBtnText: {
        color: '#000000',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left'
    },
    iconSettings: {
        marginLeft: '1%',
        marginRight: '5%',
    },
    logOutBtnTitleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left',
        marginLeft: '17%',
        marginTop: '10%',
        marginBottom: '3%',
        fontSize: 19, 
    },
    logOutBtnText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'left'
    },
    logOutBtn: {
        width: '107%',
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        marginLeft: '-4%',
        marginBottom: '3%',
        justifyContent: 'center',
        backgroundColor: '#BB1313',
        color: '#FFFFFF'
    },
    
});
export default Settings;