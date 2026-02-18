import { supabase } from "../config/initSupabase";
export type AuthResult = { ok: true } | { ok: false; error: string };

export async function signOut(): Promise<AuthResult> {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Unknown sign out error" };
  }
}


export async function requestAccountDeletion(): Promise<AuthResult> {
  try {
    // TODO: Edge Function to delete user + related data
    await new Promise((r) => setTimeout(r, 400));
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Account deletion failed" };
  }
}