import classes from "../../../pages/GeneralBDWork/index.module.scss";
import {Button, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {tableEdit} from "../../../widgets/model/tableEdit";
import {useRecoilState} from "recoil";

interface IGroupPanel {
    count: number
    handleSearch: (val: string) => void
}

export const GroupPanel = ({count, handleSearch}: IGroupPanel) => {

    const [edit, setEdit] = useRecoilState(tableEdit)

    return (
        <>
            <div className={classes.panel__left}>
                <div className={classes.panel__count}><span className={classes.count}>{count}</span> контактов</div>
                <div className={classes.search}>
                    <Input onChange={(e) => handleSearch(e.target.value)}
                           placeholder="Поиск"
                           prefix={<SearchOutlined/>}
                    />
                </div>
            </div>

            <div className={classes.panel__right}>
                <Button onClick={() => {
                    setEdit(!edit)
                }}>Режим редактирования</Button>
            </div>
        </>
    );
};