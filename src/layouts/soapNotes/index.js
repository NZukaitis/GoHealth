/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

 

 =========================================================

  */

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import TextField from '@mui/material/TextField';

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
    const { columns, rows } = authorsTableData();
    const { columns: pColumns, rows: pRows } = projectsTableData();

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    SOAP Notes
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <Grid item xs={12} mt={2} ml={5} mb={5}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Client Name"
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Care Provider"
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Date Accessed"
                                    />
                                </Grid>
                                <Grid item xs={12} ml={5} mb={5}>
                                    {/* <MDInput type="notes" label="Notes" variant="standard" fullWidth  /> */}
                                    <TextareaAutosize
                                        label="S"
                                        minRows={6}
                                        placeholder="Subjective Notes"
                                        style={{ width: 200 }}
                                    />
                                    <TextareaAutosize
                                        label="O"
                                        minRows={6}
                                        placeholder="Objective Notes"
                                        style={{ width: 200 }}
                                    />
                                    <TextareaAutosize
                                        label="A"
                                        minRows={6}
                                        placeholder="Assessment Notes"
                                        style={{ width: 500 }}
                                    />
                                    <TextareaAutosize
                                        label="P"
                                        minRows={6}
                                        placeholder="Plan Notes"
                                        style={{ width: 500 }}
                                    />
                                </Grid>
                                <MDButton variant="contained" color="secondary">Submit</MDButton>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Tables;
