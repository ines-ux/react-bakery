import React from 'react';
class List extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.items.map(function(element) {
						return (
							<li>
								{element.name}
								{element.price}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default List;
