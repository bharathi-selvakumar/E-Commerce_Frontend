import React from "react";
import dash_mobile from "../images/mobile_dash.png"
import "./pages.css"
import { Carousel } from "antd";
import Container from '@mui/material/Container'


const contentStyle = {
    height: '230px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  


const Dashboard=()=>{

    return(
        <>
        <Container maxWidth="lg">
          
        </Container>
           <div className="Dashboard-main">
                <div className="Dashboard-sub">
                    <div >
                        <a href="/mobileCollections">
                            <img src="https://p1.socds.net/llp/4708/photo_upload_63b897180fe0d-2023-01-06.png" alt="image_mobile"  height={110} width={110} 
                            style={{borderRadius:"10px",
                                marginTop:"15px"
                                }} />
                            <h5 style={{width:"120px",paddingLeft:"15px",marginTop:"10px ",cursor:"pointer"}}>Mobile & Tablets</h5>
                        </a>
                    </div>

                    <div >
                        <img src="https://i.gadgets360cdn.com/large/Amazon_Appliances_Sale_1473408424629.jpeg" alt="image_appliances" height={90} width={110} style={{borderRadius:"10px",marginTop:"15px"}}/>
                        <h5 style={{width:"130px",paddingLeft:"30px",marginTop:"10px "}}>TVs & Appliances</h5>
                    </div>

                    <div >
                        <img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg" alt="image_Electronic"  height={90} width={110} style={{borderRadius:"10px",marginTop:"15px"}}/>
                        <h5 style={{width:"130px",paddingLeft:"10px",marginTop:"10px "}}>Electronices</h5>
                    </div>

                    <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND8YmWRrKFWwqfY1MxlMOicqA9sGxZsYmKw&s"alt="image_Fashion"  height={90} width={110} style={{borderRadius:"10px",marginTop:"15px"}}/>
                        <h5 style={{width:"130px",paddingLeft:"30px",marginTop:"10px "}}>Fashion</h5>
                    </div>

                    <div >
                        <img src="https://www.sagestudio.co.uk/wp-content/uploads/2022/12/0019-f5e6e1-Copy.jpg" alt="image_Beauty"  height={90} width={110} style={{borderRadius:"10px",marginTop:"15px"}}/>
                        <h5 style={{width:"130px",paddingLeft:"30px",marginTop:"10px "}}>Beauty</h5>
                    </div>

                    <div >
                        <img src="https://i.pinimg.com/736x/14/72/8f/14728fdf3f8eeaa27a254e2f3ea53766.jpg" alt="image_home"  height={90} width={110} style={{borderRadius:"10px",marginTop:"15px"}}/>
                        <h5 style={{width:"130px",paddingLeft:"30px",marginTop:"10px "}}>Home & Kitchen</h5>
                    </div>

                    {/* <div >
                        <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D" alt="image_Furniture"  height={90} width={110} style={{borderRadius:"10px",marginTop:"15px"}}/>
                        <h5 style={{width:"130px",paddingLeft:"30px",marginTop:"10px "}}>Furniture</h5>
                    </div> */}
                    
                </div>
            <div style={{marginTop:"0px",padding:"20px"}}>
                    <Carousel autoplay arrows  >
                            <div>
                            <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                            <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                            <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                            <h3 style={contentStyle}>4</h3>
                            </div>
                    </Carousel>
            </div>
          </div>
        </>

    )
}

export default Dashboard