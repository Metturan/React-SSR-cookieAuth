import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I rock here</div>
			<button onClick={() => console.log('hi there')} >Press Me</button>
		</div>
	)
}

export default {
	component: Home
};