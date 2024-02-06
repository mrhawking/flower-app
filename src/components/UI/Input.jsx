import classes from './Input.module.css';

export default function Input({name, label, ...props}) {
  return (
    <p className={classes.input}>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...props}/>
    </p>
  );
}