import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from '../hooks/useShowToast'

const UserPage = () => {

    const [user, setUser ] = useState(null);

    const { username } = useParams();
    const showToast = useShowToast();

    useEffect(() => {
        const getUser = async () => {
            try {

                const res = await fetch(`/api/users/profile/${username}`);
                const data = await res.json();
                if (data.error){
                    showToast("Error", data.error, "error");
                    return;
                }
                console.log(data)
                setUser(data);
                
            } catch (error) {
                showToast("Error", error, "error");
            }   
        };

        getUser();

    }, [username, showToast]);

    if (!user){
        return null;
    }

    return(
        <>
        <UserHeader user={user}/>
        <UserPost likes={1200} replies={341} postImg='onust.jpeg' postTitle='Executive Recruitment Deadline Extended!!! Apply Now!'/>
        <UserPost likes={123} replies={121} postImg='/logo.png' postTitle='ohHRLL NANAAA'/>
        <UserPost likes={150} replies={461} postImg='/RehanHaider.JPG' postTitle='OH HELLL YEEAHAHHH'/>
        <UserPost likes={5030} replies={351} postTitle='wtf'/>
        </>
    )
};

export default UserPage