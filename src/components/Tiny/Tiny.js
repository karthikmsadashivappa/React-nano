import React from 'react';
import classes from './Tiny.css';
import TinyIngredients from './TinyIngredients/TinyIngredients';

const Tiny = (props) => {
	let transformedIngredients = Object.keys( props.ingredients )
			.map( igkey => {
				return [...Array(props.ingredients[igkey])].map(( _, i) => {
					return <TinyIngredients key={igkey + i} type={igkey} />;
				});
			})
			.reduce((arr, el) => {
				return arr.concat(el);
			}, []);


	if(transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients !</p>
	}

	return (
		<div className={classes.Tiny}>
			<TinyIngredients type="bread-top" />
			{transformedIngredients}
			<TinyIngredients type="bread-bottom" />
		</div>
	);
};

export default Tiny;