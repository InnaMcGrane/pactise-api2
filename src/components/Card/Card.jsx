import cn from "classnames";
import styles from "./card.module.scss"
import Avatar from "../Avatar/Avatar";

function Card({name, img}) {
    return <div className={cn(styles["card"])}>
			<Avatar img={img}/>
        <span className={cn(styles["card__name"])}>{name}</span>
    </div>
}

export default Card;