import React from 'react';
import specimen from '../../specimen.jpg';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: specimen
		};
	}

	componentDidMount() {
		let url = ' http://konexio.codiscovery.co/bakery/api/?q=croissant';
		fetch(url).then((res) => res.json()).then((json) => {
			console.log('componentDidMount card ', json);
			// this.setState({
			// 	source
			// });
		});
	}
	render() {
		return <div>Card</div>;
	}
}

export default Card;
