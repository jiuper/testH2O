import classes from "../../../widgets/ui/Table/index.module.scss";
import bottom from "../../assets/Images/bottom.svg";
import {Picture} from "../Picture";
import {TABLE_HEADER} from "../../const/TABLE_HEADER";
import {COLUMN_HEADER} from "../../const/COLUMN_HEADER";

export const TableHeader = () => {
    
    return (
        <div className={classes.table__header}>
            <div style={{display: "flex"}}>
                {
                    TABLE_HEADER.map(el =>
                        <span
                            className={classes.header__item}
                            key={el.name}
                            style={{gridTemplateColumns: el.size}}>
                                {el.name}
                        </span>)
                }
            </div>
            <div style={{display: "flex"}}>
                {
                    COLUMN_HEADER.map((el, i) =>
                        <div className={classes.header__item}
                             key={i}
                             style={{gridTemplateColumns: el.size}}
                        >
                                        <span className={classes.item}>
                                            {el.name}
                                            {
                                                el.src
                                                    ?
                                                    <Picture classPrefix={classes.button} src={bottom}/>
                                                    : <></>
                                            }
                                        </span>
                        </div>)
                }
            </div>
        </div>
    );
};