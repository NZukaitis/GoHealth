import React, { Component } from 'react';
import { Link } from "react-router-dom";

// @mui material components
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from "@mui/material/Checkbox";


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { List, ListItem, ListItemText, FixedSizeList } from "@mui/material"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import homeDecor4 from "assets/images/home-decor-4.jpeg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";


import { AppointmentPicker } from 'react-appointment-picker';

export default class App extends Component {
  state = {
    loading: false,
    continuousLoading: false
  };

  addAppointmentCallback = ({
    addedAppointment: { day, number, time, id },
    addCb
  }) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ loading: false });
      }
    );
  };

  removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ loading: false });
      }
    );
  };

  addAppointmentCallbackContinuousCase = ({
    addedAppointment: { day, number, time, id },
    addCb,
    removedAppointment: params,
    removeCb
  }) => {
    this.setState(
      {
        continuousLoading: true
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log(
            `Removed appointment ${params.number}, day ${params.day}, time ${params.time}, id ${params.id}`
          );
          removeCb(params.day, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ continuousLoading: false });
      }
    );
  };

  removeAppointmentCallbackContinuousCase = (
    { day, number, time, id },
    removeCb
  ) => {
    this.setState(
      {
        continuousLoading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ continuousLoading: false });
      }
    );
  };

  render() {
    const days = [
      [
        { id: 1, number: 1, isSelected: true, periods: 2 },
        { id: 2, number: 2 },
        null,
        { id: 3, number: '3', isReserved: true },
        { id: 4, number: '4' },
        null,
        { id: 5, number: 5 },
        { id: 6, number: 6 }
      ],
      [
        { id: 7, number: 1, isReserved: true, periods: 3 },
        { id: 8, number: 2, isReserved: true },
        null,
        { id: 9, number: '3', isReserved: true },
        { id: 10, number: '4' },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 }
      ],
      [
        { id: 13, number: 1 },
        { id: 14, number: 2 },
        null,
        { id: 15, number: 3, isReserved: true },
        { id: 16, number: '4' },
        null,
        { id: 17, number: 5 },
        { id: 18, number: 6 }
      ],
      [
        { id: 19, number: 1 },
        { id: 20, number: 2 },
        null,
        { id: 21, number: 3 },
        { id: 22, number: '4' },
        null,
        { id: 23, number: 5 },
        { id: 24, number: 6 }
      ],
      [
        { id: 25, number: 1, isReserved: true },
        { id: 26, number: 2 },
        null,
        { id: 27, number: '3', isReserved: true },
        { id: 28, number: '4' },
        null,
        { id: 29, number: 5 },
        { id: 30, number: 6, isReserved: true }
      ]
    ];
    const { loading, continuousLoading } = this.state;

    return (
    <DashboardLayout>
        <DashboardNavbar />
        <Card> <MDBox mb={2}> <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
              Please Fill Out the Form Below 
              
          </MDTypography>
          <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Care Provider Name" variant="standard"   />
            </MDBox>
            <MDBox mb={2}>
            <MDInput type="week" label="Week" value="2018-W23" />
            </MDBox>
            <MDBox mb={2}>
                <MDInput label="Addition Information for Care Provider " multiline rows={5} fullWidth/>
            </MDBox>
            
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" >
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox></MDBox></Card>
        <Card>
      <MDBox/>
      <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
              Choose A Date on the Calender
          </MDTypography>
        <AppointmentPicker
          addAppointmentCallback={this.addAppointmentCallback}
          removeAppointmentCallback={this.removeAppointmentCallback}
          initialDay={new Date('2018-05-05')}
          days={days}
          maxReservableAppointments={3}
          alpha
          visible
          selectedByDefault
          loading={loading}
        />

        <MDBox/>
    </Card>
      <Footer />
      
      
    </DashboardLayout>
    );
  }
}
