import { useRef, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import classes from './Filter.module.css';

export default function Filter({ availableFlowers, onChangeFilter }) {
  const saleRef = useRef();
  const newRef = useRef();
  const sortRef = useRef();
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(5000);

  function handleRangePriceChange([min, max]) {
    setMinPrice(+min);
    setMaxPrice(+max);
  }

  function handleInputPriceChange(event) {
    const { name, value } = event.target;
    if (name === 'minPrice') {
      setMinPrice(+value);
    } else if (name === 'maxPrice') {
      setMaxPrice(+value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const searchSettings = {
      isSaleChecked: saleRef.current.checked,
      isNewChecked: newRef.current.checked,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sort: sortRef.current.value
    };

    let flowers = [...availableFlowers.current.value];

    if (searchSettings.isSaleChecked) {
      const filteredFlowers = flowers.filter(flower => flower.isSale === true)
      flowers = filteredFlowers;
    }

    if (searchSettings.isNewChecked) {
      const filteredFlowers = flowers.filter(flower => flower.isNew === true)
      flowers = filteredFlowers;
    }

    const updatedFlowers = flowers.filter(flower => {
      const actualPrice = flower.isSale ? (flower.price * 90 / 100) : flower.price
      return (
        actualPrice >= searchSettings.minPrice && actualPrice <= searchSettings.maxPrice
      )
    });

    updatedFlowers.sort((a, b) => {
      const actualPriceA = a.isSale ? (a.price * 90 / 100) : a.price;
      const actualPriceB = b.isSale ? (b.price * 90 / 100) : b.price;

      switch (searchSettings.sort) {
        case 'ascending':
          return actualPriceA - actualPriceB;
        case 'descending':
          return actualPriceB - actualPriceA;
        default:
          return;
      }
    });
    onChangeFilter(updatedFlowers);
  }

  return (
    <section className={classes.filters}>
      <form className={classes.filterForm} onSubmit={handleSubmit}>
        <h2 className="visually-hidden">Фильтрация товаров</h2>
        <div className={classes.priceFilter}>
          <span>Цена</span>
          <div className={classes.range}>
            <label htmlFor="minPrice">от:</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={minPrice}
              onChange={handleInputPriceChange}
            />
            <label htmlFor="maxPrice">до:</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={maxPrice}
              onChange={handleInputPriceChange}
            />
            <div className={classes.sliderWrapper}>
              <Slider
                range
                min={1}
                max={10000}
                value={[minPrice, maxPrice]}
                onChange={handleRangePriceChange}
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
        </div>
        <div className={classes.inputWrapper}>
          <input ref={saleRef} type="checkbox" name="sale" id="sale" />
          <label htmlFor="sale">Со скидкой</label>
        </div>
        <div className={classes.inputWrapper}>
          <input ref={newRef} type="checkbox" name="new" id="new" />
          <label htmlFor="new">Новинка</label>
        </div>
        <div className={classes.sorting}>
          <select ref={sortRef} name="sort" id="sort">
            <option value="default">По умолчанию</option>
            <option value="ascending">По возрастанию</option>
            <option value="descending">По убыванию</option>
          </select>
        </div>
        <button className={classes.formBtn} type="submit">Отправить</button>
      </form>
    </section>
  );
}