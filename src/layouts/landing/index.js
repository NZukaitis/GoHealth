import React from "react";
import { useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import LandingLayout from "layouts/authentication/components/LandingLayout";

// Images
import landingImage from "assets/images/doctor-thing.jpg";
// import landingImage from "assets/images/landing_img.jpg";


function Land() {
    return (
        <LandingLayout image={landingImage}>
            <Card>
                <MDBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="xl"
                    coloredShadow="info"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                >
                    <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                        GoHealthi
                    </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                    <MDBox component="form" role="form">
                    <MDBox display="flex" alignItems="center" ml={-1}>
                            <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
                            Healthy living is just a click away!
                            </MDTypography>
                    </MDBox>
                        <MDBox display="flex" alignItems="center" mt={4}ml={1}>
                            <MDTypography variant="h6" fontWeight="medium" color="black">
                            Imagine registered dietitians, physicians, and personal trainers, 
                            connected to provide high-quality care for a healthier lifestyle. 
                            Accessing quality lifestyle medical care services has never been easier with GoHealthi!
                            </MDTypography>
                        </MDBox>
                        <MDBox mt={4} mb={1}>
                            <MDButton variant="gradient" color="info" component={Link} to="/authentication/sign-up" fullWidth>
                                sign up
                            </MDButton>
                        </MDBox>
                        <MDBox mt={2} mb={1}>
                            <MDButton variant="gradient" color="info" component={Link} to="/authentication/sign-in" fullWidth>
                                sign in
                            </MDButton>
                        </MDBox>
                    </MDBox>
                </MDBox>
            </Card>
            {/* <Card>
            <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
            Access to reliable nutrition and fitness help has never been this EASY!
            </MDTypography>
            <MDTypography variant="h6" fontWeight="medium" color="black">
            Our lifestyle management telehealth app does away with barriers between healthcare professionals, 
            enabling an integrated team of doctors, dietitians, and 
            personal trainers to provide quality lifestyle medicine and preventative care.
            </MDTypography>
            </Card> */}
        </LandingLayout>
    );
}


export default Land;