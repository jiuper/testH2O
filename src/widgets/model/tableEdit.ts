import {atom} from "recoil";
import {IUserTableType} from "../../entities/User/types/type";
import {USERS_EXAMPLE} from "../../entities/User/const/mokDate";

export const tableEdit = atom<boolean>({
    key: 'tableEdit',
    default: false
})

export const tableSearch = atom<IUserTableType[]>({
    key: 'tableSearch',
    default: USERS_EXAMPLE
})