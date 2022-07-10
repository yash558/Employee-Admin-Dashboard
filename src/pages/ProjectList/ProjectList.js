import React from 'react'
import './ProjectList.css'
import{projectData} from '../../dummyData'
import Chart from '../../components/charts/Chart'
import { Link } from 'react-router-dom'
import Publish from '@mui/icons-material/Publish'
const ProjectList = () => {
    return (
        <div className="project">
            <div className="productTitleContainer">
                <h1 className="productTitle">Project</h1>
                <Link to='/NewProduct'>
                    <button className='projectAddButton'>Create</button>
                </Link>
            </div>
             <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={projectData} dataKey="Project Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                 <div className="productInfoTop">
                    <img src="data:image/jpeg;base64,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" alt="" className="productInfoImg" />
                 <span className="productName">Apple Airpods</span>
            </div>
                 <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                   </div>  
                  <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">1234</span>
                   </div>  
                  <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                   </div>  
                  <div className="productInfoItem">
                    <span className="productInfoKey">in stock</span>
                    <span className="productInfoValue">no</span>
                   </div>  
                 </div>
                </div>
             </div>
             <div className="productBottom">
                  <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Apple Airpods' />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>                        
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='productUploading'/>
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}></input>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                  </form>
             </div>

        </div>
    )
}

export default ProjectList