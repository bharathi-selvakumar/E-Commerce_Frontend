import React from "react";
import "./mobile.css";
import { Carousel } from "antd";
import iphone_brand from "./images/iphone__interface.png";
import vivo_brand from "./images/vivo_interface.png";
import samsung_brand from "./images/samsung_interface.png";
import logo_vivo from "./images/vivo.png";
import logo_samsung from "./images/samsung.png";
import { Card } from "antd";
import { Grid, Container, useTheme, useMediaQuery } from "@mui/material";

const { Meta } = Card;

const contentStyle = {
  // height: '160px',
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousel_image = [
  {
    src: "https://th.bing.com/th/id/OIP.Bav57H-tczLzuK4_w2dOKgHaEK?rs=1&pid=ImgDetMain",
    alt: "carousel image 1",
  },
  {
    src: "https://www.techquila.co.in/wp-content/uploads/2019/08/cropped-cfcbb7b6cb28bdb60d3e7dd805f6d7af.jpg",
    alt: "carousel image 1",
  },
  {
    src: "https://www.newvisiontheatres.com/wp-content/uploads/2023/09/iphone-15pro-max-pricing.jpg",
    alt: "carousel image 1",
  },
  {
    src: "https://www.themobileindian.com/public/uploads/editor/2020-10-12/vivo-v20.png",
    alt: "carousel image 1",
  },
  {
    src: "https://i.pinimg.com/736x/8a/9b/cd/8a9bcd8cec46493dc4448d940c0ab201.jpg",
    alt: "carousel image 1",
  },
];

const MobileCollections = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getImageStyles = () => {
    if (isSmallScreen) {
      return { height: "200px", width: "100%" };
    } else if (isMediumScreen) {
      return { height: "300px", width: "100%" };
    } else if (isLargeScreen) {
      return { height: "350px", width: "100%" };
    } else if (isXLargeScreen) {
      return { hight: "auto", with: "auto" };
    }
  };

  const getCardWidth = () => {
    if (isSmallScreen) {
      return "auto";
    } else if (isMediumScreen) {
      return "350px";
    } else if (isLargeScreen) {
      return "720px";
    }
  };

  const gethight = () => {
    if (isSmallScreen) {
      return "290px";
    } else if (isMediumScreen) {
      return "400px";
    } else if (isLargeScreen) {
      return "460px";
    } else if (isXLargeScreen) {
      return "460px";
    }
  };

  const getCarousel = () => {
    if (isSmallScreen) {
      return "auto";
    } else if (isMediumScreen) {
      return "300px";
    } else if (isLargeScreen) {
      return "400px";
    }
  };

  const Oppo_hight = () => {
    if (isSmallScreen) {
      return "0px";
    } else if (isMediumScreen) {
      return "0px";
    } else if (isLargeScreen) {
      return "296px";
    }
  };

  const OppoWidth = () => {
    if (isSmallScreen) {
      return "auto";
    } else if (isMediumScreen) {
      return "auto";
    } else if (isLargeScreen) {
      return "730px";
    }
  };

  const MotoAndPoco_Style = () => {
    if (isSmallScreen) {
      return {
        marginTop: "0px",
        padding: "15px",
        marginRight: "0px",
        position: "relative",
        left: "10px",
      };
    } else if (isMediumScreen) {
      return { marginTop: "0px", padding: "10px", marginLeft: "0px" };
    } else if (isLargeScreen) {
      return { marginTop: "-80px", padding: "15px", marginLeft: "7px" };
    } else if (isXLargeScreen) {
      return { marginTop: "-80px", padding: "15px", marginLeft: "7px" };
    }
  };

  const card_MotoAndPoco = () => {
    if (isSmallScreen) {
      return { height: "240px", width: "150px" };
    } else if (isMediumScreen) {
      return { height: "400px", width: "auto" };
    } else if (isLargeScreen) {
      return { height: "400px", width: "auto" };
    } else if (isXLargeScreen) {
      return { height: "400px", width: "auto" };
    }
  };

  const image_MotoAndPoco = () => {
    if (isSmallScreen) {
      return { height: "160px", width: "150px" };
    } else if (isMediumScreen) {
      return { height: "300px", width: "" };
    } else if (isLargeScreen) {
      return { height: "300px", width: "" };
    } else if (isXLargeScreen) {
      return { height: "300px", width: "" };
    }
  };

  const samsungMT = () => {
    if (isSmallScreen) {
      return "20px";
    } else if (isMediumScreen) {
      return "auto";
    } else if (isLargeScreen) {
      return "0px";
    } else if (isXLargeScreen) {
      return "-120px";
    }
  };

  const infinix_MT = () => {
    if (isSmallScreen) {
      return { marginTop: "0px", height: "auto" };
    } else if (isMediumScreen) {
      return { marginTop: "0px" };
    } else if (isLargeScreen) {
      return { marginTop: "-70px" };
    } else if (isXLargeScreen) {
      return { marginTop: "-170px" };
    }
  };

  const infinix_card = () => {
    if (isSmallScreen) {
      return { height: "240px" };
    } else if (isMediumScreen) {
      return { height: "400px" };
    } else if (isLargeScreen) {
      return { height: "400px" };
    } else if (isXLargeScreen) {
      return { height: "400px" };
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ position: "relative", mr: { xs: "-20rem" } }}
          >
            <div
              style={{
                position: "relative",
                margin: "20px -6%",
                width: "110%",
                padding: "10px",
              }}
            >
              <Carousel effect="fade" autoplay arrows>
                {Carousel_image.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      display: "block",
                      loading: "lazy",
                    }}
                    height={getCarousel()}
                    alt={image.alt}
                  />
                ))}
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* //////////////////////MObile_containers////////////////// */}
      <Container maxWidth="xl">
        {/* <main> */}
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="wrap"
          className="section_brand_div"
          sx={{}}
        >
          <Grid item xs={6} sm={6} md={4} lg={3} sx={{ padding: "-20px" }}>
            <a href="/iphone_collections">
              <Card
                hoverable
                style={{ width: "auto", textAlign: "center", height: "280px" }}
                cover={
                  <img
                    src={iphone_brand}
                    alt="iphone"
                    style={{ position: "relative", top: 30, height: "130px" }}
                  />
                }
                className="brands Card-hover"
              >
                <img
                  src="https://i.pinimg.com/originals/2f/5a/8c/2f5a8c55d6f34094fe44b7d9125ee074.png"
                  height="70px"
                  width="auto"
                  style={{ position: "relative", bottom: -10, left: -5 }}
                />
              </Card>
            </a>
          </Grid>

          <Grid item xs={6} sm={6} md={4} lg={3}>
            <a href="/vivo_collections">
              <Card
                hoverable
                style={{
                  width: "100%",
                  textAlign: "center",
                  height: 280,
                }}
                className="brands Card-hover"
                cover={<img src={vivo_brand} alt="vivo" height="200px" />}
              >
                <img
                  src={logo_vivo}
                  height="90px"
                  width="80px"
                  style={{ position: "relative", bottom: 30 }}
                />
              </Card>
            </a>
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            sx={{ mt: { md: "0px", xs: "-10px", lg: "0px", sm: "0px" } }}
          >
            <a href="/vivo_collections">
              <Card
                hoverable
                style={{
                  width: "100%",
                  textAlign: "center",
                  //   height:375
                  height: {
                    xs: "auto",
                    sm: "300px",
                    md: "375px",
                    lg: "375px",
                  }, // Responsive height
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://m.economictimes.com/thumb/msid-110542586,width-1200,height-1200,resizemode-4,imgsize-30858/best-redmi-mobile-phones.jpg"
                    alt="vivo"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                      maxHeight: {
                        xs: "200px",
                        sm: "250px",
                        md: "300px",
                        lg: "375px",
                      }, // Responsive height for image
                    }}
                  />
                }
              >
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-ec50f7e99f2ca4ad6efd2e2019bb6cad"
                  style={{
                    height: "60px",
                    width: "auto",
                    position: "relative",
                    bottom: 9,
                  }}
                />
              </Card>
            </a>
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            sx={{ mt: { md: "-50px", xs: "0px", lg: "0px", sm: "0px" } }}
          >
            <a href="/vivo_collections">
              <Card
                hoverable
                style={{
                  width: "100%",
                  textAlign: "center",
                  height: {
                    xs: "auto",
                    sm: "300px",
                    md: "375px",
                    lg: "375px",
                  },
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://global.pro.m.infinixmobility.com/media/catalog/product/x/6/x6851b_note40pro_5g_base1_3.png"
                    alt="infiniex"
                  />
                }
              >
                <img
                  src="https://vignette.wikia.nocookie.net/logopedia/images/6/6f/Infinix.jpeg/revision/latest?cb=20200808091030"
                  style={{
                    position: "relative",
                    bottom: 30,
                    height: "30px",
                    width: "auto",
                  }}
                />
              </Card>
            </a>
          </Grid>
        </Grid>
      </Container>
      {/*////////////////////// container_2/////////////////////////// */}
      <Container maxWidth="xl">
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              mt: samsungMT(),
              // width: {
              //   xs: "auto",
              //   sm: "300px",
              //   md: "557px",
              //   lg: "575px",
              // },
              width: getCardWidth(),
            }}
          >
            <a href="/samsung_collections">
              <Card
                hoverable
                style={{
                  // width: "auto",
                  textAlign: "center",
                  height: gethight(),
                  // width: {
                  //     xs: "auto",
                  //     sm: "300px",
                  //     md: "557px",
                  //     lg: "575px",
                  //   }
                  width: getCardWidth(),
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src={samsung_brand}
                    alt="samsung"
                    height="350px"
                    width="557"
                    style={getImageStyles()}
                  />
                }
              >
                <img
                  src={logo_samsung}
                  height="200px"
                  width="auto"
                  style={{ position: "relative", bottom: 70 }}
                />
              </Card>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sm={6}
            sx={{ mt: { xs: "10px", lg: "10px", sm: "10px", md: "10px" } }}
          >
            <a href="oppo_collections">
              <Card
                hoverable
                style={{
                  width: OppoWidth(),
                  textAlign: "center",
                  position: "relative",
                  height: "",
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://static.designboom.com/wp-content/uploads/2021/09/oppo-reno8-pro-smartphone-design-journey-designboom08.jpg"
                    alt="OPPO"
                    height="300px"
                  />
                }
              >
                <img
                  src="https://1000logos.net/wp-content/uploads/2018/10/Oppo-logo.png"
                  height="90px"
                  width="auto"
                  style={{}}
                />
              </Card>
            </a>
          </Grid>
          <Grid xs={6} md={4} sm={6} lg={3} style={MotoAndPoco_Style()}>
            <a href="moto_collection">
              <Card
                hoverable
                style={{
                  width: "auto",
                  textAlign: "center",
                  ...card_MotoAndPoco(),
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/08/full/1691492670-9193.PNG?im=FeatureCrop,size=(826,465)"
                    alt="MOTO"
                    style={image_MotoAndPoco()}
                  />
                }
              >
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/04/Color-Motorola-logo.jpg"
                  height="60px"
                  width="90px"
                  style={{ marginTop: "-20PX" }}
                />
              </Card>
            </a>
          </Grid>
          <Grid xs={6} md={4} sm={6} lg={3} style={MotoAndPoco_Style()}>
            <a href="moto_collection">
              <Card
                hoverable
                style={{
                  width: "auto",
                  textAlign: "center",
                  ...card_MotoAndPoco(),
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://techpp.com/wp-content/uploads/2022/04/poco-x4-pro-review-1.jpg"
                    alt="MOTO"
                    style={image_MotoAndPoco()}
                  />
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Poco_Smartphone_Company_logo.svg/2560px-Poco_Smartphone_Company_logo.svg.png"
                  height="50px"
                  width="90px"
                  style={{ borderRadius: "20px", marginTop: "-40PX" }}
                />
              </Card>
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={5.8} sm={6}>
            <a href="realme_collections">
              <Card
                hoverable
                style={{ width: "auto", textAlign: "center" }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://www.godigit.com/content/dam/godigit/directportal/en/realme-mobile.png"
                    alt="realme"
                    height="400px"
                    width="auto"
                  />
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png"
                  height="50px"
                  width="130px"
                  style={{ borderRadius: "10px" }}
                />
              </Card>
            </a>
          </Grid>

          <Grid item xs={12} md={6} lg={5.8} sm={6} style={infinix_MT()}>
            <a href="realme_collections">
              <Card
                hoverable
                style={{
                  width: "auto",
                  textAlign: "center",
                  ...infinix_card(),
                }}
                className="brands Card-hover"
                cover={
                  <img
                    src="https://mediatek-marketing.transforms.svdcdn.com/production/posts/infinix-note-6.jpg?w=1000&h=450&q=80&auto=format&fit=crop&dm=1684471825&s=16a781e9e2f572d03b1e3c1c0a052aef"
                    alt="realme"
                    width="auto"
                  />
                }
              >
                <img
                  src="https://i.pinimg.com/originals/98/a3/2e/98a32e0ef25e6148b8a08954956eb0e4.png"
                  height="90px"
                  width="auto"
                  style={{ borderRadius: "10px", marginTop: "-20px" }}
                />
              </Card>
            </a>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MobileCollections;
