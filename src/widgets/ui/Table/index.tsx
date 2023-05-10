import classes from './index.module.scss'
import {TableHeader} from "../../../shared/ui/TableHeader";
import {TableBody} from "../../../shared/ui/TableBody";

export const Table = () => {

    return (
        <div className={classes.table}>
            <TableHeader/>
            <TableBody/>
        </div>
    );
};