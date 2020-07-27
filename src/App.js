import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/button';
class App extends React.Component {
	constructor(props) {
		// à chercher ce que signifie super(props)
		super(props);

		this.state = {
			activeTab: 'add',
			items: []
		};
		// Pour tous changement dans un autre fichier on utilise bind
		this.onClickTabAdd = this.onClickTabAdd.bind(this);
		this.onClickTabList = this.onClickTabList.bind(this);
		this.onClickTabPay = this.onClickTabPay.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onAdd(price, input) {
		// recuperer le state items et le stocker dans la variable items
		let items = this.state.items;
		// console.log('entrer onAdd');
		// console.log('price', price);
		// console.log('input', input);

		// creer l'obj produit
		let produit = {
			name: input,
			price: price
		};
		// ajouter l'obj produit au tableau items avec la méthode push
		items.push(produit);
		// console.log(' object item', item);
		// changer le state items avec le nouveau tableau items
		this.setState({
			items: items
		});
	}

	onClickTabAdd() {
		console.log('entrer onClickTabAdd');
		this.setState({
			activeTab: 'add'
		});
		console.log('this onClickTabAdd', this.state.activeTab);
	}
	onClickTabList() {
		console.log('entrer onClickTabList');

		this.setState({
			activeTab: 'list'
		});
		console.log('this onClickTabAdd', this.state.activeTab);
	}
	onClickTabPay() {
		console.log('entrer onClickTabPay');
		this.setState({
			activeTab: 'pay'
		});
		console.log('this onClickTabAdd', this.state.activeTab);
	}

	render() {
		console.log('app this.state', this.state.items);
		return (
			<div>
				<p>
					l'affichage du state activTab
					{this.state.activeTab}
				</p>
				{/* si on met les parentheses apres la fonction onclicktabadd, elle sera exécuté vu que le but n'est pas de l'éxécu */}
				{/* ter alors on ne l'a met pas */}
				<Button children="Add" onClick={this.onClickTabAdd} />
				<Button children="List" onClick={this.onClickTabList} />
				<Button children="Pay" onClick={this.onClickTabPay} />
				{/* POUR PASSER UNE METHODE A UN COMPOSANT IL FAUT DANS LAPPELLE DU COMPOSANT CREER UN ATTRIBUT ET LUI DONNER LA VALEUR NECESSAIRE */}
				{/* Pour notre ex: on a passé la méthode onAdd */}
				<Add onAdd={this.onAdd} />

				{/* "this veut dire la class" this.onAdd dans cette class on va utiliser la methode  onAdd */}
				<List items={this.state.items} />
				<Pay />
			</div>
		);
	}
}

export default App;
