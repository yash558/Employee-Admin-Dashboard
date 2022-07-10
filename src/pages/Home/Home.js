import React from 'react'
import FeatureInfo from '../../components/FeatureInfo/FeatureInfo'
import Chart from '../../components/charts/Chart'
import './Home.css'
import { userData } from '../../dummyData';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
const Home = () => {
    return (
        <div className='home'>
            <FeatureInfo />
            <Chart data={userData} title="Product Sales Analytics" grid dataKey="Product Sales" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>

        </div>
    )
}

export default Home