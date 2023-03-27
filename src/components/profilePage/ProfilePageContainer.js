import { useParams } from "react-router-dom"
import getProfileFromUser from "../../firebase-utils/query/getProfileFromUser";
import { useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";

function ProfilePageContainer(){
    const { username } = useParams();
    const [data, updateData] = useState('');

    useEffect(() => {
        const getData = async () => {
            updateData(await getProfileFromUser(username)
                .catch(() => {
                    window.location.href = '/404';
                })
            );
        }
        getData();
    }, [username]);

    return (
        <>
            {
                !data && <p>Loading...</p>}
            {
                data && <ProfilePage data={data} />
            }
        </>
    )
}

export default ProfilePageContainer