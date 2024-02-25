import classes from "./BreadCrumbs.module.css";

export default function BreadCrumbs({ children }) {
  return (
    <ul className={classes.breadCrumbs}>
      {children}
    </ul>
  );
}