import React, { Component } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './index.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhdGl0YW4iLCJhIjoiY2t3dnpybmliMW8yYzJxbHN2YzZjbTl0bCJ9.10T6Bwu36_Ir3xaAUZuG0A';

export default class Travel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lng: -3.7,
			lat: 40.41,
			zoom: 1
		};
		this.mapContainer = React.createRef();
	}
	componentDidMount() {
		const { lng, lat, zoom } = this.state;
		
		const map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ lng, lat ],
			zoom: zoom
		});
		const popup = new mapboxgl.Popup({ closeOnClick: false })
			.setLngLat([ -3.7, 40.41 ])
			.setHTML('<h1>I am here!</h1>')
			.addTo(map);

		map.on('move', () => {
			this.setState({
				lng: map.getCenter().lng.toFixed(4),
				lat: map.getCenter().lat.toFixed(4),
				zoom: map.getZoom().toFixed(2)
			});
		});
	}

	render() {
		const { lng, lat, zoom } = this.state;
		return (
			<div>
				<div className="sidebar">
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div>
				<div ref={this.mapContainer} className="map-container" />
				<div className="columns">
					<div className="column">
						<h2>Hello My Travel World!</h2>
						<p>
							Life is like a journey, I don't care about the destination, but the scenery and the mood at
							the view.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
