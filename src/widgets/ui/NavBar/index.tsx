import {useNavigate} from "react-router-dom";
import './index.scss'
import {IAsideType} from "../Aside/type";
import {useRecoilState} from "recoil";
import {tabsDispatch, tabsIncrementDispatch} from "../../model/tabsReduser";

interface IAsideTypeProps {
    listsLinks: IAsideType[];
}

export const NavBar = ({listsLinks}: IAsideTypeProps) => {

    const href = useNavigate()
    const [activeClass, setActiveClass] = useRecoilState(tabsDispatch)
    const [index, setIndex] = useRecoilState<number>(tabsIncrementDispatch)

    return (
        <ul>
            {
                listsLinks.map((link, i) =>
                    <li
                        key={i}
                        onClick={() => {
                            href(link.href)
                            setActiveClass(link.href)
                            setIndex(i)
                        }}
                        className={`link ${activeClass === link.href || index === i ? 'active' : ''}`}
                    >
                        <img src={link.icon} alt={link.icon}/>
                    </li>)
            }
        </ul>
    );
};
