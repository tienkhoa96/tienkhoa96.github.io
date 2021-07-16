import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
// import { saveToLocal } from '../../utils';
// import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    wrapMenuDetail: {
        display: 'flex',
        // justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "50px",
        width: "90vw",
        margin: '0 auto'
    },
    section: {
        backgroundImage:"url(\"https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-bau-troi-dep-sac-net-nhat.jpg\")",
        padding:"50px 0",
        fontSize: "18px",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        margin: "20px 0"
    },
    boxItem: {
        width: "24%",
        padding: "5px",
        // marginBottom: "20px"
    },
    boxImg: {
        "& > img": {
            width: '100%'
        }
    },
    boxTitle: {
        fontSize:"18px",
        margin:"0",
        paddingTop:"15px",
        fontWeight:"100",
        overflow:"hidden",
        textOverflow:"ellipsis",
        WebkitLineClamp:"1",
        display:"-webkit-box",
        WebkitBoxOrient:"vertical"
    }
  }));


const MenuAlbum = ({dataList}) => {

    // let history = useHistory();

    const classes = useStyles();

    // const handClick = (item) => {
    //     saveToLocal("detail-album", item)
    //     history.push("/album-detail")
    // }

    
    const renderMenuAlbum = () => {
        return  (<>
                        {
                            dataList.length && dataList.map((item, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.boxItem}>
                                        {/* <div onClick={() => handClick(item)}> */}
                                        <Link to={`/album-detail/${item.id}`}>
                                            <div className={classes.boxImg}>
                                                <img src={item.img}/>
                                            </div>
                                            <div className={classes.boxTitle}>{item.title}</div>
                                        </Link>
                                        {/* </div> */}
                                    </Grid>
                                )
                            })
                        }
                    
                </>)
    }


    return ( <><div className={classes.section}>Album</div>
                <Grid container spacing={3} className={classes.wrapMenuDetail}>
                    {
                        renderMenuAlbum()
                    }
                </Grid>
            </>
    )
}

MenuAlbum.defaultProps = {
    dataList: []
}

MenuAlbum.propTypes = {
    dataList: PropTypes.array.isRequired,
}


export default MenuAlbum