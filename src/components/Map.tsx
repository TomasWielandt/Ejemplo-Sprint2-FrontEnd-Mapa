import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { sites } from '../config/sites'; // Importa el archivo de configuración TypeScript

// Solución para íconos de Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Componente para centrar el mapa al seleccionar un marcador
const CenterMap = ({ coords }: { coords: [number, number] | null }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, 15);
  }
  return null;
};

const Map = () => {
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-700">Mapa con Leaflet</h1>
      <div className="flex justify-center my-4">
        <select
          className="p-2 border rounded"
          onChange={(e) => {
            const selectedIndex = e.target.value;
            if (selectedIndex !== '') {
              const site = sites[Number(selectedIndex)];
              setSelectedCoords(site.position);
            } else {
              setSelectedCoords(null);
            }
          }}
        >
          <option value="">Selecciona un lugar</option>
          {sites.map((site, index) => (
            <option key={index} value={index}>
              {site.name}
            </option>
          ))}
        </select>
      </div>

      <MapContainer
        center={[-33.4489, -70.6693]} // Coordenadas de Santiago de Chile
        zoom={9} // Ajusta el nivel de zoom según lo que quieras mostrar
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Renderiza los marcadores a partir de la configuración */}
        {sites.map((site, index) => (
          <Marker key={index} position={site.position}>
            <Popup>
              <strong>{site.name}</strong><br />
              <span>Posición: {site.position[0]}, {site.position[1]}</span>
            </Popup>
          </Marker>
        ))}

        {/* Centrar el mapa cuando se selecciona un lugar */}
        <CenterMap coords={selectedCoords} />
      </MapContainer>
    </div>
  );
};

export default Map;
