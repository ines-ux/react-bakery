import React from 'react';
import Slider from './core/slider';
import Button from './core/button';
class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			price: 1
		};

		this.onChangePrice = this.onChangePrice.bind(this);
	}
	onSubmit(price, input) {
		// console.log('entrer onSubmit');
		// console.log('price', price);
		// console.log('input', input);
		this.props.onAdd(price, input);
	}
	onChangePrice(val) {
		this.setState({
			price: val
		});
		// je vérifie si le state.price est en train de changer à chaque fois
		// console.log('valeur du price', this.state.price);
	}

	render() {
		// console.log(' afficher les states du composant Add', this.state);
		return (
			<div>
				<input
					type="text"
					id="name"
					name="name"
					minlength="4"
					maxlength="8"
					size="10"
					// exécution du code, on a utiliser l'attribut onChange pour récupérer la valeur de l'input et la stocker dans la state de l'input
					// on a éxécuté la fonction
					onChange={(evt) => {
						this.setState({
							input: evt.target.value
						});
						// je vérifie si le state.input est en train de changer à chaque fois
						// console.log('valeur de state.input', this.state.input);
					}}
				/>
				<Slider min={1} max={10} value={3} onChange={this.onChangePrice} />
				<button
					onClick={() => {
						// Pour exécuter une fonction il faut mettre les parentheses devant la fonction
						this.onSubmit(this.state.price, this.state.input);
					}}
				>
					Valider
				</button>
			</div>
		);
	}
}

export default Add;
