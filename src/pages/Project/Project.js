import React from 'react'
import './Project.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { projectRows } from '../../dummyData';
const Project = () => {

    const [data, setData] = useState(projectRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'project', headerName: 'Project', width: 200, renderCell: (params) => {
                return (
                    <div className="projectListItem">
                        <img className="projectListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },        
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Project Cost',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/projectlist/" + params.row.id}>
                            <button className="projectListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="projectListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className="projectList">
            <DataGrid
                rows={projectRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default Project