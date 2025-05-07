import cn from "classnames";
import styles from "./logo.module.scss";

const Logo = () => {
    return <a href="/" className={cn(styles["logo"])}><span className={cn(styles["logo__mark"])}>Super</span> Users</a>
}

export default Logo;