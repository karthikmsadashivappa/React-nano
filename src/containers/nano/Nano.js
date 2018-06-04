import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Tiny from '../../components/Tiny/Tiny';
import BuildControls from'../../components/Tiny/BuildControls/BuildControls';

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
				<BuildControls />
			</Aux>
		);
	}
}

export default Nano;