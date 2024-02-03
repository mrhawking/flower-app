import CatalogItem from './CatalogItem';
import classes from './catalogBlock.module.css';

export default function CatalogBlock({ flowers, favorites, onchangeFavorite }) {

  return (
    <div className={classes.catalogBlock}>
      <ul className={classes.catalogList}>
        {flowers.map((flower) => (
          <CatalogItem
            key={flower.id}
            onchangeFavorite={onchangeFavorite}
            isFavorite={favorites.some((favFlowerId) => flower.id === favFlowerId)}
            flower={flower}/>
        ))}
      </ul>
    </div>
  );
}
// export default function CatalogBlock({ flowers, favorites, onchangeFavorite }) {

//   return (
//     <div className={classes.catalogBlock}>
//       <ul className={classes.catalogList}>
//         {flowers.map((flower) => (
//           <CatalogItem
//             key={flower.id}
//             onchangeFavorite={onchangeFavorite}
//             isFavorite={favorites.some((favFlower) => flower.id === favFlower.id)}
//             flower={flower}/>
//         ))}
//       </ul>
//     </div>
//   );
// }