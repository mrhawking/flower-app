import classes from './Emblem.module.css';

export default function Emblem({children, isNew, isSale, positionClass}) {
  const cssClasses = `${classes.emblem} ${isNew && classes.emblemNew} ${isSale && classes.emblemSale} ${positionClass}`
  return (
    <span className={cssClasses}>{children}</span>
  );
}