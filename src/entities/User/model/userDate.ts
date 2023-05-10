import {atom, selector} from "recoil";
import {USERS_LISTS} from "../const/mokDate";
import {IUserType} from "../types/type";

export const userDateForAuthorization = atom<{ login: string, password: string } | null>({
    key: 'userDate',
    default: null
})


export const authorizationUser = selector<IUserType>({
    key: 'authorizationUser',
    get: ({get}) => {
        const userDate = get(userDateForAuthorization);
        return USERS_LISTS.filter(user => user.password === userDate?.password && user.login === userDate?.login)[0]
    },
});