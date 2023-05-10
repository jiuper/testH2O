import {IButtonIconType} from "./type";

export const ButtonIcon = ({src, name, classPrefix, handleAction}: IButtonIconType) => {
    return (
        <button className={classPrefix} onClick={handleAction}>
            <img src={src} alt={src}/>
            {name}
        </button>
    );
};