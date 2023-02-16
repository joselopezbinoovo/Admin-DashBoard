import axios from "axios"
import React from "react"
import { useState,useEffect } from "react"
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Header from "../../components/Headers";
import Avatar from '@mui/material/Avatar'; 
import ProgressBar from 'react-bootstrap/ProgressBar';


const TableControlUser = () => {
  const styles = {
    progressBar: {
        height: 250,
        '& progress-bar': {
            backgroundColor: 'black'
        },
    }
}

/*   const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width:'70%',
    display:'flex',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'dark' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  })); */


  const [ usuarios, setUsuarios] = useState([]); 

  const getData = async () =>{
    axios.get('http://localhost:5000/odoo')
    .then( res => setUsuarios(res.data))
    .catch((err) => console.err(err));
  }
  useEffect(() => {
      getData()
  },[]) 

  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode)
    const columns = [
      {
        field: "empleado",
        headerName: "Empleado",
        flex: 1,
        width: 50,
        headerAlign: 'center',

        renderCell: (params) => {
          return (
            <>
              <Avatar  src={params.value.avatar} 
              style={{border:params.row.estado === "Oficina" ? "3px solid #56b499 " : params.row.estado=== "Remoto" ? "3px solid #c52222" : params.row.estado === 'PuestaMarcha' ? "3px solid #d0e624" : "3px solid #b8b8b8" , marginRight:"5px"}} />
              {params.value.username}
            </>
          );
        }
      },
/*       {
        field: "estado",
        headerName: "Estado",
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params) => {

          return ( 
            <>
            <Box width="10px" alignItems="flex-start" margin="10px 10px" height="10px" borderRadius="50%" backgroundColor={params.row.estado === "Oficina" ? "#56b499 " : params.row.estado=== "Remoto" ? "#c52222" : params.row.estado === 'PuestaMarcha' ? "#d0e624" : "#b8b8b8"}> </Box>
            {params.row.estado}
            </>
          )
        } */
        
      {
        field: "proyecto",
        headerName:"Planificado Hoy",
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        width: 200
      },{
        field:"horasHoy",
        headerName:"Dedicacion Ayer",
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        width: 50,
        renderCell: (params) => {
          return (

            <>
        
            <Typography>{params.row.horasHoy}</Typography>
            <ProgressBar style={{width:"60%",  height: "10", borderRadius:"80px",backgroundColor:"#e1e1e1"}}>
      <ProgressBar   style={{backgroundColor:"rgb(85, 182, 157)"}} now={(params.row.horasHoy * 100 / 8)} key={1} />
      <ProgressBar  variant="danger" now={10} key={3} />
          </ProgressBar>
         </>
          )
        }
      }
    ]

return(
  <Box m="20px" sx={styles.oficina}>
  <Header title="EMPLEADOS" subtitle="Lista de empleados de Meikit" />    
  <Box
    borderRadius={"16px"}
    m="40px 0 0 0"
    height="70vh"
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell[data-field='horasHoy']": {
        display:"flex",
        flexDirection:"column",
        justifyContent:"start"
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
        width: "50px"
      },
      "& .name-column--cell": {
        color: colors.greenAccent[300],
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none",
        borderTopLeftRadius:"16px",
        borderTopRightRadius:"16px"
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400],
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        borderBottomLeftRadius:"16px",
        borderBottomRightRadius:"16px",
        backgroundColor: colors.blueAccent[700],
      },
      "& .MuiCheckbox-root": {
        color: `${colors.greenAccent[200]} !important`,
      },
    }}
  >
    <DataGrid  sx={{ m: 2 }} pageSize={15} rows={usuarios} columns={columns} />
  </Box>
</Box>
)
}

export default TableControlUser
