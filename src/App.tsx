import React, {useEffect, useState} from 'react';
import './App.css';
import Content from "./app/content/Content";
import Header from "./app/header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
