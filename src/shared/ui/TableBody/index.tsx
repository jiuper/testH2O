import classes from "../../../widgets/ui/Table/index.module.scss";
import {IUserTableType} from "../../../entities/User/types/type";
import {useRecoilState, useRecoilValue} from "recoil";
import {tableEdit, tableSearch} from "../../../widgets/model/tableEdit";
import {ButtonIcon} from "../ButtonIcon";
import {useState} from "react";
import {Modal} from "antd";
import {ModalEdit} from "../../../features/ui/ModalEdit";

export const TableBody = () => {
    const edit = useRecoilValue(tableEdit)
    const [lists, setLists] = useRecoilState(tableSearch)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditInfo, setIsEditInfo] = useState<IUserTableType>(lists.filter(el => el.id === '1')[0]);

    const showModal = (id: string) => {
        setIsModalOpen(!isModalOpen);
        setIsEditInfo(lists.filter(el => el.id === id)[0])
    };

    const onChangeUserDate = (title: string, value: string) => {
        setIsEditInfo({...isEditInfo, [title]: value})
    }

    const okModal = (val: IUserTableType, index: number) => {
        setIsModalOpen(!isModalOpen);
        setLists(lists.map((el, i) => i === (index - 1) ? val : el))
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.table__body}>
            {
                lists.map(el =>
                    <div key={el.id} style={{display: "flex"}}>
                        {
                            edit ? <ButtonIcon
                                handleAction={() => showModal(el.id)}
                                classPrefix={classes.small__icon}
                                src="https://e7.pngegg.com/pngimages/383/88/png-clipart-pencil-computer-icons-pen-cdr-text.png"/> : <></>
                        }
                        <div className={classes.body__items}>
                            <span className={classes.item}>{el.id}</span>
                            <span className={classes.item}>{el.name}</span>
                            <span className={classes.item}>{el.idCount}</span>
                            <span className={classes.item}>{el.mobile}</span>
                            <span className={classes.item}>{el.gender}</span>
                            <span className={classes.item}>{el.dateHappy}</span>
                            <span className={classes.item}>{el.metro}</span>
                            <span className={classes.item}>{el.address}</span>
                            <span className={classes.item}>{el.bank}</span>
                            <span className={classes.item}>{el.numCard}</span>
                            <span className={classes.item}>{el.nationality}</span>
                            <span className={classes.item}>{el.idCard}</span>
                            <span className={classes.item}>{el.youGiven}</span>
                            <span
                                className={`${classes.item} ${Date.parse(el.validityIdCard.split('').slice(6).join('') +
                                    '-' + el.validityIdCard.split('').slice(0, 2).join('') +
                                    '-' + el.validityIdCard.split('').slice(3, 5).join(''))
                                < Date.now() ? `${classes.error}` : ''}`}>
                    {el.validityIdCard}</span>
                            <span className={classes.item}>{el.placeHappy}</span>
                            <span className={classes.item}>{el.addressSubscribe}</span>
                            <span className={classes.item}>{el.patent}</span>
                            <span className={classes.item}>{el.validityPatent}</span>
                            <span className={classes.item}>{el.SNILS}</span>
                            <span className={classes.item}>{el.IIN}</span>
                            <span className={classes.item}>{el.medicalBook}</span>
                            <span className={classes.item}>{el.specialization}</span>
                            <span className={classes.item}>{el.podrazdelenie}</span>
                            <span className={classes.item}>{el.decision}</span>
                            <span className={classes.item}>{el.source}</span>
                            <span className={classes.item}>{el.date}</span>
                            <span className={classes.item}>{el.note}</span>
                        </div>
                    </div>
                )
            }

            {
                isModalOpen && isEditInfo &&
                <Modal open={isModalOpen} onCancel={handleCancel} onOk={() => okModal(isEditInfo, +isEditInfo.id)}>
                    {
                        <ModalEdit
                            lists={isEditInfo}
                            onChangeUserDate={onChangeUserDate}
                        />
                    }
                </Modal>
            }
        </div>
    );
};