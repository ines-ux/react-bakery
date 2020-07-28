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
		let url = `http://konexio.codiscovery.co/bakery/api/?q=${this.props.name}`;
		fetch(url).then((res) => res.json()).then((json) => {
			// console.log('componentDidMount card ', json);
			// console.log('valeur de la source', json.source);
			this.setState({
				source: json.source
			});
		});
	}

	render() {
		// console.log('card this.state.source', this.state.source);
		console.log('card this.props', this.props);

		return (
			<div>
				<button
					onClick={() => {
						this.props.onClick(this.props.name, this.props.price);
					}}
				>
					<img src={this.state.source} alt={'photo' + this.props.name} />
				</button>
			</div>
		);
	}
}

export default Card;
