import { json } from "react-router-dom";

export async function flowerLoader({params}) {
  const id = params.flowerId;

  const response = await fetch(`https://flower-app-b21ff-default-rtdb.europe-west1.firebasedatabase.app/flowers/${id}.json`);

  if(!response.ok) {
    throw json({message: 'Could not fetch details for selected event'},{status: 500});
  }

  return response;
}