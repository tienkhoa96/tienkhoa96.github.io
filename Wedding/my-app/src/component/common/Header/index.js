import React, {useState} from 'react'
import { makeStyles, Icon } from '@material-ui/core';
import Menu from '../../Menu';
import Logo from '../../Logo';


const useStyles = makeStyles((theme) => ({
    wrapHeader: {
        margin:"0 auto",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        textAlign:"center",
        padding:"10px 20px",
        boxShadow: "0 .125rem .25rem rgba(0,0,0,.055)!important"
    },
    barIcon : {
        color : '#00000a1',
        display : 'none',
        position : "absolute",
        top : "20px",
        right: "20px",
        "@media (max-width : 768px)": {
            display: 'block',
        }
      
    
    },
  }));

const Header = ({activeMenu}) => {

    const [isShowBar, setIsShowBar] = useState(false)

    const menu = [
        {
            label: 'Trang Chủ',
            link: '/'
            
        },
        {
            label: 'Album',
            link: '/album'
            
        },
        {
            label: 'Váy cưới LUXURY',
            link: '/vay-cuoi'
            
        },
        {
            label: 'Báo giá',
            link: '/bao-gia'
            
        },
        {
            label: 'Tin tức',
            link: '/tin-tuc'
            
        },
    ]

    const classes = useStyles();
    return (
        <div className={classes.wrapHeader}>
            <Logo />
        <Icon onClick={()=> setIsShowBar(!isShowBar)} classes={{root:classes.barIcon}} className="fas fa-bars"></Icon>

            <Menu activeMenu={activeMenu} isShowBar={isShowBar} closeBar={()=>setIsShowBar(!isShowBar)} dataList={menu}/>
        </div>
    )
}

export default Header