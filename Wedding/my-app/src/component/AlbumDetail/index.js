import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import Header from '../common/Header';
import Footer from '../common/Footer';
const useStyles = makeStyles((theme) => ({
    wrapAlbumDetail: {
        display: 'flex',
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "50px",
        width: "90vw",
        margin: '0 auto'
    },
    boxItem: {
        width: "24%",
        padding: "5px",
        marginBottom: "20px"
    },
    boxImg: {
        "& > img": {
            width: '100%'
        }
    }
  }));
  
const AlbumDetail = () => {
    const classes = useStyles();

    const AlbumDetail = [
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
        {
            img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
        },
    ]


    return (<>
            <Header />
            <div className={classes.wrapAlbumDetail}>
                <div className={classes.section}>Album chup anh cuoi ba vi</div>
                {
                    AlbumDetail.length && AlbumDetail.map((item, index) => {
                        return (
                            <div className={classes.boxItem}>
                                <div className={classes.boxImg}>
                                    <img src={item.img}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
            </>
    )
}



export default AlbumDetail