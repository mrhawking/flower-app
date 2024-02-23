import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from "./SliderRange.module.css";

export default function SliderRange({minPrice, maxPrice, onInputChange, onRangeChange}) {
  return (
    <div className={classes.range}>
      <label htmlFor="minPrice">от:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        value={minPrice}
        onChange={onInputChange}
      />
      <label htmlFor="maxPrice">до:</label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        value={maxPrice}
        onChange={onInputChange}
      />
      <div className={classes.sliderWrapper}>
        <Slider
          range
          min={1}
          max={10000}
          value={[minPrice, maxPrice]}
          onChange={onRangeChange}
          trackStyle={[{ backgroundColor: "#4bb45e" }]}
          handleStyle={[{
            borderColor: "#4bb45e",
            boxShadow: "none"
          }, {
            borderColor: "#4bb45e",
            boxShadow: "none"

          }]}
        />
      </div>
    </div>
  );
}