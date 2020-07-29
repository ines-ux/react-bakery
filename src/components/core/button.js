import React from 'react';
class Button extends React.Component {
	render() {
		return (
			<button
				onClick={() => {
					this.props.onClick();
				}}
				style={{
					backgroundColor: this.props.isSelected ? 'blue' : 'grey'
				}}
			>
				{this.props.children}
			</button>
		);
	}
}
export default Button;
