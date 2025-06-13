declare module 'mapbox-gl' {
  export interface MapMouseEvent {
    lngLat: { lng: number; lat: number };
    features?: Array<{
      geometry: {
        type: string;
        coordinates: number[];
      };
      properties: {
        title?: string;
        [key: string]: any;
      };
    }>;
  }

  interface MapLayerOptions {
    id: string;
    type: string;
    source: string;
    paint: {
      [key: string]: any;
    };
  }

  interface GeoJSONSource {
    type: 'geojson';
    data: {
      type: 'FeatureCollection';
      features: Array<{
        type: string;
        geometry: {
          type: string;
          coordinates: number[];
        };
        properties: {
          title: string;
          [key: string]: any;
        };
      }>;
    };
  }

  export default class mapboxgl {
    static accessToken: string;
    static Map: new (options: MapOptions) => Map;
    static Popup: typeof Popup;
  }

  interface MapOptions {
    container: HTMLElement | string;
    style: string;
    center: [number, number];
    zoom: number;
  }

  export class Map {
    constructor(options: MapOptions);
    getCanvas(): { style: { cursor: string } };
    getCenter(): { lng: number; lat: number };
    getZoom(): number;
    on(event: string, handler: (e: MapMouseEvent) => void): void;
    addSource(id: string, source: GeoJSONSource): void;
    addLayer(layer: MapLayerOptions): void;
  }

  export class Popup {
    constructor(options: { closeButton: boolean; closeOnClick: boolean });
    setLngLat(coords: number[]): this;
    setHTML(html: string): this;
    addTo(map: Map): this;
    remove(): void;
  }
}
