import {INavigationType} from "./type";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {tabsDispatch, tabsIncrementDispatch} from "../../../widgets/model/tabsReduser";
import {useEffect} from "react";

export const Navigation = ({classPrefix, links}: INavigationType) => {

    const href = useNavigate()
    const [activeClass, setActiveClass] = useRecoilState(tabsDispatch)
    const [index, setIndex] = useRecoilState<number>(tabsIncrementDispatch)

    useEffect(() => {
        links.map((link, i) => i === index ? setActiveClass(link.href) : '')
    }, [index, activeClass, links, setActiveClass])

    return (
        <>
            {
                links.map(
                    (link, i) =>
                        <span className={`${activeClass === link.href || i === index ? classPrefix : ''}`}
                              key={i}
                              onClick={() => {
                                  href(link.href)
                                  setActiveClass(link.href)
                                  setIndex(i)
                              }}
                        >
                            {link.title}
                        </span>)
            }
        </>
    );
}
