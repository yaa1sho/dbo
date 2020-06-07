import {myStatementData} from "../../../my-statement-data";
import React from "react";

export function GroupTable() {

    const groupedByYearData = myStatementData.reduce((acc, el) => {

        const year = new Date(el.date).getFullYear();

        if (acc.find(elem => elem.year === year)) {

            const target = acc.filter(el2 => el2.year === year)[0];

            (el.amount > 0) ? target.income += el.amount : target.outcome -= el.amount;

            return acc;
        } else {
            const newYear =
                {
                    year,
                    income: el.amount > 0 ? el.amount : 0,
                    outcome: el.amount < 0 ? el.amount : 0,
                };
            return [
                ...acc,
                newYear,
            ]
        }
    }, []);


    return (
        <div className="For-base-table">
            <table>
                {groupedByYearData.sort((el1, el2) => el1.year - el2.year).map(({year, income, outcome}) => {


                    return (
                        <tr className = "tr-groupTable">
                            {<td>
                                {year}
                            </td>}
                            <td className={'green'}>
                                {income.toFixed(2)}
                            </td>
                            <td className={'red'}>
                                {outcome.toFixed(2)}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}