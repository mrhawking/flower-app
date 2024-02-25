export async function fetchAvailableFlowers(query) {
  let url = 'https://flower-app-b21ff-default-rtdb.europe-west1.firebasedatabase.app/flowers.json';
  if (query) {
    const params = new URLSearchParams(query);
    url = `${url}?${params.toString()}`
  }

  console.log(url)
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Ошибка загрузки карточек букетов');
  }

  const availableFlowers = Object.values(data);

  return availableFlowers;
}

export async function fetchFlower(flowerId){
  const response = await fetch(`https://flower-app-b21ff-default-rtdb.europe-west1.firebasedatabase.app/flowers/${flowerId}.json`);
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