import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context;
        return(
        <button onClick={toggleTheme} style={{fontSize: '20px', color: 'white', background: '#D3D3D3', borderRadius: '10%', outline: '0px'}}>Toggle Me</button>
        );
    }
}

export default ToggleTheme;