interface ICalendar {
    title: string
}

export const Calendar = ({title}: ICalendar) => {
    return (
        <div>
            <span style={{fontSize: 32}}>
                {title}
            </span>
            <div>Страница в разработке</div>
        </div>
    );
}
