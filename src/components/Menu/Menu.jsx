import cn from "classnames"
import styles from "./menu.module.scss";

const Menu = ({children}) => {
    return <nav className={cn(style["menu"])}>{children}</nav>
}

export default Menu