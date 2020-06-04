import React from "react";
import {myStatementData} from '../../../my-statement-data';
import {Header} from "../../header/Header";

export function Table([showDate,showType]) {
    const formatMonth = (month) => month < 10 ? '0' + month : month;
return (
    <table>
        <tr>
            {showDate && <th>
                Дата
            </th>}
            <th>
                Время
            </th>
            {showType && <th>
                Тип
            </th> }
            <th>
                Приход
            </th>
            <th>
                Расход
            </th>
        </tr>
    </table> , //не понимаю как разбить на две таблице , так чтобы они обе отображались
        <table className="test">

        {myStatementData.map(el => {

            const tableDate = new Date(el.date).getDate() + '.' + formatMonth(new Date(el.date).getMonth() + 1) + '.' + new Date(el.date).getFullYear();

            const tableTime = str =>{
                let i = 0;
                while(i < str.length) {
                    if(str[i] === 'T') break;
                    i++;
                }
                return str.substring(i+1,str.length);
            }

            return (
                <tr>
                    {showDate && <td>
                        {tableDate}
                    </td>}
                    <td>
                        {tableTime(el.date)}
                    </td>
                    {showType && <td>
                        {el.type}
                    </td>}
                    <td className={'green'}>
                        {el.amount > 0 ? '+' + el.amount : ''}
                    </td>
                    <td className={'red'}>
                        {el.amount < 0 ? el.amount : ''}
                    </td>
                </tr>
            )
        })}
        </table>
);
}
