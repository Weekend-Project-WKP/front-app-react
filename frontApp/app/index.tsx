import { View, Text, Touchable, TouchableOpacity, StyleSheet, Image, ScrollView, Button, ImageBackground, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { supabase } from '../config/initSupabase';
import { Session } from '@supabase/supabase-js';
import Account from '../components/account';
import Auth from '../components/Auth';
import Home from './(tabs)/home';

const Login = () => {
    const [session, setSession] = useState<Session | null>(null)
    const faceoffImage = '../assets/images/faceoff.png';

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require(faceoffImage)} resizeMode="cover" style={styles.image}>
                {session && session.user ? <Home key={session.user.id} session={session} /> : <Auth />}
            </ImageBackground>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
});
//     const router = useRouter();
//     const faceoffImage = '../assets/images/faceoff.png';

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);

//     // Sign in with email and password
//     const onSignInPress = async () => {
//         setLoading(true);
//         const { error } = await supabase.auth.signInWithPassword({
//             email,
//             password,
//         });

//         if (error) Alert.alert(error.message);
//         setLoading(false);
//     };

//     // Create a new user
//     const onSignUpPress = async () => {
//         setLoading(true);
//         const { error } = await supabase.auth.signUp({
//             email: email,
//             password: password,
//         });

//         if (error) Alert.alert(error.message);
//         else Alert.alert('Check your email for the confirmation link to complete your account!');
//         setLoading(false);
//     };

//     return (
//         <View style={styles.container}>

//             <ImageBackground source={require(faceoffImage)} resizeMode="cover" style={styles.image}>
//                 <View style={styles.centerView}>
//                     <Text style={styles.text}>Login</Text>
//                     <View style={styles.inputView}>
//                         <TextInput
//                             autoCapitalize="none"
//                             style={styles.textInput}
//                             value={email}
//                             onChangeText={setEmail}
//                             placeholder="Email."
//                             placeholderTextColor="#003f5c"
//                         />
//                     </View>
//                     <View style={styles.inputView}>
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder="Password."
//                             placeholderTextColor="#003f5c"
//                             value={password}
//                             onChangeText={setPassword}
//                             secureTextEntry
//                         />
//                     </View>
//                     <TouchableOpacity>
//                         <Text style={styles.forgot_button}>Forgot Password?</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.loginBtn}>
//                         <View style={styles.loginView}>
//                             <Text style={styles.loginText}>Log in</Text>
//                             <Ionicons name={'arrow-forward-circle'} size={32} color={'#fff'} />
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={styles.signUpBtn}
//                         onPress={() => router.push("/register")}
//                     >
//                         <Text style={styles.signUpText}>Don't have an account? Sign up!</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.appleLoginBtn}>
//                         <View style={styles.loginView}>
//                             <Ionicons name={'logo-apple'} size={32} color={'#fff'} />
//                             <Text style={styles.appleLoginText}>Log in with Apple</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.facebookLoginBtn}>
//                         <View style={styles.loginView}>
//                             <Ionicons name={'logo-facebook'} size={32} color={'#fff'} />
//                             <Text style={styles.facebookLoginText}>Log in with Facebook</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.googleLoginBtn}>
//                         <View style={styles.loginView}>
//                             <Ionicons name={'logo-google'} size={32} color={'#000'} />
//                             <Text style={styles.googleLoginText}>Log in with Google</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 <Button onPress={() => router.push('/settings')} title="Settings" />

//                 {/* <Button onPress={() => router.push("/register")} title="Open Sign up" />
//                 <Link href={"/register"} asChild>
//                     <Button title="Open Sign up with Link" />
//                 </Link>

//                 <Link href={"/(tabs)/home"} asChild>
//                     <Button title="Open Login Tab" />
//                 </Link> */}
//             </ImageBackground>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     text: {
//         color: 'white',
//         fontSize: 36,
//         lineHeight: 84,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 35
//     },
//     centerView: {
//         alignItems: 'center',
//     },
//     inputView: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 15,
//         width: '70%',
//         height: 45,
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     textInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//     },
//     forgot_button: {
//         height: 30,
//         marginBottom: 30,
//         color: '#FFFFFF',
//         textDecorationLine: 'underline',
//         fontStyle: 'italic'
//     },
//     loginBtn: {
//         width: '70%',
//         borderRadius: 25,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#BB1313',
//         color: '#FFFFFF'
//     },
//     loginText: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//         marginLeft: '45%',
//         marginRight: '30%'
//     },
//     loginView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     signUpBtn: {
//         width: '70%',
//         borderRadius: 25,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#E48F8AFF',
//         marginTop: 20
//     },
//     signUpText: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//     },
//     appleLoginBtn: {
//         width: '70%',
//         borderRadius: 25,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#000000',
//         color: '#FFFFFF',
//         marginTop: 70
//     },
//     appleLoginText: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//         marginLeft: '10%',
//         marginRight: '23%'
//     },
//     facebookLoginBtn: {
//         width: '70%',
//         borderRadius: 25,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#466BEDFF',
//         color: '#FFFFFF',
//         marginTop: 20
//     },
//     facebookLoginText: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//         marginLeft: '10%',
//         marginRight: '15%'
//     },
//     googleLoginBtn: {
//         width: '70%',
//         borderRadius: 25,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#FFFFFF',
//         color: '#FFFFFF',
//         marginTop: 20
//     },
//     googleLoginText: {
//         color: '#000000',
//         fontWeight: 'bold',
//         marginLeft: '10%',
//         marginRight: '20%'
//     },
// });

export default Login;