import React, { Component, Fragment } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './index.css';
import { places } from './places.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhdGl0YW4iLCJhIjoiY2t3dnpybmliMW8yYzJxbHN2YzZjbTl0bCJ9.10T6Bwu36_Ir3xaAUZuG0A';

export default class Travel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lng: -3.7,
			lat: 40.41,
			zoom: 2.5
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

		map.on('move', () => {
			this.setState({
				lng: map.getCenter().lng.toFixed(4),
				lat: map.getCenter().lat.toFixed(4),
				zoom: map.getZoom().toFixed(2)
			});
		});

		map.on('load', () => {
			map.addSource('places', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: places
				}
			});

			map.addLayer({
				id: 'places',
				type: 'circle',
				source: 'places',
				paint: {
					'circle-color': '#4264fb',
					'circle-radius': 6,
					'circle-stroke-width': 2,
					'circle-stroke-color': '#ffffff'
				}
			});

			const popup = new mapboxgl.Popup({
				closeButton: false,
				closeOnClick: false
			});
			map.on('mouseenter', 'places', (e) => {
				map.getCanvas().style.cursor = 'pointer';

				const coordinates = e.features[0].geometry.coordinates.slice();
				const description = e.features[0].properties.title;

				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}

				popup.setLngLat(coordinates).setHTML(description).addTo(map);
			});

			map.on('mouseleave', 'places', () => {
				map.getCanvas().style.cursor = '';
				popup.remove();
			});
		});
	}

	render() {
		return (
			<Fragment>
				<div ref={this.mapContainer} className="map-container" />
				<div className="travel-page">
					<h2>My Travel Map</h2>
					<p>
						Life is like a journey, I don't care about the destination, but the scenery and the mood at the
						view.
					</p>
				</div>
			</Fragment>
		);
	}
}
