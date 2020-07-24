import React from 'react';
import Slider from './core/slider';
class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			price: 1
		};

		this.onChangePrice = this.onChangePrice.bind(this);
	}

	onChangePrice(val) {
		this.setState({
			price: val
		});
	}

	render() {
		return (
			<div>
				<input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" />
				<Slider min={1} max={10} value={3} onChange={this.onChangePrice} />
			</div>
		);
	}
}

export default Add;
