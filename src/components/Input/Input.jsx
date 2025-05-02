import cn from "classnames";
import styles from "./input.module.scss";

const Input = ({placeholder, type, value }) => {
    return <input className={cn(styles["input"])} value={value} type={type} placeholder={placeholder}/>
}

export default Input;