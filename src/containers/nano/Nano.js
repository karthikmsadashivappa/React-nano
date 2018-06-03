import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Tiny from '../../components/Tiny/Tiny';

class Nano extends Component {
	state = {
		ingredients: {
			cheese: 0,
			salad: 0,
			bacon: 0
		}
	}
	render(){
		return(
			<Aux>
				<Tiny ingredients={this.state.ingredients}/>
				<div>Build Controls</div>
			</Aux>
		);
	}
}

export default Nano;