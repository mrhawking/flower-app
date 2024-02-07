export const countTotalQuantity = (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
}

export const countFullCatalogPrice = (items) => {
  return items.reduce((acc, flower) => {
    return acc + flower.price * flower.quantity;
  }, 0);
};

export const countFullSalePrice = (items) => {
  return items.reduce((acc, flower) => {
    const price = (flower.isSale ? (flower.price * 90 / 100) : flower.price).toFixed(0);
    return acc + price * flower.quantity;
  }, 0);
}