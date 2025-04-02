import cn from "classnames";
import styles from "./avatar.module.scss"

function Avatar({img}) {
    return <div className={cn(styles["avatar"])}>
        <img className={cn(styles["avatar__img" ])}src={img}/>
    </div>
}

export default Avatar;