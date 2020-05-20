import React from 'react'
import Header from './components/common/Header'
import Home from './components/home/Home'

import './css/index.css'

const App = () => {
    return (
        <>
            <Header/>
            <div className="container">
				<Home />
            </div>
        </>
    )
}

export default App
