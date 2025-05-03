import cn from "classnames";
import styles from "./input.module.scss";

const Input = ({placeholder, type, value, handler}) => {
    return <input className={cn(styles["input"])} value={value} type={type} placeholder={placeholder} onInput={(event) => handler(event.target.value)}/>
}

export default Input;