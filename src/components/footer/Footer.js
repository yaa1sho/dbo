import React from 'react';

export function Footer() {
    return (
        <footer className="App-footer">
           <a>
               <img src = "images/bank.png" alt=" Мой Банк"
               width={50} height={45} />
           </a>
            <text className="Footer-bank">
                Мой банк
            </text>
        </footer>
    );
}
