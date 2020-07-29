import React from 'react';
import Card from './product/Card';
class Pay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			basket: [],
			total: 0,
			totalTVA: 0,
			totalEcoTax: 0,
			totalAfterTax: 0
		};

		this.onClickProduct = this.onClickProduct.bind(this);
	}

	onClickProduct(name, price) {
		// console.log('entrer onClickProduct');
		// console.log('price', price);
		// console.log('name', name);
		let total = price;
		let totalEcoTax = 0.03;
		let totalTVA = 20 * total / 100;
		let totalAfterTax = total + totalEcoTax + totalTVA;

		this.setState({
			total: total,
			totalTVA: totalTVA,
			totalEcoTax: totalEcoTax,
			totalAfterTax: totalAfterTax
		});
	}

	render() {
		console.log('total', this.state.total);
		console.log('totalTVA', this.state.totalTVA);
		console.log('totalEcoTax', this.state.totalEcoTax);
		console.log('totalAfterTax', this.state.totalAfterTax);
		return (
			<div>
				<p>
					total : {this.state.total}
					totalTVA : {this.state.totalTVA}
					totalEcoTax : {this.state.totalEcoTax}
					totalAfterTax:{this.state.totalAfterTax}
				</p>
				{this.props.items.map((element) => {
					return <Card name={element.name} price={element.price} onClick={this.onClickProduct} />;
				})}
			</div>
		);
	}
}

export default Pay;
