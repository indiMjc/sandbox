import React from 'react';
import Particles from 'react-particles-js';

const App = () => {
	return (
		<div className='app' style={{ background: 'black' }}>
			<Particles
				params={{
					particles: {
						number: {
							value: 50
						},
						size: {
							value: 3
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'repulse'
							}
						}
					}
				}}
			/>
		</div>
	);
};

export default App;
