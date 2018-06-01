import React from 'react';
import classes from './Tiny.css';
import TinyIngredients from './TinyIngredients/TinyIngredients';

const Tiny = (props) => {
	return (
		<div className={classes.Tiny}>
			<TinyIngredients type="bread-top" />
			<TinyIngredients type="cheese" />
			<TinyIngredients type="meat" />
			<TinyIngredients type="bread-bottom" />
		</div>
	);
};

export default Tiny;