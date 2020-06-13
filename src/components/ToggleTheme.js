import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context;
        return(
        <button onClick={toggleTheme} style={{fontSize: '20px', color: 'white', background: 'purple', borderRadius: '10%'}}>Toggle Me</button>
        );
    }
}

export default ToggleTheme;