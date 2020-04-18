import React, { Component } from 'react';
import Ninjas from './Ninjas';
import lessonInfo from './lesson-info';
import AddNinja from './AddNinja'

class App extends Component {
	state = {
		ninjas: [
			{ name: 'Ryu', age: 30, belt: 'black', id: 1 },
			{ name: 'Yoshi', age: 20, belt: 'green', id: 2 },
			{ name: 'Crystal', age: 25, belt: 'pink', id: 3 },
			{ name: "Toshi", age: 28, belt: "orange", id: 4 },
		]
	}
	render() {
		return (
			<div className="App">
				<h1>{lessonInfo.title}</h1>
				<p>{lessonInfo.point}</p>
				<Ninjas ninjas={this.state.ninjas} />
				<AddNinja />
				<p id="output">Output</p>
				<div>
					<h4>Lesson Info</h4>
					<p><a href={lessonInfo.url} target="_blank">Lesson {lessonInfo.id}</a>&nbsp;
					{lessonInfo.description}</p>
					<h4>Lesson Comments</h4>
					<p>{lessonInfo.comments}</p>
				</div>
			</div>
		);
	}
}

export default App;
