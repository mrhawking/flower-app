import classes from './ButtonCart.module.css';

export default function ButtonCart({children, ...props}) {
  return (
    <button {...props} className={classes.button}>{children}</button>
  );
}