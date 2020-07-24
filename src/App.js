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

		this.onClickTabAdd = this.onClickTabAdd.bind(this);
		this.onClickTabList = this.onClickTabList.bind(this);
		this.onClickTabPay = this.onClickTabPay.bind(this);
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
				<Add />
				<List />
				<Pay />
			</div>
		);
	}
}

export default App;
