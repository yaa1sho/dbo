import React from 'react';
import {Table} from "./table/Table";

export function Content() {

    const [showDate, setShowDate] = React.useState(true);
    const [showType, setShowType] = React.useState(true);

    const onChangeDate = e => {
        setShowDate(e.target.checked);
    };
    const onChangeType = e => {
        setShowType(e.target.checked);
    }

    return (
        <div className="App-content">
            <input type="checkbox" onChange ={onChangeDate} title={'Показать дату'} checked={showDate}/>
            <input type="checkbox" onChange ={onChangeType} title={'Показать тип'} checked={showType}/>
            {Table([showDate,showType])}
        </div>
    );
}
