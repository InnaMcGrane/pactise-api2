import cn from "classnames";
import styles from "./usersList.module.scss"
import Card from "../Card/Card";

function UsersList({users}) {
    return <div className={cn(styles["users-list"])}>
        {users.map((user) => {
            return <Card name={user.firstName + ' ' + user.lastName} key={user.id} img={user.image}/>
        })}
    </div>
	}

export default UsersList;