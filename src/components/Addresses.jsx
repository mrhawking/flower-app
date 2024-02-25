import { ADDRESSES } from "../data/addresses";
import classes from "./Addresses.module.css";

export default function Addresses() {
  return (
    <section className={classes.addresses}>
      <div className="container">
        <div className={classes.addressesInner}>
          <h2 className="title align-center">Цветочные центры</h2>
          <ul className={classes.addressesList}>
            {ADDRESSES.map((address) => <li key={address.id}>{address.address.station}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}