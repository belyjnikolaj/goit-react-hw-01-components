import PropTypes from 'prop-types';
import css from './Transactions.module.css';

const Transactions = ({items}) => {
    return (
        <tbody className={css.tbody}>
            
            {items.map(transactionData => {
                const { id, type, amount, currency } = transactionData;
                return (
                    <tr className={css.tr} key={id}>
                        <td className={css.td}>{type}</td>
                        <td className={css.td}>{amount}</td>
                        <td className={css.td}>{currency}</td>
                    </tr>
                )})}
        </tbody>
    )
}
Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Transactions;