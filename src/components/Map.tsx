import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { sites } from '../config/sites';
import MarkerList from './MarkerList';
import CenterMap from './CenterMap';
import SelectLocation from './SelectLocation';

const Map = () => {
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-700">Mapa con Leaflet</h1>
      <div className="flex justify-center my-4">
        <SelectLocation
          sites={sites}
          onSelect={(coords) => setSelectedCoords(coords)}
        />
      </div>
      <MapContainer
        center={[-33.4489, -70.6693]}
        zoom={9}
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerList sites={sites} />
        <CenterMap coords={selectedCoords} />
      </MapContainer>
    </div>
  );
};

export default Map;
