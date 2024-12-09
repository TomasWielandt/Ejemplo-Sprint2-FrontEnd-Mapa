import { Marker } from 'react-leaflet';
import SitePopup from './SitePopup';

interface MarkerListProps {
  sites: { position: [number, number]; name: string }[];
}

const MarkerList: React.FC<MarkerListProps> = ({ sites }) => {
  return (
    <>
      {sites.map((site, index) => (
        <Marker key={index} position={site.position}>
          <SitePopup site={site} />
        </Marker>
      ))}
    </>
  );
};

export default MarkerList;
