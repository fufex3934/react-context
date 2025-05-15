import { useAuth } from "../context/AuthContext";
const LoginButton = () => {
  const { user, login } = useAuth();
  if (user) return null;

  return <button onClick={() => login("Fufa")}>Login as Fufa</button>;
};

export default LoginButton;
