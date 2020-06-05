import React from "react";
import {TableBase} from "./TableBase";
import {myStatementData} from "../../../my-statement-data";



export function Table([showDate,showTime,showType,showIncome,showExpenditure]) {

    const [showNewType, setNewType] = React.useState(true);

    const sortType = () => {
        setNewType( myStatementData.sort(function (a,b) {
            let typeA  = a.type.toLowerCase(), typeB = b.type.toLowerCase();

            if(typeA < typeB) return -1;
            if(typeA > typeB) return 1;

            return 0;
        }));
    }

    const select = document.querySelector('select');

    select.addEventListener('change', function () {

        switch (this.value) {

            case 'по типу':
            {sortType()} break;

            default:
        }

    })




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

        <select onChange = ''>
            <option value = "без группировки"> без группировки </option>
            <option value = "по дате"> по дате </option>
            <option value = 'по типу'> по типу </option>
            <option value = "по доходу"> по доходу </option>
            <option value = "по расходу"> по рассходу </option>
        </select>

        {TableBase([showDate,showTime,showType,showIncome,showExpenditure])}

    </>
);
}
