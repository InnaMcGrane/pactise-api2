import SelectedUser from "../SelectedUser/SelectedUser";
import cn from "classnames";
import styles from "./selectedUsersList.module.scss";

function SelectedUsersList() {
    return <div className={cn(styles["selected-users-list"])}>
        <SelectedUser name={'Michael Johnson'}/>
        <SelectedUser name={'Emily Johnson'}/>
        <SelectedUser name={'Johnson'}/>
        <SelectedUser name={'Michael Williams'}/>
        <SelectedUser name={'Emily Williams'}/>
        <SelectedUser name={'Emily Johnson'}/>
    </div>
}

export default SelectedUsersList;