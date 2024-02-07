import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(
  function Input({ name, label, isValid, ...props }, ref) {
    return (
      <>
        <div className={classes.input}>
          <label htmlFor={name}>{label}</label>
          <input ref={ref} name={name} id={name} {...props} />
          {!isValid && <p className={classes.inputError}>Пожалуйста, проверьте поле</p>}
        </div>
      </>
    );
  }
);

export default Input;