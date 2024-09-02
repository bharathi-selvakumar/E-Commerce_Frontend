import {
  Alert,
  Card,
  Container,
  Grid,
  ButtonGroup,
  Button,
  Paper,
  Checkbox,
  useMediaQuery,
  Divider,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MobileSkeleton from "../Skeleton";
import {
  InfoCircleTwoTone,
  HomeOutlined,
  MobileOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { Carousel, Typography, Popover, Breadcrumb, Modal } from "antd";
import Error404 from "../../../Error_404";
import "./mobile.css";
import {
  KnowMoreMoto,
  KnowMoreOppo,
  KnowMoreRealmi,
  KnowMoreSamsung,
  KnowMoreredmi,
  KnowMorevivo,
} from "./KnowMore";
import KnowMoreIphone from "./KnowMore";

const { Text, Title } = Typography;

const text = <span>Price details</span>;

const url = "http://localhost:7006";

const Mobile_Iphone = () => {
  const [particularData, setParticularData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name, decodedBrandName } = useParams();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const images = particularData?.images || {};

  const pricing = particularData?.pricing || {};
  const colorOptions = particularData?.colorOptions || {};
  const storageOptions = particularData?.storageOptions || {};
  const highlights = particularData?.highlights || {};
  const easyPaymentOptions = particularData?.easyPaymentOptions || {};

  const decodedName = decodeURIComponent(name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/Mobiles/getMobileByName/${decodedName}`
        );
        setParticularData(response.data);
      } catch (error) {
        console.error(`Error: `, error);
        if (error.response) {
          if (error.response.status === 404) {
            setError(<Error404 />);
          } else {
            setError(<Alert severity="error">Internal server error 500</Alert>);
          }
        } else {
          setError("Network error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [decodedName]);

  const DisplayImage = (images, color) => {
    if (!images || !images[color]) return [];
    return images[color];
  };

  const handleColorChange = () => {
    setOrderdData("value");
  };

  const handleCheckedcolor = (color) => {
    setSelectedColor(color);
  };

  const handleCheckedRam = (ram, index) => {
    setSelectRam(ram);
    setSelectedRamIndex(index);
  };

  useEffect(() => {
    if (storageOptions.length > 0) {
      setSelectRam(storageOptions[0]);
      setSelectedColor(colorOptions[0]);
      setMobileColor(colorOptions[0]);
    }
  }, [storageOptions]);

  const [selectRam, setSelectRam] = useState();
  const [selectedRamIndex, setSelectedRamIndex] = useState(0);
  const [orderdData, setOrderdData] = useState("");
  const defaultColor = colorOptions.someKey || "defaultColor";
  const [selectedColor, setSelectedColor] = useState("");
  // console.log('colorOptions type:', typeof colorOptions);

  console.log(selectedColor);

  const RamselcetionChange = () => {
    if (selectedRamIndex == 0) {
      return 0;
    } else if (selectedRamIndex === 1) {
      return 1;
    } else if (selectedRamIndex === 2) {
      return 2;
    } else if (selectedRamIndex === 3) {
      return 3;
    }
  };

  const colors = [
    "Black",
    "Blue",
    "red",
    "Green",
    "White",
    "Space Gray",
    "Gold",
  ];
  const [mobileColor, setMobileColor] = useState("");
  console.log(mobileColor);
  const ImageUrl = DisplayImage(images, mobileColor);

  const BrandName_KnowMore = decodedBrandName;
  const Casesensitive = BrandName_KnowMore.toLowerCase();

  const Warranty_Details = () => {
    switch (Casesensitive) {
      case "apple":
        KnowMoreIphone();
        break;
      case "vivo":
        KnowMorevivo();
        break;
      case "oppo":
        KnowMoreOppo();
        break;
      case "moto":
        KnowMoreMoto();
        break;
      case "samsung":
        KnowMoreSamsung();
        break;
      case "redmi":
        KnowMoreredmi();
        break;
      case "realmi":
        KnowMoreRealmi();
        break;
      default:
        return "no details";
    }
  };

  const content = (
    <>
      <div>
        {particularData ? (
          <div>
            {pricing && pricing.length > 0 && (
              <>
                <div style={{ display: "flex", gap: "30px" }}>
                  <div>
                    <Text type="secondary">Maximum Retail Price</Text>
                    <Text type="secondary">(incl. of all taxes)</Text>
                  </div>
                  <div>
                    <Text delete type="secondary">
                      ₹{pricing[RamselcetionChange()].actualPrice}
                    </Text>
                  </div>
                </div>
                <Divider />
                <div style={{ display: "flex", gap: "30px" }}>
                  <Text>Selling Price:</Text>
                  <Text>₹{pricing[RamselcetionChange()].orderPrice}</Text>
                </div>
              </>
            )}
          </div>
        ) : (
          <Alert>Server error</Alert>
        )}
      </div>
    </>
  );

  return (
    <Container>
      <Card
        style={{
          marginTop: "20px",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            {loading && <MobileSkeleton />}
            {error && <Alert severity="warning">{error}</Alert>}

            {particularData && (
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "20px",
                  marginTop: "30px",
                }}
              >
                <Carousel
                  autoplay
                  arrows
                  style={{
                    height: isSmallScreen ? "300px" : "400px",
                    width: "100%",
                  }}
                >
                  {ImageUrl.length > 0 ? (
                    ImageUrl.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        height="400px"
                        alt={`image ${decodedName} ${mobileColor}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          loading: "lazy",
                        }}
                      />
                    ))
                  ) : (
                    <Alert severity="info">Select the Color Of mobile</Alert>
                  )}
                </Carousel>
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <Breadcrumb
              items={[
                {
                  href: "/",
                  title: <HomeOutlined />,
                },
                {
                  href: "/mobileCollections",
                  title: (
                    <>
                      <MobileOutlined />
                      <span>Mobile Collections</span>
                    </>
                  ),
                },
                {
                  href: `/Brand_collections/${decodedBrandName}`,
                  title: (
                    <>
                      <AppleOutlined />
                      <span>{decodedBrandName} Brand Mobiles</span>
                    </>
                  ),
                },
                {
                  href: `/Iphone/${name}`,
                  title: (
                    <>
                      <span>{decodedName}</span>
                    </>
                  ),
                },
              ]}
            />

            {particularData && (
              <Paper
                elevation={3}
                sx={{
                  maxHeight: "65vh",
                  overflowY: "auto",
                  padding: 3,
                  fontStyle: "italic",
                  marginTop: "20px",
                  backgroundImage:
                    "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
                }}
              >
                <Title>{particularData.name}</Title>
                {pricing && pricing.length > 0 && (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Title level={2} style={{ margin: "0px" }}>
                      ₹{pricing[RamselcetionChange()].orderPrice}
                    </Title>
                    <Text delete type="secondary" style={{ fontSize: "18px" }}>
                      ₹{pricing[RamselcetionChange()].actualPrice}
                    </Text>
                    <Text type="success" style={{ fontSize: "17px" }}>
                      {pricing[RamselcetionChange()].discountPercentage}% off
                    </Text>
                    <Popover placement="right" title={text} content={content}>
                      <InfoCircleTwoTone style={{ marginBottom: "7px" }} />
                    </Popover>
                  </div>
                )}
                <Divider />
                <div style={{ marginTop: "10px" }}>
                  <Text>
                    <h3>Warranty Details</h3>1 Year Manufacturer Warranty for
                    Phone and 6 Months Warranty for In the Box Accessories{" "}
                    <a onClick={Warranty_Details}>
                      <span style={{ color: "Highlight" }}>Know More</span>
                    </a>
                  </Text>
                </div>
                <Divider />
                <div style={{ marginTop: "20px" }}>
                  <Title level={3}>Colors</Title>
                  <Grid container spacing={2}>
                    {colorOptions.map((color, index) => (
                      <Grid item xs={6} sm={4} md={3} key={index}>
                        <Card
                          style={{
                            padding: "0px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="hoverColorCard"
                          onClick={() => setMobileColor(color, index)}
                        >
                          <Checkbox
                            onChange={() => handleCheckedcolor(color, index)}
                            checked={selectedColor === color}
                          />
                          {color}
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <Divider />
                <div style={{ marginTop: "20px" }}>
                  <Title level={3}>Storage Options</Title>
                  <Grid container spacing={2}>
                    {storageOptions.map((ram, index) => (
                      <Grid item xs={6} sm={4} md={3} key={index}>
                        <Card
                          style={{
                            padding: "0px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="hoverColorCard"
                          onClick={() => setSelectRam(ram, index)}
                        >
                          <Checkbox
                            onChange={() => handleCheckedRam(ram, index)}
                            checked={selectRam === ram}
                          />
                          {ram}
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Title level={3}>Highlights</Title>
                  {highlights.length > 0 ? (
                    <ul>
                      {highlights.map((highlight, index) => (
                        <li
                          key={index}
                          style={{ padding: "2px", cursor: "default" }}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Text>No highlights available</Text>
                  )}
                </div>

                <div style={{ marginTop: "20px" }}>
                  <Title level={3}>Easy Payment Options</Title>
                  {easyPaymentOptions.length > 0 ? (
                    <ul>
                      {easyPaymentOptions.map((option, index) => (
                        <li
                          key={index}
                          style={{ padding: "2px", cursor: "default" }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Text>No payment options available</Text>
                  )}
                </div>

                <div style={{ marginTop: "20px" }}>
                  <Title level={3}>Ratings & Reviews</Title>
                  <Text>No ratings and reviews available</Text>
                </div>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Mobile_Iphone;
