import React from "react";
import PropTypes from 'prop-types'
import Transaction from './Transaction.module.css'

const TransactionHistory = ({ transactions }) => (
  <table className={Transaction.table}>
    <thead>
      <tr className={Transaction.tableHead}>
        <th className={Transaction.tableRow}>Type</th>
        <th className={Transaction.tableRow}>Amount</th>
        <th className={Transaction.tableRow}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id} className={Transaction.tableItem}>
          <td className={Transaction.tableRow}>{type}</td>
          <td className={Transaction.tableRow}>{amount}</td>
          <td className={Transaction.tableRow}>{currency}</td>
        </tr>
      ))}


    </tbody>
  </table>
)

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired
    )
  )
}

export default TransactionHistory 