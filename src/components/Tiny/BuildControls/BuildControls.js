import React from 'react';
import classes from './BuildControls.css';

const BuildControls = (props) => (
	<div className={classes.BuildControl}>
		<div className={classes.label}>
			{props.label}
		</div>
		<button className={classes.Less}>Less</button>
		<button className={classes.More}>More</button>
	</div>
); 

export default BuildControls;