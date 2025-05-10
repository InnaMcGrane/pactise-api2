import cn from "classnames"
import styles from "./menu.module.scss";

const Menu = ({children}) => {
    return <nav className={cn(styles["menu"])}>{children}</nav>
}

export default Menu