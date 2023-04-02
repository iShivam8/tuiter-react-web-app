import "./index.css";
import UserEditProfile from "./edit-profile";
import {useSelector} from "react-redux";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <div className="row border rounded-2">
                <UserEditProfile key = {profile._id} profile = {profile}/>
            </div>
        </>
    );
};
export default EditProfileComponent;