import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";

const useStyles = makeStyles((theme) => ({
  wrapDressDetail: {
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
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-tre-vai",
      des: "Váy cưới trễ vai",
      title: "Điểm nhấn của xu hướng váy cưới trễ vai này chính là sự lấp lửng, nửa kín nửa hở, cuốn hút người nhìn. Không chỉ vậy, phần vải trễ tay sẽ có tác dụng rất tốt trong việc che đi khuyết điểm cánh tay của người mặc, rất thích hợp cho những nàng dâu hơi đậm người một chút hoặc tay hơi to. Với xu hướng váy cưới trễ vai, cô dâu cũng đặc biệt trở nên quyến rũ bội phần nhờ sự nhấn nhá vào phần xương quai xanh, xương vai và phần ngực. Các nàng dâu sẽ trở nên vô cùng lộng lẫy với những thiết kế váy cưới trễ vai này. ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-dai-tay",
      des: "Váy cưới dài tay",
      title: "Ưu điểm nổi bật của váy cưới có tay dài là không kén chọn dáng người mặc, dù bạn cao hay thấp, mập hay gầy. Hơn nữa, nếu cô dâu thiếu tự tin về bờ vai thô, gầy hay cánh tay không thon thả… thì áo cưới dài tay có thể giúp bạn ” ngụy trang” hiệu quả. Tùy theo sở thích, đặc điểm cơ thể mà cô dâu có thể lựa chọn độ dài tay áo phù hợp, may ôm sát tay hay buông rộng… Để tăng phần gợi cảm mà vẫn giữ nét kín đáo, tay áo thường được may bằng chất liệu vải mỏng như ren, voan… ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-tre-vai2",
      des: "Váy cưới trễ vai",
      title: "Điểm nhấn của xu hướng váy cưới trễ vai này chính là sự lấp lửng, nửa kín nửa hở, cuốn hút người nhìn. Không chỉ vậy, phần vải trễ tay sẽ có tác dụng rất tốt trong việc che đi khuyết điểm cánh tay của người mặc, rất thích hợp cho những nàng dâu hơi đậm người một chút hoặc tay hơi to. Với xu hướng váy cưới trễ vai, cô dâu cũng đặc biệt trở nên quyến rũ bội phần nhờ sự nhấn nhá vào phần xương quai xanh, xương vai và phần ngực. Các nàng dâu sẽ trở nên vô cùng lộng lẫy với những thiết kế váy cưới trễ vai này.  ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
    ]
    },
    {
      cat: "vay-cuoi-duoi-dai",
      des: "Váy cưới đuôi dài",
      title: "Mang màu sắc truyền thống với những chất liệu buông rủ mềm mại, những mẫu váy cưới trắng đuôi dài chưa bao giờ hết hot và vẫn là sự lựa chọn của rất nhiều nàng dâu trong ngày cưới.  ",
      dataImg: [
        "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/wedding/Ba%20v%C3%AC/bavi.jpg?raw=true",
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
                    <h1 className={classes.title}> {item.des}</h1>
                    <div className={classes.wrapDressDetail}>
                    {
                        item.dataImg.map((img, index) => {
                            return(
                                <>
                                <div className={classes.boxItem}>
                                <div className={classes.boxImg}>
                                    <img src={img} />
                                </div>
                                </div>
                                </>
                            )
                        })
                    }
                    </div>
                  </>
              );
            }
          })}
      <Footer />
    </>
  );
};

export default DressDetail;
