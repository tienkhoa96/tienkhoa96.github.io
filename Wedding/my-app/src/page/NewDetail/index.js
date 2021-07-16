import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
const useStyles = makeStyles((theme) => ({
  wrapNewDetail: {
    marginBottom: "50px",
    width: "90vw",
    margin: "0 auto",
    "& > img": {
        width: "100%"
    }
  },
  des : {
      textAlign: 'start'
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
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/bungnouudai.jpg?raw=true",
      des: "Kí trước online - Bùng nổ ưu đãi",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "uu-dai-mua-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/4-2-1.jpg?raw=true",
      des: "Ưu đãi tưng bừng mùa cưới 2020",
      title: "Ưu đãi lớn cuối cùng năm 2021, ELLY studio không giảm giá mà tặng hẳn [...]"
    },
    {
      cat: "chup-hinh-cuoi-chuan-bi-gi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/chup-hinh-cuoi-chuan-bi-gi.jpg?raw=true",
      des: "Chụp hình cưới cần chuẩn bị gì",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "ngay-tot-to-chuc-dam-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/ngay-tot-to-chuc-dam-cuoi.jpg?raw=true",
      des: "Ngày tốt tổ chức đám cưới",
      title: "ELLY STUDIO thông báo ưu đãi dành riêng cho khách hàng đăng kí online trước [...]"
    },
    {
      cat: "thiet-ke-thiep-cuoi",
      img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/New/thiet-ke-thiep-cuoi.jpg?raw=true",
      des: "Thiết kế thiếp cưới",
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
