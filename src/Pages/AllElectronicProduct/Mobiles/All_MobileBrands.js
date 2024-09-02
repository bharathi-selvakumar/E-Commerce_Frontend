import {
  Alert,
  Container,
  Grid,
  Typography as MUITypography ,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Error404 from "../../../Error_404";
import Mobile_Perticular from "./Mobile_Perticular";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Breadcrumb,
  Typography as AntUiTypography,
} from "antd";
import {
  InfoCircleTwoTone,
  HomeOutlined,
  MobileOutlined,
  AppleOutlined,
} from "@ant-design/icons";

const url = "http://localhost:7006";
const { Text,Title} = AntUiTypography ;
const Iphone = () => {
  const [iphones, setIphones] = useState([]);
  const [error, setError] = useState(null);
  const { BrandName } = useParams();
  const decodedBrandName = decodeURIComponent(BrandName);
  // console.log(decodedName)
  const extractImageKeys = (iphones) => {
    const allImageKeys = [];
    iphones.forEach((iphone) => {
      if (iphone.images) {
        Object.keys(iphone.images).forEach((key) => {
          if (!allImageKeys.includes(key)) {
            allImageKeys.push(key);
          }
        });
      }
    });
    return allImageKeys;
  };

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(
          // `${url}/Mobiles/getAllBrandMobiles/iPhone`
          `${url}/Mobiles/getAllBrandMobiles/${decodedBrandName}`
        );
        // console.log("Fetched iPhones Data:", response.data);
        setIphones(response.data);

        ////////////// Extract image keys and store them in state
        const keys = extractImageKeys(response.data);
        setImageKeys(keys);

        /////////////////////////
      } catch (e) {
        if (e.response && e.response.status === 404) {
          setError(<Error404 />);
        } else {
          setError(<Alert severity="error">internel server error</Alert>);
        }
      }
    };
    dataFetch();
  }, []);

  const getImageFromCategory = (images) => {
    for (const category of imageKeys) {
      if (images && images[category] && images[category].length > 0) {
        return images[category][0];
      }
    }
    return null;
  };

  const [imageKeys, setImageKeys] = useState([]);
  console.log(imageKeys);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const index=0
   const Breadcrumbs=()=>{
    if(isSmallScreen){
      return{marginLeft:"3rem",marginTop:"20px"}
    }
    else if (isMediumScreen) {
      return{marginLeft:"1rem",marginTop:"20px"}
    } 
    else if (isLargeScreen) {
      return{marginLeft:"10rem",marginTop:"30px"}
    } else {
      return{marginLeft:"15rem",marginTop:"30px"}
    }
   }
  return (
    <Container>
      {error}
      <Grid container mt={"10px"}>
        <Grid container spacing={2} ml={"10px"} lg={2} sm={12}>
          <h1>filter</h1>
        </Grid>
        <Grid container spacing={3} mt={""} lg={10} sm={10} sx={12}>
        <Breadcrumb style={{...Breadcrumbs()}} 
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
            ]}
          />
          {iphones.map((iphone) => {
            const { _id, name, brandName, images, pricing,highlights } = iphone;
            // console.log("Rendering Mobile ID:", name);

            const imageUrl = getImageFromCategory(images);
            
            return (
              <>
                <Grid item xs={12} sm={6} md={4} lg={12} key={name}>
                  <Link
                    to={{
                      pathname: `/${decodedBrandName}/${name}` ,
                    }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Card
                      sx={{
                        display: "flex",
                        padding: "10px",
                        flexDirection: {
                          xs: "column", // For small devices
                          sm: "row", // For medium and larger devices
                        },
                        backgroundColor:"#f5f5f5"
                      }}
                    >
                      <Paper
                        sx={{
                          height: {
                            xs: "100%", // Small devices
                            sm: "100%", // Medium devices and up
                          },
                          width: {
                            xs: "100%", // Small devices
                            sm: "200px", // Medium devices and up
                          },
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        {imageUrl ? (
                          <CardMedia
                            component="img"
                            // width="200px"
                            image={imageUrl}
                            alt={`${name} image`}
                          

                            sx={{
                              height: {
                                xs: "200px", // Small devices
                                sm: "300px", // Medium devices and up
                              },
                              width: {
                                xs: "350px", // Small devices
                                sm: "200px", // Medium devices and up
                              },
                              borderRadius: "10px",
                              overflow: "hidden",
                            }}
                          />
                        ) : (
                          <CardMedia
                            component="img"
                            height="300px"
                            image={""} // Placeholder image URL
                            alt="Placeholder"
                            width="200px"
                          />
                        )}
                      </Paper>
                     <div style={{display:"flex"}}>
                     <CardContent>
                        <MUITypography variant="h5" component="div">
                          {name} - {brandName}
                        </MUITypography>
                        
                        {pricing && pricing.length > 0 && (
                
                          <div>
                            <MUITypography variant="body2" color="text.secondary">
                              Storage Options:
                            </MUITypography>
                            {/* {pricing.map((price, priceIndex) => (
                              <Typography
                                key={priceIndex}
                                variant="body2"
                                color="text.primary"
                              >
                                {price.storage} - ${price.price}
                              </Typography>
                            ))} */}

                            {pricing[index].storage} | Expandable Upto {pricing.at(-1).storage}                        
                          </div>
                        )}
                        {highlights &&highlights.length>0 && (
                            <ul>
                            {highlights.map((highlight, index) => (
                              <li key={index} style={{ padding: "0px", cursor: "default" }}>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                        { isXLargeScreen && (
                       <MUITypography style={{ width: "30vw"}} > 1 Year Manufacturee Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories</MUITypography>
                        )}
                      </CardContent>
                      <CardContent>
                      <Title level={2} style={{ margin: "0px" }}>
                      ₹{pricing[0].orderPrice}
                    </Title>
                      <Text
                      delete
                      type="secondary"
                      style={{ fontSize: "18px" }}
                    >
                      ₹{pricing[0].actualPrice}
                    </Text>
                    <Text type="success" style={{ fontSize: "17px" }}>
                      {pricing[0].discountPercentage}% off
                    </Text>
                      </CardContent>
                     </div>
                    </Card>
                  </Link>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Iphone;
