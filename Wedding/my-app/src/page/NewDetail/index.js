import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
const useStyles = makeStyles((theme) => ({
  wrapNewDetail: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "50px",
    width: "90vw",
    margin: "0 auto",
  },
  boxItem: {
    width: "24%",
    padding: "5px",
    marginBottom: "20px",
  },
  boxImg: {
    "& > img": {
      width: "100%",
    },
  },
  title : {
      textAlign: 'center'
  }
}));

const NewDetail = () => {
  const classes = useStyles();
  const [myId, setMyId] = useState("");

  useEffect(() => {
    var url = window.location.href;
    var myArr = url.split("/");
    setMyId(myArr[myArr.length - 1]);
  }, [])

  const NewDetail = [
    {
      cat: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "ki-truoc-online-bung-no-uu-dai",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
  ]

  
  return (
    <>
      <Header />
        {NewDetail.length && NewDetail.map((item, index) => {
            if (item.cat == myId) {
              return (
                  <>
                    <div className={classes.wrapNewDetail}>   
                    <h1 className={classes.des}>{item.des}</h1>
                    <img src={item.img}/>
                    <p>{item.title}</p>
                    
                    </div>
                  </>
              );
            }
          })}
      <Footer />
    </>
  );
};

export default NewDetail;
