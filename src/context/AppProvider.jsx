import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import { AbilityProvider } from "./AbilityContext";
const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AbilityProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AbilityProvider>
    </AuthProvider>
  );
};
export default AppProvider;
