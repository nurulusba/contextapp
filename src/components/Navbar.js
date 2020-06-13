import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
   // static contextType = ThemeContext;
    render() {
   // console.log(this.context);
        return (
      <AuthContext.Consumer> 
          {(Authcontext) => (
 <ThemeContext.Consumer>
 {(Themecontext) => {

const { isAuth, toggleAuth } = Authcontext;
const { isLightTheme, light, dark } = Themecontext;

const theme = isLightTheme ? light : dark;
const auth = isAuth ? "Logged In" : "Logged Out"
console.log(auth);

     return(
   <nav style={{ background: theme.ui, color: theme.syntax}}>
       <h1>Context App</h1>
       <div onClick={toggleAuth}>
           { auth }
       </div>
       <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
       </ul>
   </nav>
     )
 }}
</ThemeContext.Consumer>
          )}
     
      </AuthContext.Consumer>
        );
    }
}

export default Navbar;