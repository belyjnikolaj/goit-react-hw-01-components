
import Transactions from '../transactions';
import React from 'react';
import css from './TransactionHistory.module.css';
const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.thead}>
                <tr className={css.tr}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>
            <Transactions items={items} />
            </table>
    )
}
export default TransactionHistory;