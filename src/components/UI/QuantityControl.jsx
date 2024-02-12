import classes from './QuantityControl.module.css';

export default function QuantityControl( {onDecrease, onIncrease, item, cartInput, disabled, ...props} ) {
 
    return (
      <div className={classes.actions}>
        <button onClick={() => onDecrease()} disabled={disabled}>-</button>
        {cartInput ? (
          <input type="text" name="count" id="count" value={item.quantity} readOnly />
        ) : (
          <input type="text" name="count" id="count" {...props} readOnly/>
        )}
  
        <label className="visually-hidden" htmlFor="count">Количество товара</label>
        <button onClick={() => onIncrease()}>+</button>
      </div>
    );
  }