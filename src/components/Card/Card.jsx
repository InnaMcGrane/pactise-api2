import cn from "classnames";
import styles from "./card.module.scss"
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

function Card({name, img}) {
    const [active, setActive] = useState(false)
    
    return <div className={cn(styles["card"], active ? styles["card--active"] : "")} onClick={() => setActive(!active)}>
			<Avatar img={img}/>
        <span className={cn(styles["card__name"])}>{name}</span>
    </div>
}

export default Card;