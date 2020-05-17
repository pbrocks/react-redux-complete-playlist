import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Harvey from './components/Harvey'
import Contact from './components/Contact'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/harvey' component={Harvey} />
					<Route path='/contact' component={Contact} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
