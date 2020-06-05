import {myStatementData} from "../../../my-statement-data";
import React from "react";

export function TableBase([showDate,showTime,showType,showIncome,showExpenditure]) {
    const formatMonth = (month) => month < 10 ? '0' + month : month;
    const tableTime = str =>{
        let i = 0;
        while(i < str.length) {
            if(str[i] === 'T') break;
            i++;
        }
        return str.substring(i+1,str.length);
    }

    return (
    <div className="For-base-table">
        <table className="Table-base">
            {myStatementData.map(el => {

                const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();
                return (
                    <tr>
                        {showDate && <td>
                            {tableDate}
                        </td>}
                        {showTime && <td>
                            {tableTime(el.date)}
                        </td>}
                        {showType && <td>
                            {el.type}
                        </td>}
                        {showIncome && <td className={'green'}>
                            {el.amount > 0 ? '+' + el.amount : ''}
                        </td>}
                        {showExpenditure && <td className={'red'}>
                            {el.amount < 0 ? el.amount : ''}
                        </td>}
                    </tr>
                )
            })}
        </table>
    </div>
)
}
