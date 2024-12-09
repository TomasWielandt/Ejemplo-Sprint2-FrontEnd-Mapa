import { Popup } from 'react-leaflet';

interface SitePopupProps {
  site: { position: [number, number]; name: string };
}

const SitePopup: React.FC<SitePopupProps> = ({ site }) => {
  return (
    <Popup>
      <strong>{site.name}</strong>
      <br />
      <span>
        Posición: {site.position[0]}, {site.position[1]}
      </span>
    </Popup>
  );
};

export default SitePopup;
