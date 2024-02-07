export async function fetchAvailableFlowers() {
  const response = await fetch('http://localhost:3000/flowers');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Ошибка загрузки карточек букетов');
  }

  return data;
}

export async function fetchFavoriteFlowers() {
  const response = await fetch('http://localhost:3000/favorite');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Ошибка загрузки карточек букетов');
  }

  return data;
}

export async function updateFavoriteFlowersIds(flowers) {
  const response = await fetch('http://localhost:3000/favorite', {
    method: 'PUT',
    body: JSON.stringify(flowers),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Ошибка отправки данных');
  }

  return data.message;
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