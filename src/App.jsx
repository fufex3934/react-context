import { useState } from "react";
import { AbilityProvider } from "./context/AbilityContext";
import Header from "./components/Header";
import LoginButton from "./components/LoginButton";
import PostActions from "./components/PostActions";

function App() {
  const [role, setRole] = useState("guest");

  return (
    <>
      <Header />
      <LoginButton />

      <div style={{ margin: "20px 0" }}>
        <label htmlFor="role-select">Select Role: </label>
        <select
          id="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="guest">Guest</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <AbilityProvider role={role}>
        <PostActions />
      </AbilityProvider>
    </>
  );
}

export default App;
