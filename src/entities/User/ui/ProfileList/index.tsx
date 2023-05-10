import {Picture} from "../../../../shared/ui/Picture";
import avatar from '../../../../shared/assets/Images/face.svg'
import {IUserType} from "../../types/type";

export const ProfileList = ({
                                firstName,
                                lastName,
                                iconUrl,
                                profession,
                                login
                            }: IUserType) => {

    const profileList = [
        {title: "Имя", value: firstName},
        {title: "Фамилия", value: lastName},
        {title: "Специализация", value: profession},
        {title: "Email", value: login},
    ]

    return (
        <>
            <div className="avatar">
                <Picture src={avatar} classPrefix="avatar"/>
            </div>
            <div className="item">
                {
                    profileList.map(el =>
                        <div key={el.title}>{el.title}
                            <span>{el.value}</span>
                        </div>)
                }
            </div>
        </>
    )
}
