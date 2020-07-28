import React from 'react';
import Card from './product/Card';
class Pay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			basket: [],
			total: 0,
			totalVat: 0,
			totalEcoTax: 0
		};

		this.onClickProduct = this.onClickProduct.bind(this);
	}

	onClickProduct(name, price) {
		console.log('entrer onClickProduct');
		console.log('price', price);
		console.log('name', name);
	}

	render() {
		return (
			<div>
				<p>
					total : {this.state.total}
					totalVat : {this.state.totalVat}
					totalEcoTax : {this.state.totalEcoTax}
				</p>
				{this.props.items.map(function(element) {
					return <Card name={element.name} price={element.price} onClick={this.onClickProduct} />;
				})}
			</div>
		);
	}
}

export default Pay;
