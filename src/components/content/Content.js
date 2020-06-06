import React from 'react';
import {Table} from "./table/Table";
import {myStatementData} from "../../my-statement-data";


export function Content() {

    const [showDate, setShowDate] = React.useState(true);
    const [showType, setShowType] = React.useState(true);
    const [showTime, setShowTime] = React.useState(true);
    const [showIncome, setShowIncome] = React.useState(true);
    const [showExpenditure, setShowExpenditure] = React.useState(true);

    const onChangeDate = e => {
        if (!(showTime || showType || showIncome || showExpenditure)) setShowDate(true);
        else
            setShowDate(e.target.checked);
    }
    const onChangeTime = e => {
        if (!(showType || showDate || showIncome || showExpenditure)) setShowTime(true);
        else
            setShowTime(e.target.checked);
    }
    const onChangeType = e => {
        if (!(showTime || showDate || showIncome || showExpenditure)) setShowType(true);
        else
            setShowType(e.target.checked);
    }
    const onChangeIncome = e => {
        if (!(showTime || showDate || showType ||showExpenditure)) setShowIncome(true);
        else
            setShowIncome(e.target.checked);
    }
    const onChangeExpenditure = e => {
        if (!(showTime || showDate || showType || showExpenditure)) setShowExpenditure(true);
        else
            setShowExpenditure(e.target.checked);
    }

    return (
        <div className="App-content">
            <div className="checkbox">

                <input type="checkbox"
                       onChange ={onChangeDate} title={'Показать дату'} checked={showDate} />
                <label htmlFor="checkbox__text">Дата</label>

                <input type="checkbox"
                       onChange ={onChangeTime} title={'Показать время'} checked={showTime}/>
                <label htmlFor="checkbox__text">Время</label>

                <input type="checkbox"
                       onChange ={onChangeType} title={'Показать тип'} checked={showType}/>
                <label htmlFor="checkbox__text">Тип</label>

                <input type="checkbox"
                       onChange ={onChangeIncome} title={'Показать доход'} checked={showIncome}/>
                <label htmlFor="checkbox__text">Доход</label>

                <input type="checkbox"
                       onChange ={onChangeExpenditure} title={'Показать расход'} checked={showExpenditure}/>
                <label htmlFor="checkbox__text">Расход</label>

            </div>

            {Table([showDate,showTime,showType,showIncome,showExpenditure])}

        </div>
    );
}
