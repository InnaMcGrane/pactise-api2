import cn from "classnames";
import styles from "./selectedUser.module.scss"

function SelectedUser({name}) {
    return <span className={cn(styles["selected-user"])}>{name}</span>
}

export default SelectedUser;