import React from 'react';
import classes from './Tiny.css';
import TinyIngredients from './TinyIngredients/TinyIngredients';

const Tiny = (props) => {
	const transformedIngredients = Object.keys( props.ingredients )
			.map( igkey => {
				return [...Array(props.ingredients[igkey])].map(( _, i) => {
					return <TinyIngredients key={igkey + i} type={igkey} />;
				});
			});



	return (
		<div className={classes.Tiny}>
			<TinyIngredients type="bread-top" />
			{transformedIngredients}
			<TinyIngredients type="bread-bottom" />
		</div>
	);
};

export default Tiny;