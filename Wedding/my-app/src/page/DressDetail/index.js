import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  wrapDressDetail: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "50px",
    "@media (min-width: 600px)":{
        width: "30vw",
        margin: '0 auto'
    },
    "@media (max-width: 600px)":{
        width: "80vw",
        margin: '0 auto'
    }
  },
  boxItem: {
    padding: "5px",
    marginBottom: "20px",
  },
  boxImg: {
    "& > img": {
      width: "100%",
    },
  },
  des : {
      textAlign: 'center'
  },
  title: {
    "@media (min-width: 600px)":{
        margin: '0 100px'
    },
    "@media (max-width: 600px)":{
        margin: '0 20px'
    }
  }
}));

const DressDetail = () => {
  const classes = useStyles();
  const [myId, setMyId] = useState("");

  useEffect(() => {
    var url = window.location.href;
    var myArr = url.split("/");
    setMyId(myArr[myArr.length - 1]);
  }, [])

  const DressDetail = [
    {
      cat: "vay-cuoi-cong-chua",
      des: "Váy cưới công chúa",
      title: "Những chiếc váy thiết kế vừa vặn, đơn giản, thanh lịch vẫn tôn được đường cong cơ thể mà không khiến cô dâu cảm thấy vướng víu, khó khăn khi di chuyển. Đồng thời đây là mẫu váy hoàn hảo che được nhiều nhược điểm cơ thể nhất, đặc biệt phù hợp với các cô dâu mập thấp hoặc có vòng eo bánh mỳ.",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20c%C3%B4ng%20ch%C3%BAa/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20c%C3%B4ng%20ch%C3%BAa/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20c%C3%B4ng%20ch%C3%BAa/03.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-tre-vai",
      des: "Váy cưới trễ vai",
      title: "Điểm nhấn của xu hướng váy cưới trễ vai này chính là sự lấp lửng, nửa kín nửa hở, cuốn hút người nhìn. Không chỉ vậy, phần vải trễ tay sẽ có tác dụng rất tốt trong việc che đi khuyết điểm cánh tay của người mặc, rất thích hợp cho những nàng dâu hơi đậm người một chút hoặc tay hơi to. Với xu hướng váy cưới trễ vai, cô dâu cũng đặc biệt trở nên quyến rũ bội phần nhờ sự nhấn nhá vào phần xương quai xanh, xương vai và phần ngực. Các nàng dâu sẽ trở nên vô cùng lộng lẫy với những thiết kế váy cưới trễ vai này. ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20d%C3%A0i%20tay/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20d%C3%A0i%20tay/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20d%C3%A0i%20tay/03.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-dai-tay",
      des: "Váy cưới dài tay",
      title: "Ưu điểm nổi bật của váy cưới có tay dài là không kén chọn dáng người mặc, dù bạn cao hay thấp, mập hay gầy. Hơn nữa, nếu cô dâu thiếu tự tin về bờ vai thô, gầy hay cánh tay không thon thả… thì áo cưới dài tay có thể giúp bạn ” ngụy trang” hiệu quả. Tùy theo sở thích, đặc điểm cơ thể mà cô dâu có thể lựa chọn độ dài tay áo phù hợp, may ôm sát tay hay buông rộng… Để tăng phần gợi cảm mà vẫn giữ nét kín đáo, tay áo thường được may bằng chất liệu vải mỏng như ren, voan… ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BA%BF%20vai/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BA%BF%20vai/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BA%BF%20vai/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BA%BF%20vai/04.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-tre-vai2",
      des: "Váy cưới trễ vai",
      title: "Điểm nhấn của xu hướng váy cưới trễ vai này chính là sự lấp lửng, nửa kín nửa hở, cuốn hút người nhìn. Không chỉ vậy, phần vải trễ tay sẽ có tác dụng rất tốt trong việc che đi khuyết điểm cánh tay của người mặc, rất thích hợp cho những nàng dâu hơi đậm người một chút hoặc tay hơi to. Với xu hướng váy cưới trễ vai, cô dâu cũng đặc biệt trở nên quyến rũ bội phần nhờ sự nhấn nhá vào phần xương quai xanh, xương vai và phần ngực. Các nàng dâu sẽ trở nên vô cùng lộng lẫy với những thiết kế váy cưới trễ vai này.  ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BB%85%20vai%202/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BB%85%20vai%202/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20tr%E1%BB%85%20vai%202/03.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-duoi-dai",
      des: "Váy cưới đuôi dài",
      title: "Mang màu sắc truyền thống với những chất liệu buông rủ mềm mại, những mẫu váy cưới trắng đuôi dài chưa bao giờ hết hot và vẫn là sự lựa chọn của rất nhiều nàng dâu trong ngày cưới.  ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/04.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-duoi-dai2",
      des: "Váy cưới đuôi dài",
      title: "Mang màu sắc truyền thống với những chất liệu buông rủ mềm mại, những mẫu váy cưới trắng đuôi dài chưa bao giờ hết hot và vẫn là sự lựa chọn của rất nhiều nàng dâu trong ngày cưới.  ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/01.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/02.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/03.jpg?raw=true",
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/V%C3%A1y%20c%C6%B0%E1%BB%9Bi/V%C3%A1y%20c%C6%B0%E1%BB%9Bi%20%C4%91u%C3%B4i%20d%C3%A0i/04.jpg?raw=true",
    ]
    },
  ];

  return (
    <>
      <Header />
        {DressDetail.length && DressDetail.map((item, index) => {
            if (item.cat == myId) {
              return (
                  <>
                    <h1 className={classes.des}> {item.des}</h1>
                    <p className={classes.title}>{item.title}</p>
                    <Grid containe className={classes.wrapDressDetail}>
                    {
                        item.dataImg.map((img, index) => {
                            return(
                                <Grid item xs={12}>
                                <div className={classes.boxItem}>
                                <div className={classes.boxImg}>
                                    <img src={img} />
                                </div>
                                </div>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                  </>
              );
            }
          })}
      <Footer />
    </>
  );
};

export default DressDetail;
