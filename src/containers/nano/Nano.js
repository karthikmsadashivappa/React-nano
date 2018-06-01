import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Tiny from '../../components/Tiny/Tiny';

class Nano extends Component {
	render(){
		return(
			<Aux>
				<Tiny />
				<div>Build Controls</div>
			</Aux>
		);
	}
}

export default Nano;