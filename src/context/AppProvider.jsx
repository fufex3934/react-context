import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};
export default AppProvider;
