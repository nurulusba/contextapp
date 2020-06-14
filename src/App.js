import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/SognList'; 

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
      <Navbar />
      <BookList />
      <ToggleTheme />
      </AuthContextProvider>
      </ThemeContextProvider>
      <SongList />
    </div>
  );
}

export default App;
