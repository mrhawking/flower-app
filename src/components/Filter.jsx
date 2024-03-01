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
          <SliderRange minPrice={minPrice} maxPrice={maxPrice} onInputChange={handleInputPriceChange} onRangeChange={handleRangePriceChange} />
        </div>
        <div className={classes.sorting}>
          <BasicSelect sortType={sortType} name="sort" id="sort" onChange={handleSortingChange} />
        </div>
        <div className={classes.inputWrapper}>
          <ColorCheckboxes label="Со скидкой" ref={saleRef} name="sale" id="sale" />
          <ColorCheckboxes label="Новинка" ref={newRef} name="new" id="new" />
        </div>
        <button className={classes.formBtn} type="submit">Применить</button>
      </form>
    </section>
  );
}