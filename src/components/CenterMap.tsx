import { useMap } from 'react-leaflet';

interface CenterMapProps {
  coords: [number, number] | null;
}

const CenterMap: React.FC<CenterMapProps> = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, 15);
  }
  return null;
};

export default CenterMap;
