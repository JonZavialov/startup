import NavBar from "../navBar/NavBar"
import ProfileCard from "./ProfileCard"

function ProfileCardsContainer({data}){    
    return (
        <>
            < NavBar />
            <div id="profile-cards-container">
                {data.map((x) => (
                    <ProfileCard key={x.uuid} profileInfo={x}/>
                ))}
            </div>
        </>
    )
};

export default ProfileCardsContainer