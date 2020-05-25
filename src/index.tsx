import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/common/Header'
import Home from './components/home/Home'
import ErrorBoundary from './components/common/ErrorBoundary'

import './css/index.css'

const App = () => (
	<ErrorBoundary>
		<Header/>
		<Home />
	</ErrorBoundary>
)

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
