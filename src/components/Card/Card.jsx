import cn from "classnames";
import styles from "./card.module.scss"
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

function Card({ id, name, img, multiUserHandler }) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active)
    multiUserHandler(id)
  }

 return (
   <div className={cn(styles["card"], active ? styles["card--active"] : "")} onClick={clickHandler}>
     <Avatar img={img} />
     <span className={cn(styles["card__name"])}>{name}</span>
   </div>
 );
}

export default Card;