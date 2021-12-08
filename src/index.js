import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
	import App from './App';

reactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
