import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  return (
    <header
      style={{
        background: theme === "light" ? "#f4f4f4" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Hello,{user ? user.name : "Guest"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
      {user && <button onClick={logout}>logout</button>}
    </header>
  );
};

export default Header;
