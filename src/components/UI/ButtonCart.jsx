import classes from './ButtonCart.module.css';

export default function ButtonCart({children, className, isClicked, ...props}) {
  const cssClasses = `${classes.button} ${className ?? ''} ${isClicked ? classes.clicked : ''}`;

  return (
    <button {...props} className={cssClasses}>{children}</button>
  );
}