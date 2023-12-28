import { View, Text, Touchable, TouchableOpacity, TouchableHighlight, Dimensions, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Profile = () => {
    const router = useRouter();
    const userImage = '../assets/images/GJ-Chillz.jpeg';
    
   {/*<Button title="Go back" onPress={() => router.back()} />*/}
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>

                <View style={styles.header2}>
                    <View>
                        <Text style={styles.headerText}>Profile</Text>
                    </View>
                </View>
            </View>

            <TouchableHighlight
                style = {styles.imageCircle}
                underlayColor = '#ccc'
                onPress = { () => alert('Upload an Image!?') } 
                >
                <Image source={require(userImage)} resizeMode='cover' style={styles.imageCircle2}>
                </Image>
            </TouchableHighlight>

            <View>
            <Text style={styles.profileGenTitleText}>Account</Text>
            
            <View style={styles.settingsView}>
                <View style={styles.iconSettings}>
                    <MaterialIcons name="date-range" size={32} color="black" />
                </View>
            <TextInput style={styles.accountText} value = "Date of Birth" editable = {false}/>
            </View>
            <View style={styles.settingsView}>
                <View style={styles.iconSettings}>
                    <MaterialIcons name="email" size={32} color="black" />
                </View>
                <TextInput style={styles.accountText} value = "Email/Username" editable = {false}/>
            </View>
            <View style={styles.settingsView}>
                <View style={styles.iconSettings}>
                    <MaterialIcons name="phone" size={32} color="black" />
                </View>
                <TextInput style={styles.accountText} value = "Phone" editable = {false}/>
            </View>
            <View style={styles.settingsView}>
                <View style={styles.iconSettings}>
                    <MaterialCommunityIcons name="onepassword" size={32} color="black" />
                </View>
                <TextInput style={styles.accountText} value = "Password" editable = {false}/> 
            </View>
           
            </View>

            <View>
            <Text style={styles.profileVerTitleText}>Verification</Text>
                <View style={styles.settingsView}>
                    <View style={styles.iconSettings}>
                        <Ionicons name="checkmark-circle-sharp" size={32} color="black" />
                    </View>
                    <TextInput style={styles.accountText} value = "Verify my Email" editable = {false}/> 
                </View>
                <View style={styles.settingsView}>
                    <View style={styles.iconSettings}>
                        <Ionicons name="checkmark-done-circle" size={32} color="black" />
                    </View>
                    <TextInput style={styles.accountText} value = "Verify my ID" editable = {false}/> 
                </View>
                <View style={styles.settingsView}>
                    <View style={styles.iconSettings}>
                        <Ionicons name="checkmark-circle-sharp" size={32} color="black" />
                    </View>
                    <TextInput style={styles.accountText} value = "Verify my Phone" editable = {false}/> 
                </View>
            </View>

            <View style={styles.logOutBtnTitleText} >
                <TouchableOpacity style={styles.logOutBtn}>
                    <View style={styles.settingsView}>
                        <Text style={styles.logOutBtnText}>Edit Profile</Text>
                        <Ionicons name="create" size={32} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0a5a5",
        marginBottom: '135%',
    },
    header: {
        flexDirection:"row",
        marginBottom: '1%',
        marginTop: '15%',
        marginLeft: '33%'
    },

    header2: {
        flex: 3
    },
    headerText: {
        color: 'white',
        marginLeft: '6.5%',
        fontSize: 36,   
        fontWeight: 'bold',
        justifyContent: 'flex-end'
    },
    profileVerTitleText: {
        color: '#000000',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left',
        marginTop: '2%',
        marginLeft: '11%',
        marginBottom: '3%',
        fontSize: 19, 
    },
    profileGenTitleText: {
        color: '#000000',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left',
        marginTop: '10%',
        marginLeft: '11%',
        marginBottom: '1%',
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
    accountText: {
        width: '70%',
        borderRadius: 15,
        height: 25,
        alignItems: 'center',
        marginLeft: '2%',
        marginBottom: '3%',
        marginTop: '4%',
        justifyContent: 'center',
       
    },
    settingsBtnText: {
        color: '#000000',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left'
    },
    iconSettings: {
        marginLeft: '20%',
        marginRight: '0%',
    },
    logOutBtnTitleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '66%',
        textAlign: 'left',
        marginLeft: '17%',
        marginTop: '5%',
        marginBottom: '3%',
        fontSize: 19, 
        alignItems: 'center'
    },
    logOutBtnText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '45%',
        textAlign: 'center'
    },
    logOutBtn: {
        width: '65%',
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        marginLeft: '-4%',
        marginBottom: '3%',
        justifyContent: 'center',
        backgroundColor: '#e0a5a5',
        color: '#FFFFFF'
    },



    image: {
   
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 100,
        height: 100
    },
    imageCircle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        marginLeft: '25%',
        backgroundColor:'#f00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCircle2: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor:'#f00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    
});
export default Profile;