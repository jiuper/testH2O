import {Route, Routes} from "react-router";
import './index.scss'
import {useRecoilValue} from "recoil";
import {authorizationUser} from "../entities/User/model/userDate";
import {SingIn} from "./SingIn/SingIn";
import {Aside} from "../widgets/ui/Aside";
import {ROUTES} from "../shared/const/ROUTES";
import {Calendar} from "./Calendar";
import {Header} from "../widgets/ui/Header";
import {Profile} from "./Profile";
import {GeneralBDWork} from "./GeneralBDWork";


export const Routing = () => {

    const loginListsData = useRecoilValue(authorizationUser)

    return (
        <>
            {loginListsData
                ? (<div className='wrapper'>
                        <div className='container'>
                            <Aside/>
                            <div className='header-container'>
                                <Header/>
                                <div className='main-container'>
                                    <Routes>
                                        <Route path={ROUTES.CALENDAR}
                                               element={<Calendar title='Пометки для сотрудников'/>}/>
                                        <Route path={ROUTES.TASKS}
                                               element={<Calendar title='Задачи для сотрудников'/>}/>
                                        <Route path={ROUTES.BASKET}
                                               element={<Calendar title='База анкет сотрудников'/>}/>
                                        <Route path={ROUTES.WORKERS} element={<GeneralBDWork/>}/>
                                        <Route path={ROUTES.STATISTICS} element={<Calendar title='База сотрудников'/>}/>
                                        <Route path={ROUTES.GRAPH} element={<Calendar title='Календарь сотрудников'/>}/>
                                        <Route path={ROUTES.SETTING} element={<Calendar title='Настройки'/>}/>
                                        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : <SingIn/>}
        </>
    );
};
