import {myStatementData} from "../../../my-statement-data";
import React from "react";

export function TableBase({showDate,showTime,showType,showIncome,showOutcome}) {

    const formatMonth = (month) => month < 10 ? '0' + month : month;
    const formatTime = (time) => time < 10 ? '0' + time : time;

    return (
    <div className="For-base-table">
        <table className="Table-base">
            {myStatementData.map(el => {

                const tableTime =  formatTime(new Date(el.date).getHours()) + ':' + formatTime(new Date(el.date).getMinutes()) + ':' + formatTime(new Date(el.date).getSeconds());
                const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
                return (
                    <tr>
                        {showDate && <td>
                            {tableDate}
                        </td>}
                        {showTime && <td>
                            {tableTime}
                        </td>}
                        {showType && <td>
                            {el.type}
                        </td>}
                        {showIncome && <td className={'green'}>
                            {el.amount > 0 ? el.amount : ''}
                        </td>}
                        {showOutcome && <td className={'red'}>
                            {el.amount < 0 ? -el.amount : ''}
                        </td>}
                    </tr>
                )
            })}
        </table>
    </div>
)
}
