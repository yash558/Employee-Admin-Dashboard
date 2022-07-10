import React from 'react'
import './FeatureInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeatureInfo = () => {
  return (
    <div className="featured">
        <div className='featuredItem'>
            <span className="featureTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featureMoney">₹ 21 cr</span>
                <span className="featureMoneyRate">+2.4 <ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last Year</span>
        </div>
        <div className='featuredItem'>
            <span className="featureTitle">Projects</span>
            <div className="featuredMoneyContainer">
                <span className="featureMoney">234</span>
                <span className="featureMoneyRate">+1.4 <ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last Year</span>
        </div>
        <div className='featuredItem'>
            <span className="featureTitle">Employee</span>
            <div className="featuredMoneyContainer">
                <span className="featureMoney">10,000</span>
                <span className="featureMoneyRate">-2.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last Year</span>
        </div>
    </div>
  )
}

export default FeatureInfo