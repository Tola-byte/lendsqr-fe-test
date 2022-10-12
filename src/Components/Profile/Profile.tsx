import React, { useEffect , useState} from 'react'
import styles from "./Profile.module.scss"
import axios from 'axios'
import { infoheaders } from '../../utils/data'
function Profile() {
    const [data, setData] = useState(()=>{
        return JSON.parse(window.localStorage.getItem('MY_USERS_DETAILS'))
    });
    //const [data, setItems] = useState({});

    const fetchData = async() => {
        await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/9`)
        .then((response) => {
            const value = response.data;
            setData(value);
            console.log(value);
        })
        .catch((error) => {
            console.log("error")
        })
    
      
      
    }
    useEffect(() =>{
        window.localStorage.setItem('MY_USERS_DETAILS', JSON.stringify(data));
        fetchData();
        }, [fetchData])


        useEffect(()=>{
            const data =  window.localStorage.getItem('MY_USERS_DETAILS');
            if ( data !== null ) setData(JSON.parse(data));
           // console.log(data.createdAt)
        }, [])
      
   
  return (
    <div>
        <a href="/users">
        <div className={styles.contain}>
            <img src="./src/assets/arrow.png" alt="" />
            <p className={styles.text}>Back to Users</p>
        </div>
        </a>
        <div className={styles.users}>
            <p className={styles.header}>User Details</p>
            <div className={styles.blacklist}>
            <button className={styles.userblack}>BLACKLIST USER</button>
            <button className={styles.activate}>ACTIVATE USER</button>
            </div>
        </div>

        <div className={styles.usercard}>
            <div className={styles.info}>
                <img src={data?.profile?.avatar} className = {styles.img} alt="img" />
                <div className={styles.flexin}>
                <div className={styles.infoname}>
                <p className={styles.name}>{data?.profile?.firstName} {data?.profile?.lastName}</p>
                <p className={styles.code}>{data.accountNumber}</p>
                </div>
                <div className={styles.bar}></div>
                <img src="./src/assets/tier.png" alt="tier" className={styles.tier} />
                <div className={styles.bar1}></div>
                <div className={styles.infoname}>
                <p className={styles.name}>₦{data.accountBalance}</p>
                <p className={styles.code}>919234578/Providus Bank</p>
                </div>
                </div>
               

            </div>

            <div className={styles.detailscard}>
                        <p className={styles.title}>{infoheaders[0].title}</p>
                        <div className={styles.wrapper}>
                        <div className={styles.valuecontain}>
                                    <td className={styles.heading}>FULL NAME</td>
                                    <span className={styles.value}>{data?.profile?.firstName} {data?.profile?.lastName}</span>
                        </div>

                        <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>PHONE NUMBER</td>
                                    <span className={styles.value}>{data?.profile?.phoneNumber}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>EMAIL ADDRESS</td>
                                    <span className={styles.value}>{data.email}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>BVN</td>
                                    <span className={styles.value}>{data?.profile?.bvn}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>GENDER</td>
                                    <span className={styles.value}>{data?.profile?.gender}</span>
                                </div>
                                
                                <div className={styles.valuecontain}>
                                <td className={styles.heading}>MARITAL STATUS</td>
                                <span className={styles.value}>single</span>
                                </div>
                                <div  className={styles.valuecontain}>
                                <td className={styles.heading}>CHILDREN</td>
                                <span className={styles.value}>five</span>
                                </div>
                               <div className={styles.valuecontain1}>
                                <td className={styles.heading}>TYPE OF RESIDENCE</td>
                                <span className={styles.value}>single</span>
                                </div>
                        </div>
                        <hr />

                        <p className={styles.title}>{infoheaders[1].title}</p>
                        <div className={styles.wrapper}>

                        <div className={styles.valuecontain}>
                                    <td className={styles.heading}>LEVEL OF EDUCATION</td>
                                    <span className={styles.value}>{data?.education?.level}</span>
                        </div>

                        <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>EMPLOYMENT STATUS</td>
                                    <span className={styles.value}>{data?.education?.employmentStatus}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>SECTOR OF EMPLOYMENT</td>
                                    <span className={styles.value}>{data?.education?.sector}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>DURATION OF EMPLOYMENT</td>
                                    <span className={styles.value}>{data?.education?.duration}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>OFFICE EMAIL</td>
                                    <span className={styles.value}>{data?.education?.officeEmail}</span>
                                </div>

                                
                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>MONTHLY INCOME</td>
                                    <span className={styles.value}>₦{data?.education?.monthlyIncome}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>LOAN REPAYMENT</td>
                                    <span className={styles.value}>₦{data?.education?.loanRepayment}</span>
                                </div>
                                
                                
                        </div>
                        <hr />

                        <p className={styles.title}>{infoheaders[2].title}</p>
                        <div className={styles.wrapper}>

                        <div className={styles.valuecontain}>
                                    <td className={styles.heading}>TWITTER</td>
                                    <span className={styles.value}>{data?.socials?.twitter}</span>
                        </div>

                        <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>FACEBOOK</td>
                                    <span className={styles.value}>{data?.socials?.facebook}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>INSTAGRAM</td>
                                    <span className={styles.value}>{data?.socials?.instagram}</span>
                                </div>

                                </div>
                                <hr />

                                <p className={styles.title}>{infoheaders[3].title}</p>
                        <div className={styles.wrapper}>

                        <div className={styles.valuecontain}>
                                    <td className={styles.heading}>FULL NAME</td>
                                    <span className={styles.value}>{data?.guarantor?.firstName} {data?.guarantor?.lastName}</span>
                        </div>

                        <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>PHONE NUMBER</td>
                                    <span className={styles.value}>{data?.guarantor?.phoneNumber}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>EMAIL ADDRESS</td>
                                    <span className={styles.value}>{data?.email}</span>
                                </div>

                                <div  className={styles.valuecontain}>
                                    <td className={styles.heading}>RELATIONSHIP</td>
                                    <span className={styles.value}>Sister</span>
                                </div>

                                </div>
                                <hr />

                                <div className={styles.wrapper}>

                                    <div className={styles.valuecontain}>
                                                <td className={styles.heading}>FULL NAME</td>
                                                <span className={styles.value}>{data?.guarantor?.firstName} {data?.guarantor?.lastName}</span>
                                    </div>

                                    <div  className={styles.valuecontain}>
                                                <td className={styles.heading}>PHONE NUMBER</td>
                                                <span className={styles.value}>{data?.guarantor?.phoneNumber}</span>
                                            </div>

                                            <div  className={styles.valuecontain}>
                                                <td className={styles.heading}>EMAIL ADDRESS</td>
                                                <span className={styles.value}>{data?.email}</span>
                                            </div>

                                            <div  className={styles.valuecontain}>
                                                <td className={styles.heading}>RELATIONSHIP</td>
                                                <span className={styles.value}>Sister</span>
                                            </div>

                                            </div>
                        
                    </div>

            
            <div className={styles.flex}>
              
                <div>
                <a href="//"><p className={styles.p}>General Details</p>
                <hr className={styles.green1}/>
                </a>
                </div>
                <a href="//"><p>Documents</p>
                <hr className={styles.green}/>
                </a>
                <a href="//"><p>Bank Details</p>
                <hr className={styles.green}/>
                </a>
                <a href="//"><p>Loans</p>
                <hr className={styles.green}/>
                </a>
                <a href="//"><p>Savings</p>
                <hr className={styles.green}/>
                </a>
                <a href="//"><p>App and System</p>
                <hr className={styles.green}/>
                </a>
            </div>
        </div>
        </div>
        

  )
}
export default Profile