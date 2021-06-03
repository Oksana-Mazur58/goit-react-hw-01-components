import React from "react";
import PropTypes from 'prop-types'

const Statistics = ({ title, stats}) => {
    return <section class="statistics">
   <h2>Statistics</h2>
        {title && (<h3 >{title}</h3>)}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
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