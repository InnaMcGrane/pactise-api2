import cn from "classnames"
import styles from "./link.module.scss";

const Link = ({url, children}) => {
    return <a className={cn(styles["link"])} href={url}>{children}</a>
}

export default Link