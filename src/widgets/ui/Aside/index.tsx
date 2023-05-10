import {NavBar} from "../NavBar";
import LOGO from '../../../shared/assets/Images/Logo.svg'
import classes from './index.module.scss'
import {ROUTES} from "../../../shared/const/ROUTES";
import Calendar from "../../../shared/assets/Images/Calendar.svg";
import Tasks from "../../../shared/assets/Images/Tasks.svg";
import Basket from "../../../shared/assets/Images/Basket.svg";
import Workers from "../../../shared/assets/Images/Worket.svg";
import Statistics from "../../../shared/assets/Images/Statitics.svg";
import Graph from "../../../shared/assets/Images/Graph.svg";
import Setting from "../../../shared/assets/Images/Setting.svg";
import {IAsideType} from "./type";


export const Aside = () => {

    const listsLinks: IAsideType[] = [
        {href: ROUTES.CALENDAR, icon: Calendar},
        {href: ROUTES.TASKS, icon: Tasks},
        {href: ROUTES.BASKET, icon: Basket},
        {href: ROUTES.WORKERS, icon: Workers},
        {href: ROUTES.STATISTICS, icon: Statistics},
        {href: ROUTES.GRAPH, icon: Graph},
        {href: ROUTES.SETTING, icon: Setting},
    ]
    return (
        <aside className={classes.aside}>
            <div className={classes.logo}>
                <img src={LOGO} alt='logo'/>
            </div>
            <NavBar listsLinks={listsLinks}/>
        </aside>
    );
};
