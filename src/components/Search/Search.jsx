import cn from "classnames";
import styles from  "./search.module.scss"
import Input from "../Input/Input";

const Search = ({setSearchText, searchText}) => {
    return (
      <div className={cn(styles["search"])}>
        <Input placeholder="name..." type="text" value={searchText} handler={setSearchText} />
      </div>
    );
}

export default Search;