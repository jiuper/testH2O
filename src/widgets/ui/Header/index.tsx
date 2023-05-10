import classes from './index.module.scss'
import {Navigation} from "../../../features/ui/Navigation";
import {MAIN_POINTS_MENU} from "../../const/MAIN_POINTS_MENU";
import {GroupButton} from "../../../shared/ui/GroupButton";
import {MenuAction} from "../MenuActions";
import {useRecoilValue} from "recoil";
import {tabsSliderDispatch} from "../../model/tabsReduser";

export const Header = () => {

    const position = useRecoilValue<number>(tabsSliderDispatch)


    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__menu}>
                    <div className={classes.header__navigate}>
                        <GroupButton/>
                    </div>
                    <div className={classes.header__points}>
                        <div className={classes.items} style={{transform: `translateX(${position}px)`}}>
                            <Navigation
                                classPrefix={classes.active__item}
                                links={MAIN_POINTS_MENU}/>
                        </div>
                        <div className={classes.border__line}></div>
                    </div>
                </div>
                <MenuAction/>
            </div>
        </header>
    );
};
