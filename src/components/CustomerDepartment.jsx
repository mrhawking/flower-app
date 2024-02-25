import { MEMBERS } from '../data/service-department';
import classes from './CustomerDepartment.module.css';

function ServiceMember({ src, name, text }) {
  return (
    <li>
      <div className={classes.imgWrapper}>
        <img src={src} alt={name} />
      </div>
      <h4 className={classes.name}>{name}</h4>
      <p className={classes.text}>{text}</p>
    </li>
  );
}

export default function CustomerDepartment() {
  return (
    <section className={classes.department}>
      <div className="container">
        <h2 className="title">Отдел по работе с клиентами</h2>
        <ul className={classes.membersList}>
          {MEMBERS.map(member => (
            <ServiceMember key={member.id} src={member.src} name={member.name} text={member.text} />
          ))}
        </ul>
      </div>
    </section>
  );
}