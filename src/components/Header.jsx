import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const {theme,toggleTheme} = useTheme();
  return (
    <header
    style={{
        background: theme === 'light' ? '#f4f4f4' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <h1>{theme === 'light' ? 'Light Mode':'Dark Mode'}</h1>
      <button 
      onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'Dark':'Light'}
      </button>
    </header>
  )
}

export default Header