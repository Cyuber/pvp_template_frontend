import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cookieParser from '../cookieParser.js';
import { useEffect } from 'react';

export function Menu() {

    const navigate = useNavigate();
    
    useEffect(() => {
        if (cookieParser(document.cookie).user == "") {
            navigate("/log-in")
        }
    })

    const logout = () => {
        document.cookie = "user="
        document.cookie = "pass="
        console.log(document.cookie)
    }
    
    return (
        <div>
        <nav>
        <ul>
            <li> <Link to="/computer"> computer </Link> </li>
            <li> <Link to="/player-match"> player match </Link> </li>
            <li> <button onClick={logout}> logout </button> </li>
        </ul>       
        </nav>
        </div>
    )
}