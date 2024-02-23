import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={classes.spinnerOverlay}>
      <div className={classes.spinnerInner}>
        <div className={classes.spinnerContainer} />
      </div>
    </div>
  );
};

export default Spinner;