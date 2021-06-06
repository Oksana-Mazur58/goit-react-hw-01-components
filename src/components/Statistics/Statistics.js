import React from "react";
import PropTypes from 'prop-types'
import StatisticsStyle from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return <section className={StatisticsStyle.sections_statistics}>
    <h2 >Statistics</h2>
    {title && (<h3 className={StatisticsStyle.statistics_title}>{title}</h3>)}

    <ul className={StatisticsStyle.statistics_list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={StatisticsStyle.statistics_item} key={id}
          style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>
          <span className={StatisticsStyle.statistics_lable}>{label}</span>
          <span className={StatisticsStyle.statistics_percentage}>{percentage}%</span>
        </li>
      )

      )}



    </ul>
  </section>
}
Statistics.defaultProps = {
  title: ''
}


Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,

    }))
}
export default Statistics