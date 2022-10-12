import { datadetails , table } from '../../utils/data'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Tables.module.scss'
const Tables = () => {
    const [data, setData] =useState([]);
    useEffect(() => {
        axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
        .then((response) => {
         const details = response.data
         setData(details)
                console.log(details)})
                .catch((error) => {
                    console.log(error)
                })
    },[])
    console.log(data.length)
  return (
   
    <div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.filter}>
                    <td className={styles.head}> <span>ORGANIZATION</span> 
                    <img src="./src/assets/filter-results-button.png" alt="" />
                    </td>
                    </th>
                    
                   
                    <th className={styles.filter}>
                    <td className={styles.head}><span>USERNAME</span>
                    <img src="./src/assets/filter-results-button.png" alt="" />
                    </td>
                   
                    </th>

                    <th className={styles.filter}>
                    <td className={styles.head}>
                        <span>EMAIL</span>
                    <img src="./src/assets/filter-results-button.png" alt="" />
                    
                    </td>
                    
                    </th>

                    <th className={styles.filter}>
                    <td className={styles.head}>
                        <span>PHONE</span>
                    <img src="./src/assets/filter-results-button.png" alt="" />
                    </td>
                    
                    </th>

                    <th className={styles.filter}>
                    <td className={styles.head}>
                        <span>
                        DATE
                        </span>
                    <img src="./src/assets/filter-results-button.png" alt="" />
                    </td>
                    </th>

                    <th className={styles.filter}>
                    <td className={styles.head}>
                        <span>
                        STATUS
                        </span>
                    <img src="./src/assets/filter-results-button.png" alt="" />
                    </td>
                    </th>
                    </tr>

                    </thead>
                    
                        <tbody>
                       
                            {data.map((data,id)=>{
                                return(
                                    
                                    <tr key={id}>
                                          
                                    <td  className={styles.data}>{data.orgName}</td>
                            <td className={styles.data}>{data.userName}</td>
                            <td  className={styles.data}>{data.email}</td>
                            <td className={styles.data}>{data.phoneNumber}</td>
                            <td  className={styles.data}>{data.createdAt}</td>
                            <td className={styles.data}>
                                
                                    <img src="./src/assets/pendingpill.png" alt="" />
                                    </td>
                            
                            
                            <td className={styles.dots}> 
                         
                              <img className={styles.dots} src="./src/assets/threedots.png" alt="" />
                             </td>
                        
                             <div className={styles.hr}></div>
                                    </tr> 
                                )
                            })}
                             

                       
                        </tbody>
                    
                        
                    
        </table>
    </div>
  )
}

export default Tables