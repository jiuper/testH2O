import {FormAuth} from "../../widgets/ui/FormAuth/FormAuth";
import React, {useEffect, useState} from "react";
import {IFormDate} from "../../widgets/ui/FormAuth/FormAuth.type";
import './style.scss'
import {useSetRecoilState} from "recoil";
import {userDateForAuthorization} from "../../entities/User/model/userDate";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../shared/const/ROUTES";


export const SingIn = () => {

    const href = useNavigate()
    const [userDate, setUserDate] = useState<{ login: string, password: string } | null>(null)
    const setUserDateAtom = useSetRecoilState(userDateForAuthorization)

    const handleUserDate = (userDate: IFormDate) => {
        setUserDate(userDate)
    }

    useEffect(() => {
        if (userDate) {
            setUserDateAtom(userDate)
            href(ROUTES.CALENDAR)
        }


    }, [userDate])


    return (
        <div className='pageAuth'>
            <div className='pageAuth-caption'>
                <span>Авторизация</span>
            </div>
            <div className='pageAuth-form'>
                <FormAuth handleUserDate={handleUserDate}/>
            </div>
        </div>
    );
};