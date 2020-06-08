import React from 'react';
import {Table} from "./table/Table";
import {Checkbox} from "./Checkbox";

const initialState = {
    showDate: true,
    showTime: true,
    showType: true,
    showIncome: true,
    showOutcome: true,
};



export function Content() {

    const [{showDate, showTime, showType, showIncome, showOutcome}, setCheckboxState] = React.useState(initialState);
    const [hideCheckbox, setHiddenCheckbox] = React.useState(0);

    const onChangeCheck = e => {
       setHiddenCheckbox(e.target.selectedIndex);
    }

    const onChangeCheckbox = e => {
        const attr = e.target.getAttribute('dataId');
        const checked = e.target.checked;

        setCheckboxState(prevState => {
            const countChecked = Object.values(prevState).reduce((acc, el) => el ? acc + 1 : acc, 0);

            if (countChecked === 1 && !checked)
                return prevState;

            return {
                ...prevState,
                [attr]: checked,
            };
        });
    };

    return (
        <div className="App-content" onChange = {onChangeCheck}>

           { (hideCheckbox === 0) ?
            <div className="checkbox-transform" >

                <Checkbox
                    checked={showDate}
                    title={'Показать дату'}
                    onChange={onChangeCheckbox}
                    dataId={'showDate'}
                />

                <Checkbox
                    checked = {showTime}
                    title = {'Показать время'}
                    onChange = {onChangeCheckbox}
                    dataId = {'showTime'}
                />

               <Checkbox
                    checked = {showType}
                    title = {'Показать тип'}
                    onChange = {onChangeCheckbox}
                    dataId = {'showType'}
                />

                <Checkbox
                    checked = {showIncome}
                    title = {'Показать доход'}
                    onChange = {onChangeCheckbox}
                    dataId = {'showIncome'}
                />

                <Checkbox
                    checked = {showOutcome}
                    title = {'Показать расход'}
                    onChange = {onChangeCheckbox}
                    dataId = {'showOutcome'}
                />

            </div> : ''}

            <Table
                showDate = {showDate}
                showTime = {showTime}
                showType = {showType}
                showIncome = {showIncome}
                showOutcome = {showOutcome}
            />

        </div>
    );
}
