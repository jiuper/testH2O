import classes from './index.module.scss'
import {GroupPanel} from "../../shared/ui/GroupPanel";
import {Table} from "../../widgets/ui/Table";
import {USERS_EXAMPLE} from "../../entities/User/const/mokDate";
import {useEffect, useState} from "react";
import {IUserTableType} from "../../entities/User/types/type";
import {Pagination} from "../../widgets/ui/Pagination";
import {useSetRecoilState} from "recoil";
import {tableSearch} from "../../widgets/model/tableEdit";

export const GeneralBDWork = () => {


    const [pageSize, setPageSize] = useState<IUserTableType[]>([])
    const setSearch = useSetRecoilState(tableSearch)

    useEffect(() => {
        setSearch(pageSize)
    }, [pageSize, setSearch])

    const handlePageSize = (val: IUserTableType[]) => {
        setPageSize(val)
    }

    const handleSearch = (val: string) => {
        setSearch(pageSize.filter(el => el.name.toLowerCase().includes(val)))
    }
    return (
        <div className={classes.general__page}>
            <div className={classes.caption}>
                <h3>Общая база сотрудников</h3>
            </div>
            <div className={classes.panel}>
                <GroupPanel count={USERS_EXAMPLE.length} handleSearch={handleSearch}/>
            </div>
            <Table/>
            <Pagination
                pageSize={pageSize}
                handlePageSize={handlePageSize}
            />
        </div>
    );
};