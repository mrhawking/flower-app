import {  useLoaderData } from 'react-router-dom';
import FlowerItem from '../components/FlowerItem';

export default function FlowerDetailsPage() {
  const currentFlower = useLoaderData();

  return (
    <FlowerItem currentFlower={currentFlower}/>
  );
}

