import {ButtonIcon} from "../ButtonIcon";
import PREV from "../../assets/Images/Prev.svg";
import classes from "../../../widgets/ui/Header/index.module.scss";
import NEXT from "../../assets/Images/Next.svg";
import {useRecoilState, useRecoilValue} from "recoil";
import {tabsDispatch, tabsIncrementDispatch, tabsSliderDispatch} from "../../../widgets/model/tabsReduser";
import {MAIN_POINTS_MENU} from "../../../widgets/const/MAIN_POINTS_MENU";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

export const GroupButton = () => {

    const [index, setIndex] = useRecoilState(tabsIncrementDispatch)
    const activeClass = useRecoilValue(tabsDispatch)
    const [position, setPosition] = useRecoilState(tabsSliderDispatch)
    const [initial, setInitial] = useState<number>(0)
    const [isCheck, setIsCheck] = useState<boolean>(false)
    const href = useNavigate()

    const width = 140
    const allWidth = MAIN_POINTS_MENU.length * width

    const listsButton: { src: string, func: () => void }[] = [
        {src: PREV, func: () => handlePrev()},
        {src: NEXT, func: () => handleNext()}
    ]

    useEffect(() => {
        setInitial(index * width)
        setPosition(-initial)
    }, [index, initial, setPosition])

    useEffect(() => {
        if (isCheck) {
            MAIN_POINTS_MENU.map((el, i) => i === index ? href(activeClass) : '')
            setIsCheck(!isCheck)
        }
    }, [activeClass, href, index, isCheck])


    const handlePrev = useCallback(() => {
        index === 0
            ? setIndex(MAIN_POINTS_MENU.length - 1)
            : setIndex(prevState => prevState - 1)
        setIsCheck(!isCheck)
        position === 0 ? setPosition(-allWidth) : setPosition(position + width)
    }, [allWidth, index, isCheck, position, setIndex, setPosition])

    const handleNext = useCallback(() => {
        index === MAIN_POINTS_MENU.length - 1
            ? setIndex(0)
            : setIndex(prevState => prevState + 1)
        setIsCheck(!isCheck)
        position === -allWidth ? setPosition(0) : setPosition(position - width)
    }, [allWidth, index, isCheck, position, setIndex, setPosition])


    return (
        <>
            {
                listsButton.map((el, i) =>
                    <ButtonIcon
                        key={i}
                        handleAction={el.func}
                        src={el.src}
                        classPrefix={classes.button}
                    />)
            }
        </>
    );
};