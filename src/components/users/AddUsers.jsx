import CustomButton from "../../custom/custombutton/CustomButton"
import CustomInput from "../../custom/custominput/CustomInput"
import Card from "../ui/Card";
import classes from "./AddUser.module.css"

const AddUsers = () => {
    const formSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="username">Username</label>
                <CustomInput type="text" placeholder="Username" />
                <label htmlFor="age">Age</label>
                <CustomInput type="number" placeholder="Age" />
                <CustomButton type="submit" >Add User</CustomButton>
            </form>
        </Card>
    )
}

export default AddUsers