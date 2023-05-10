import {useNavigate} from "react-router-dom"
import {useSetRecoilState} from "recoil";
import {userDateForAuthorization} from "../../../entities/User/model/userDate";


interface ILink {
    href: string | undefined;
    title?: string;
    classPrefix?: string;
    children?: React.ReactNode;
}

export const Link = ({href = "", title, classPrefix, children}: ILink) => {

    const link = useNavigate()
    const setOut = useSetRecoilState(userDateForAuthorization)

    const withAction = (title?: string) => {

        switch (title) {
            case "Выход":
                setOut(null)
                localStorage.clear()
                link(href)
                break
            default:
                return link(href)
        }
    }

    return (
        <span className={classPrefix} onClick={() => withAction(title)}>
			{title}
            {children}
		</span>
    )
}
