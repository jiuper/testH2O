import classes from "../../../pages/GeneralBDWork/index.module.scss";
import {useEffect, useState} from "react";
import {USERS_EXAMPLE} from "../../../entities/User/const/mokDate";
import {IUserTableType} from "../../../entities/User/types/type";

interface IPagination {
    pageSize: IUserTableType[]
    handlePageSize: (val: IUserTableType[]) => void
}

export const Pagination = ({pageSize, handlePageSize}: IPagination) => {

    const [size, setSize] = useState('10')
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (!start) {
            handlePageSize(USERS_EXAMPLE.slice(0, +size))
            setStart(!start)
        }
    }, [handlePageSize, pageSize, size, start])

    return (
        <div className={classes.pagination}>
            <span>отображать на странице</span>
            <select value={size} onChange={(e) => {
                setSize(e.target.value)
                setStart(!start)
            }}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
        </div>
    );
};