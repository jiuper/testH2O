import {useRecoilValue} from "recoil";
import {authorizationUser} from "../../../entities/User/model/userDate";
import {Picture} from "../../../shared/ui/Picture";
import defaultAvatar from "../../../shared/assets/Images/user-male.svg"
import bottom from "../../../shared/assets/Images/bottom.svg"
import {items} from "../../const/PROFILE_LINKS";
import './index.scss'
import {ButtonIcon} from "../../../shared/ui/ButtonIcon";
import {useState} from "react";
import {Link} from "../../../shared/ui/Link";


export const MenuAction = () => {


    const loginListsData = useRecoilValue(authorizationUser)
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className="header__profile" onClick={() => setActive(!active)}>
            <Picture src={loginListsData.iconUrl || defaultAvatar} classPrefix="vremanka_2"/>
            <div className="menu-drop__info">
                <span className="menu-drop__user">
                    {loginListsData.firstName}
                </span>
                <span className="menu-drop__status">
                    {`${loginListsData.profession}`}
                </span>
            </div>
            <ButtonIcon
                classPrefix="menu-drop"
                src={bottom}
                handleAction={() => setActive(!active)}/>
            <div className={active ? 'menu-drop__list' : 'hidden'}>
                {
                    items.map(item =>
                        <Link
                            href={item.href}
                            classPrefix={"menu-drop__item"}
                            key={item.title}
                            title={item.title}
                        />
                    )
                }
            </div>
        </div>
    )
}