import React, {Component} from "react";
import {TableBase} from "./TableBase";
import {myStatementData} from "../../../my-statement-data";


export function Table([showDate,showTime,showType,showIncome,showExpenditure]) {

    const [group, setGroup] = React.useState(true);


    const onChangeGroup = e => {
        switch (e.target.value) {
            case "without grouping":
                setGroup(e.target.value === true);
            case "by date" :
                setGroup(myStatementData.sort(function(a, b) {
                  let dateA=new Date(a.date), dateB=new Date(b.date)
                    return dateA-dateB
                 }))
                break;
            case "by type" :
                setGroup(myStatementData.sort(function (a,b) {
                    let typeA  = a.type.toLowerCase(), typeB = b.type.toLowerCase();

                    if(typeA < typeB) return -1;
                    if(typeA > typeB) return 1;

                    return 0;
                }))
                break;
            case "by income":
                setGroup(myStatementData.sort(function (a,b) {
                    return b.amount - a.amount;
                }))
                break;

            case "by expenditures":
                setGroup(myStatementData.sort(function (a,b){
                        return a.amount - b.amount;
                    }
                ))
                break;
        }
    }

return (
    <>
        <table className="Table-header">
                <tr>
                {showDate && <th>
                    Дата
                </th>}
                {showTime && <th>
                    Время
                </th>}
                {showType && <th>
                    Тип
                </th>}
                {showIncome && <th>
                    Доход
                </th>}
                {showExpenditure && <th>
                    Расход
                </th>}
                </tr>
        </table>

        <text>Группировать : </text>

        <select value={group} onChange={ e => onChangeGroup(e)} >
            <option value = "without grouping"> без группировки </option>
            <option value = "by date"> по дате </option>
            <option value = "by type"> по типу </option>
            <option value = "by income"> по доходу </option>
            <option value = "by expenditures"> по расходу </option>
        </select>

        {TableBase([showDate,showTime,showType,showIncome,showExpenditure])}

    </>
);
}
