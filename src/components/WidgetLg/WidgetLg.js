import React from 'react'
import './WidgetLg.css'
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg" >
      <h3 className="widgetLgTitle">
        Latest projects
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Project Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetLgImg' />
            <span className='widgetLgName'>Suryash Kumar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Rs 50,000</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetLgImg' />
            <span className='widgetLgName'>Suryash Kumar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Rs 50,000</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetLgImg' />
            <span className='widgetLgName'>Suryash Kumar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Rs 50,000</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetLgImg' />
            <span className='widgetLgName'>Suryash Kumar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Rs 50,000</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>       
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='widgetLgImg' />
            <span className='widgetLgName'>Suryash Kumar</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Rs 50,000</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
      </table>
    </div >
  )
}

export default WidgetLg