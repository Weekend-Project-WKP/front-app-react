import { useState, useEffect } from 'react'
import { supabase } from '../config/initSupabase';
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState('')
    const [website, setWebsite] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')

    useEffect(() => {
        if (session) getProfile()
    }, [session])

    async function getProfile() {
        setLoading(true);

        try {
            if (!session?.user?.id) {
            // Don’t alert here — just skip.
            return;
            }

            const { data, error, status } = await supabase
            .from("profiles")
            .select("username, website, avatar_url")
            .eq("id", session.user.id)
            .maybeSingle(); // avoids throw when row doesn't exist

            if (error) {
                // Show the real Supabase error message + status code
                Alert.alert("Profile load error", `${error.message} (status: ${status ?? "n/a"})`);
                return;
            }

            // If no profile row exists yet, don't alert — just show empty UI
            if (!data) {
                console.log("No profile row found yet for user:", session.user.id);
                setUsername("");
                setWebsite("");
                setAvatarUrl("");
                return;
            }

            setUsername(data.username ?? "");
            setWebsite(data.website ?? "");
            setAvatarUrl(data.avatar_url ?? "");
        } catch (e: any) {
            // Catch truly unexpected errors (network, runtime, etc.)
            Alert.alert("Unexpected error", e?.message ?? JSON.stringify(e));
        } finally {
            setLoading(false);
        }
    }


    async function updateProfile({
        username,
        website,
        avatar_url,
    }: {
        username: string
        website: string
        avatar_url: string
    }) {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')

            const updates = {
                id: session?.user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }

            const { error } = await supabase.from('profiles').upsert(updates)

            if (error) {
                throw error
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input label="Email" value={session?.user?.email} disabled />
            </View>
            <View style={styles.verticallySpaced}>
                <Input label="Username" value={username || ''} onChangeText={(text) => setUsername(text)} />
            </View>
            <View style={styles.verticallySpaced}>
                <Input label="Website" value={website || ''} onChangeText={(text) => setWebsite(text)} />
            </View>

            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title={loading ? 'Loading ...' : 'Update'}
                    onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
                    disabled={loading}
                />
            </View>

            <View style={styles.verticallySpaced}>
                <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
})