import supabase from "../utils/supabase";

export default function AccountManagement() {
  return (
    <div>
      <h1>Account Management</h1>
      {/* Button for Logout, Style it dont change */}
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  );
}
