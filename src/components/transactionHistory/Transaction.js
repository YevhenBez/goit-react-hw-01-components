import PropTypes from 'prop-types';

const Transaction = (props) => {
    const { type, amount, currency } = props;
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

Transaction.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default Transaction;