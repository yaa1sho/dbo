import React, {Component} from "react";
import {TableBase} from "./TableBase";
import {GroupTable} from "./GroupTable";

export function Table({showDate,showTime,showType,showIncome,showOutcome}) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onChangeSelect = e => {
        setSelectedIndex(e.target.selectedIndex);
    }

return (
    <>
        <div className = "Full-table">
        <table className="Table-header">
            <tr>
                {(selectedIndex === 0) ? showDate && <th> Дата </th>
                :  <th> Год </th> }

                { (selectedIndex === 0) ? showTime  && <th> Время </th>
                    : '' }

                { (selectedIndex === 0) ?  showType  && <th> Тип </th>
                    : '' }

                {(selectedIndex === 0) ? showIncome && <th> Приход </th>
                :  <th> Приход </th> }

                {(selectedIndex === 0) ? showOutcome && <th> Расход </th>
                :  <th> Расход </th> }
            </tr>
        </table>

        <div className="styled-select">
            <select  onChange = {onChangeSelect}>
                <option value = "false"> без группировки </option>
                <option value = "true"> по дате </option>
            </select>
        </div>

        {  (selectedIndex === 0) ?
            (<TableBase
                showDate = {showDate}
                showTime = {showTime}
                showType = {showType}
                showIncome = {showIncome}
                showOutcome = {showOutcome} />)
            :  (<GroupTable/>)
        }
        </div>
    </>
);
}
