import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
    
    render(){
        return(
        <React.Fragment>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/todos"> todos </NavLink>
            <NavLink to="/post"> Post </NavLink>
         
            </React.Fragment>
        
        
        )
    }
}