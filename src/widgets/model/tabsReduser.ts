import {atom} from "recoil";

export const tabsDispatch = atom<string>({
    key: 'tabsDispatch',
    default: ''
})

export const tabsIncrementDispatch = atom<number>({
    key: 'tabsIncrementDispatch',
    default: 0
})

export const tabsSliderDispatch = atom<number>({
    key: 'tabsSliderDispatch',
    default: 0
})