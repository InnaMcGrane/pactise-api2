import cn from "classnames";
import styles from  "./search.module.scss"
import Input from "../Input/Input";

const Search = () => {
    return <div className={cn(styles["search"])}>
        <Input placeholder="name..." type="text" value=""/>
    </div>
}

export default Search;