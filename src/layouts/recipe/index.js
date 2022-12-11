import * as React from "react";

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

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { List, ListItem, ListItemText, FixedSizeList } from "@mui/material"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";


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


function Recipe() {
    interface ExpandMoreProps extends IconButtonProps {
        expand: boolean;
    }

    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <Typography variant="body2" fontWeight="bold" color="text.secondary"> View Recipe <IconButton {...other} /> </Typography>;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const [expanded3, setExpanded3] = React.useState(false);
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const cardStyle = {
        display: "block",
    };


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
                <Grid container spacing={3}>
{/* card */}
<Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <Card variant="outlined" style={cardStyle}>
                                <CardHeader
                                    title="Recipe"
                                    subheader="Vegan/Vegetarian"
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={homeDecor1}
                                    sx={{objectPosition: "center"}}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        General overview of the recipe
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded1}
                                        onClick={handleExpandClick1}
                                        aria-expanded1={expanded1}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Description of the recipe</Typography>
                                        <Typography paragraph>Ingredents:</Typography>
                                            <List sx={{ listStyleType: 'disc' }}>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>

                                            </List> <br></br>
                                        <Typography paragraph>Steps:</Typography>
                                        <List sx={{ listStyleType: 'disc' }}>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>

                                            </List>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </MDBox>
                    </Grid>

{/* new card */}
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <Card variant="outlined" style={cardStyle}>
                                <CardHeader
                                    title="Recipe"
                                    subheader="Vegan/Vegetarian"
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={homeDecor1}
                                    sx={{objectPosition: "center"}}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        General overview of the recipe
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded2}
                                        onClick={handleExpandClick2}
                                        aria-expanded2={expanded2}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Description of the recipe</Typography>
                                        <Typography paragraph>Ingredents:</Typography>
                                            <List sx={{ listStyleType: 'disc' }}>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>

                                            </List> <br></br>
                                        <Typography paragraph>Steps:</Typography>
                                        <List sx={{ listStyleType: 'disc' }}>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>

                                            </List>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </MDBox>
                    </Grid>

                    {/* new card */}
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <Card variant="outlined" style={cardStyle}>
                                <CardHeader
                                    title="Recipe"
                                    subheader="Vegan/Vegetarian"
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={homeDecor1}
                                    sx={{objectPosition: "center"}}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        General overview of the recipe
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded3}
                                        onClick={handleExpandClick3}
                                        aria-expanded3={expanded3}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Description of the recipe</Typography>
                                        <Typography paragraph>Ingredents:</Typography>
                                            <List sx={{ listStyleType: 'disc' }}>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> ingredient</ListItemText>
                                                </ListItem>

                                            </List> <br></br>
                                        <Typography paragraph>Steps:</Typography>
                                        <List sx={{ listStyleType: 'disc' }}>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>
                                                <ListItem sx={{display: 'list-item'}}>
                                                    <ListItemText> step x</ListItemText>
                                                </ListItem>

                                            </List>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </MDBox>
                    </Grid>

                </Grid>
                <MDBox mt={4.5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>

                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>

                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>

                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={8}>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                        </Grid>
                    </Grid>
                </MDBox>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}


export default Recipe