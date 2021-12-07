import React, { Component } from 'react';
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
			zoom: 1
		};
		this.mapContainer = React.createRef();
	}

	// componentDidMountMarker() {
	// 	const { lng, lat, zoom } = this.state;

	// 	const map = new mapboxgl.Map({
	// 		container: this.mapContainer.current,
	// 		style: 'mapbox://styles/mapbox/streets-v11',
	// 		center: [ lng, lat ],
	// 		zoom: zoom
	// 	});

	// 	map.on('move', () => {
	// 		this.setState({
	// 			lng: map.getCenter().lng.toFixed(4),
	// 			lat: map.getCenter().lat.toFixed(4),
	// 			zoom: map.getZoom().toFixed(2)
	// 		});
	// 	});

	// 	map.on('load', () => {
	// 		// Add an image to use as a custom marker
	// 		map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png', (error, image) => {
	// 			if (error) throw error;
	// 			map.addImage('custom-marker', image);
	// 			// Add a GeoJSON source with 2 points
	// 			map.addSource('points', {
	// 				type: 'geojson',
	// 				data: {
	// 					type: 'FeatureCollection',
	// 					features: [
	// 						{
	// 							type: 'Feature',
	// 							geometry: {
	// 								type: 'Point',
	// 								coordinates: [ 120.16, 30.29 ]
	// 							},
	// 							properties: {
	// 								title: 'HangZhou'
	// 							}
	// 						},
	// 						{
	// 							type: 'Feature',
	// 							geometry: {
	// 								type: 'Point',
	// 								coordinates: [ 116.38, 39.9 ]
	// 							},
	// 							properties: {
	// 								title: 'BeiJing'
	// 							}
	// 						},
	// 						{
	// 							type: 'Feature',
	// 							geometry: {
	// 								type: 'Point',
	// 								coordinates: [ -3.7, 40.41 ]
	// 							},
	// 							properties: {
	// 								title: 'Madrid'
	// 							}
	// 						},
	// 						{
	// 							type: 'Feature',
	// 							geometry: {
	// 								type: 'Point',
	// 								coordinates: [ 6.08, 52.51 ]
	// 							},
	// 							properties: {
	// 								title: 'Zwolle'
	// 							}
	// 						},
	// 						{
	// 							type: 'Feature',
	// 							geometry: {
	// 								type: 'Point',
	// 								coordinates: [ 6.08, 52.51 ]
	// 							},
	// 							properties: {
	// 								title: 'Zwolle'
	// 							}
	// 						},
	// 						{
	// 							type: 'Feature',
	// 							geometry: {
	// 								type: 'Point',
	// 								coordinates: [ 2.34, 48.85 ]
	// 							},
	// 							properties: {
	// 								title: 'Paris'
	// 							}
	// 						}
	// 					]
	// 				}
	// 			});

	// 			map.addLayer({
	// 				id: 'points',
	// 				type: 'symbol',
	// 				source: 'points',
	// 				layout: {
	// 					'icon-image': 'custom-marker',
	// 					'text-field': [ 'get', 'title' ],
	// 					'text-font': [ 'Open Sans Semibold', 'Arial Unicode MS Bold' ],
	// 					'text-offset': [ 0, 1.25 ],
	// 					'text-anchor': 'top'
	// 				}
	// 			});
	// 		});
	// 	});
	// }

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
			// Create a popup, but don't add it to the map yet.
			const popup = new mapboxgl.Popup({
				closeButton: false,
				closeOnClick: false
			});
			map.on('mouseenter', 'places', (e) => {
				// Change the cursor style as a UI indicator.
				map.getCanvas().style.cursor = 'pointer';

				// Copy coordinates array.
				const coordinates = e.features[0].geometry.coordinates.slice();
				const description = e.features[0].properties.title;

				// Ensure that if the map is zoomed out such that multiple
				// copies of the feature are visible, the popup appears
				// over the copy being pointed to.
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}

				// Populate the popup and set its coordinates
				// based on the feature found.
				popup.setLngLat(coordinates).setHTML(description).addTo(map);
			});

			map.on('mouseleave', 'places', () => {
				map.getCanvas().style.cursor = '';
				popup.remove();
			});
		});
	}

	render() {
		const { lng, lat, zoom } = this.state;
		return (
			<div>
				{/* <div className="sidebar">
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div> */}
				<div ref={this.mapContainer} className="map-container" />
				<div className="columns">
					<div className="column">
						<h2>My Travel Map</h2>
						<p className="description">
							Life is like a journey, I don't care about the destination, but the scenery and the mood at
							the view.
						</p>
						{/* <a href="#mail">go to mail</a> */}
						{/* <a id="mail" href="mailto:nowhere@mozilla.org">
							Send email to nowhere
						</a> */}
					</div>
				</div>
			</div>
		);
	}
}
