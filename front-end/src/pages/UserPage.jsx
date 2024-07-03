import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost";

const UserPage = () => {
    return(
        <>
        <UserHeader/>
        <UserPost likes={1200} replies={341} postImg='RehanHaider.JPG' postTitle='MAH BRUH'/>
        <UserPost likes={123} replies={121} postImg='/logo.png' postTitle='ohHRLL NANAAA'/>
        <UserPost likes={150} replies={461} postImg='/RehanHaider.JPG' postTitle='OH HELLL YEEAHAHHH'/>
        <UserPost likes={5030} replies={351} postTitle='wtf'/>
        </>
    )
};

export default UserPage