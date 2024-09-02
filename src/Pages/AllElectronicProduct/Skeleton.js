import React from "react";
import { Skeleton, Space } from "antd";
import AppleIcon from "@mui/icons-material/Apple"; // Assuming you're using Material-UI for the AppleIcon
import { Container, Grid } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
const Apple = () => {
  return (
    <AppleIcon
      style={{
        fontSize: 90,
        color: "#bfbfbf",
      }}
    />
  );
};

const MobileSkeleton = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid sm={12} lg={8} md={8} style={{ display: "flex" }}>
          <Space direction="horizontal" size="large" style={{}}>
            <div
              style={{ maxWidth: "fitContent", padding: "", marginTop: "40px" }}
            >
              {/* {renderSkeletonNodes()} */}
              <Skeleton.Node
                active
                style={{ height: "580px", width: "250px", marginLeft: "-90px" }}
              >
                <FilterAltIcon
                  style={{
                    fontSize: 90,
                    color: "#7f8281",
                  }}
                />
              </Skeleton.Node>
            </div>
          </Space>
          <br />
          <Space direction="horizontal" size="large" style={{}}>
            <div
              style={{
                maxWidth: "fitContent",
                padding: "20px",
                marginTop: "40px",
              }}
            >
              {/* {renderSkeletonNodes()} */}
              <Skeleton.Node
                active
                style={{
                  height: "580px",
                  width: "1100px",
                  margin: "30px",
                  display: "flex",
                }}
              >
                <Skeleton.Node
                  active
                  style={{
                    position: "relative",
                    right: "",
                    height: "500px",
                    width: "250px",
                  }}
                >
                  <PhoneIphoneIcon
                    style={{
                      fontSize: 60,
                      color: "#bfbfbf",
                    }}
                  />
                </Skeleton.Node>
                <Skeleton
                  active
                  style={{ width: "50rem", padding: "30px" }}
                  paragraph={{
                    rows: 11,
                  }}
                />
              </Skeleton.Node>
            </div>
          </Space>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MobileSkeleton;
