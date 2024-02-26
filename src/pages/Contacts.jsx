import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import classes from './Contacts.module.css';
import { ADDRESSES } from '../data/addresses';


export default function Contacts() {
  return (
    <section className={classes.contacts}>
      <div className="container">
        <BreadCrumbs>
          <li><Link to="/">Главная</Link></li>
          <span>&gt;</span>
          <li>Контакты</li>
        </BreadCrumbs>
        <h2 className="title">Контакты</h2>
        <div className={classes.contactsInner}>
          <MapContainer center={[55.75, 37.61]} zoom={10} scrollWheelZoom={false} className={classes.mapContainer}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {ADDRESSES.map(address => (
              <Marker key={address.id} position={[address.lat, address.lon]} icon={L.icon({
                iconUrl: '/leaflet/marker-icon.png',
                iconRetinaUrl: '/leaflet/marker-icon-2x.png',
                shadowUrl: '/leaflet/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
              })}>
                <Popup>{address.address.street}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
          <h3 className="text">Адреса и телефоны цветочных центров:</h3>
          <ul className={classes.contactsList}>
              {ADDRESSES.map(address => (
                <li key={address.id}>
                  {`${address.address.station}, ${address.address.street}`}
                  <span>{address.tel}</span>
                </li>
              ))}
          </ul>
          <p className="text">Время работы: с 8:00 до 22:00</p>
      </div>
    </section>
  );
}