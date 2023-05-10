import {useRecoilValue} from "recoil";
import {authorizationUser} from "../../entities/User/model/userDate";
import './index.scss'
import {ProfileList} from "../../entities/User/ui/ProfileList";


export const Profile = () => {

    const loginListsData = useRecoilValue(authorizationUser)

    return (
        <div className="profile">
            <div className="profile__title">
                <span>Личные данные</span>
                <div className="profile__edit">
                    <img src='https://e7.pngegg.com/pngimages/383/88/png-clipart-pencil-computer-icons-pen-cdr-text.png'
                         alt="ooPs"/>
                    <label>Редактирование</label>
                </div>
            </div>
            <div className="profile__body">
                {loginListsData && <ProfileList {...loginListsData} />}
            </div>
        </div>
    );
};