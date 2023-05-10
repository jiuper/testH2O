import {IUserTableType} from "../../../entities/User/types/type";
import {Input} from "antd";

interface IModalEdit {
    lists: IUserTableType;
    onChangeUserDate: (title: string, value: string) => void
}

export const ModalEdit = ({lists, onChangeUserDate}: IModalEdit) => {
    const userDate = [
        {title: 'Имя', value: lists.name, column: 'name'},
        {title: 'Пол', value: lists.gender, column: 'gender'},
        {title: 'Телефон', value: lists.mobile, column: 'mobile'},
    ]
    return (
        <div className='modal'>
            <div className='modal-caption'>
                Редактирование
            </div>
            <div className='modal-items'>
                {
                    userDate.map((el, i) =>
                        <div key={i}>
                            <span>{el.title}</span>
                            <Input
                                value={el.value}
                                onChange={(e) => {
                                    onChangeUserDate(el.column, e.target.value)
                                }}/>
                        </div>)
                }
            </div>
        </div>
    );
};