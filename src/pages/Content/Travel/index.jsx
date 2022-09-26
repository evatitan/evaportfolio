import React, { Component, Fragment } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './index.css';
import { places } from './places.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhdGl0YW4iLCJhIjoiY2w3bnU3cDMwMDdicTNubzE1bmp1b3o5NCJ9.iF0nA5sh1E619qs_z4_vlw';

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
						What I can learn from on the trip? I love to learn about various cultures, food and even the
						language. I also love to learn how each place is different from mine.
						<br />
						喜欢旅游，喜欢生活
					</p>
				</div>
			</Fragment>
		);
	}
}
