export async function fetchAvailableFlowers() {
  const response = await fetch('https://flower-app-b21ff-default-rtdb.europe-west1.firebasedatabase.app/flowers.json');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Ошибка загрузки карточек букетов');
  }

  const availableFlowers = Object.values(data.flowers);

  return availableFlowers;
}

export async function fetchCurrentFlower(flowerId){
  const response = await fetch(`https://flower-app-b21ff-default-rtdb.europe-west1.firebasedatabase.app/flowers/flowers/${flowerId}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Ошибка загрузки');
  }
  return data;
}

export async function createOrder(order) {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });

  const data = response.json()

  if (!response.ok) {
    throw new Error('Ошибка при создании заказа');
  }

  return data;
}