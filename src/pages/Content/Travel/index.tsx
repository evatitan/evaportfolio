import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import placesData from './data';
import './index.css';

// Fix Leaflet's default icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Travel = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current, {
      minZoom: 2, // Prevent zooming out too far
      maxZoom: 18, // Limit maximum zoom level
    }).setView([40.41, -3.7], 2.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add markers for places
    interface PlaceProperties {
      title: string;
      [key: string]: any;
    }

    interface PlaceGeometry {
      coordinates: number[];
      [key: string]: any;
    }

    interface Place {
      properties: PlaceProperties;
      geometry: PlaceGeometry;
      [key: string]: any;
    }

    (placesData.places as Place[]).forEach((place: Place) => {
      L.marker([place.geometry.coordinates[1], place.geometry.coordinates[0]])
        .bindPopup(place.properties.title)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="travel-section">
      <div ref={mapContainer} className="map-container" />
      <div className="travel-content">
        <h2>My Travel Journey</h2>
        <p>
          Exploring different cultures and places enriches my perspective. Each destination offers
          unique insights into local traditions, cuisine, and ways of life.
        </p>
        <p className="chinese-text">喜欢旅游，喜欢生活 - 在旅途中遇见更多美好</p>
      </div>
    </div>
  );
};

export default Travel;
