import { Link } from 'react-router-dom';
import classes from './ButtonLight.module.css';

export default function ButtonLight({children, path}) {
  return (
    <Link className={classes.btn} to={path}>{children}</Link>
  );
}