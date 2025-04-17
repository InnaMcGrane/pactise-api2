import cn from "classnames";
import styles from "./card.module.scss"
import Avatar from "../Avatar/Avatar";

function Card({ id, name, img, multiUserHandler, active}) {
 return (
   <div className={cn(styles["card"], active ? styles["card--active"] : "")} onClick={() => multiUserHandler(id)}>
     <Avatar img={img} />
     <span className={cn(styles["card__name"])}>{name}</span>
   </div>
 );
}

export default Card;