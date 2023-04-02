import "./index.css";
import UserProfile from "./user-profile";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <div className="row border rounded-2">
                <UserProfile key = {profile._id} profile = {profile}/>
            </div>
        </>
    );
};
export default ProfileComponent;