import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Link
} from "react-router-dom";
import Header from '../../component/common/Header'
import Footer from '../../component/common/Footer'

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "20px"
  },  
  wrapNew: {
    // "@media (min-width: 600px": {
      display: 'flex',
    // },
    // justifyContent: "flex-start",
    alignItems: "start",
    flexWrap: "wrap",
    marginBottom: "50px",
    "@media (min-width: 1200px)": {
      width: "90vw",
      margin: '0 auto'
    }
  },
  inner: {
    margin: "0 auto",
    maxWidth: "100%",
    padding: "10px 20px",
  },
  flexItem:{
    "@media (min-width: 768px)": {
      display: "flex",
    },
    alignItems: "center",
    justifyContent: "center"
  },
  boxImg: {
    paddingBottom: "10px",
    "@media (min-width: 768px)": {
      width: "40%",
      padding: "10px 20px 10px 50px",
    },
    "& > img": {
      width: "100%"
    }
  },
  subInner: {
    // margin: "0 auto",
    // maxWidth: "100%",
    paddingBottom: "20px",
    // boder: "1px solid gray"
  },
  flexSubItem:{
    display: "flex",
    alignItems: "center",
    // justifyContent: "center"
  },
  boxSubImg: {
    width: "40%",
    "& > img": {
      width: "95%",
      height: "80%"
    }
  },
  newTitle: {
    padding: "5px 10px",
    background: "gray",
    marginBottom: "10px"
  },
  des: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  boxSubItem: {
    padding: "10px 20px"
  },
}));

export default function New() {
  const classes = useStyles();

  const ItemNew = [
    {
      id: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/bungnouudai.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      id: "uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/4-2-1.jpg?raw=true",
      des: "Ưu đãi tưng bừng mùa cưới 2020",
      title: "Ưu đãi lớn cuối cùng năm 2021, ELLY studio không giảm giá mà tặng hẳn [...]"
    },
    {
      id: "chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/chup-hinh-cuoi-chuan-bi-gi.jpg?raw=true",
      des: "Chụp hình cưới cần chuẩn bị gì",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      id: "ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/ngay-tot-to-chuc-dam-cuoi.jpg?raw=true",
      des: "Ngày tốt tổ chức đám cưới",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      id: "thiet-ke-thiep-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/thiet-ke-thiep-cuoi.jpg?raw=true",
      des: "Thiết kế thiếp cưới",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
  ]

  const SubItem = [
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
    },
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
    },
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
    },
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
    },
    {
      id: "/ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
    },
  ]


  const renderItem = () => {
    return(<>
            {
              ItemNew.length && ItemNew.map((item, index) => {
                return (
                    <Grid item xs={12} className={classes.inner}>
                      <Link to={`/new-detail/${item.id}`}>
                        <div className={classes.flexItem}>
                          <div className={classes.boxImg}>
                            <img src={item.img}/>
                          </div>
                          <div className={classes.boxTitle}>
                            <div className={classes.titleInner}>
                              <div className={classes.des}>{item.des}</div>
                              <div className={classes.title}>{item.title}</div>
                            </div>  
                          </div>   
                        </div>                         
                      </Link>
                    </Grid>
                )
              })  
            }
          </>
    )
  }

  const renderSubItem = () => {
    return(<>
            {
              SubItem.length && SubItem.map((item, index) => {
                return (<>
                    <Grid item xs={12} className={classes.subInner}>
                      <Link to={`/new-detail/${item.id}`}>
                        <div className={classes.flexSubItem}>
                          <div className={classes.boxSubImg}>
                            <img src={item.img}/>
                          </div>
                          <div className={classes.boxSubTitle}>
                            <div className={classes.subTitleInner}>
                              <div className={classes.des}>{item.des}</div>
                            </div>  
                          </div>   
                        </div>                         
                      </Link>
                    </Grid>
                    </>
                )
              })  
            }
          </>
    )
  }

  return (<>
    <Header />
    <div className={classes.content}>
      <Grid container className={classes.wrapNew}>
        <Grid container item xs={12} sm={8} className={classes.boxItem}>
          
          {
            renderItem()
          }
        </Grid>
        <Grid container item xs={12} sm={4} className={classes.boxSubItem}>
          <Grid item xs={12} className={classes.newTitle}>Bài viết mới nhất</Grid>
          {
            renderSubItem()
          }
        </Grid>
      </Grid>
    </div>
    <Footer />
    </>
  );
} 