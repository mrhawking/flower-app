import { useRef, useState } from 'react';
import ColorCheckboxes from './UI/ColorCheckboxes';
import BasicSelect from './UI/BasicSelect';
import SliderRange from './UI/SliderRange';
import classes from './Filter.module.css';

export default function Filter({ availableFlowers, onChangeFilter }) {
  const saleRef = useRef();
  const newRef = useRef();
  const [sortType, setSortType] = useState('default');
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  function handleRangePriceChange([min, max]) {
    setMinPrice(+min);
    setMaxPrice(+max);
  }

  function handleSortingChange(sortType) {
    setSortType(sortType);
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
      sort: sortType
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
          <SliderRange minPrice={minPrice} maxPrice={maxPrice} onInputChange={handleInputPriceChange} onRangeChange={handleRangePriceChange}/>
          {/* <div className={classes.range}>
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
          </div> */}
        </div>
        <div className={classes.sorting}>
          <BasicSelect sortType={sortType} name="sort" id="sort" onChange={handleSortingChange}/>
        </div>
        <div className={classes.inputWrapper}>
          <ColorCheckboxes label="Со скидкой" ref={saleRef} name="sale" id="sale" />
        </div>
        <div className={classes.inputWrapper}>
          <ColorCheckboxes label="Новинка" ref={newRef} name="new" id="new" />
        </div>
        <button className={classes.formBtn} type="submit">Применить</button>
      </form>
    </section>
  );
}