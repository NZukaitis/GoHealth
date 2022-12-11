import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import image from "../../../assets/images/ivana-square.jpg";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { CardMedia } from '@mui/material';

// Material Dashboard 2 React components
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


function RecipeCard({ image, label, title, description, action}) {
    return (
        <Card>
            <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
                <MDBox textAlign="left" lineHeight={2}>
                    <MDTypography variant="h4" fontWeight="bold" color="text" display="flex">
                        {title}
                    </MDTypography>
                </MDBox>
            </MDBox>
            <Divider />
            <MDBox pb={2} px={2}>
                <CardMedia
                    src={image}
                    component="img"
                    title={title}
                    sx={{
                        maxWidth: "100%",
                        margin: 0,
                        boxShadow: ({ boxShadows: { md } }) => md,
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </MDBox>
            <MDBox>
                <MDTypography variant="h6" fontWeight="light" color="text" padding="20px" display="flex">
                    {description}
                </MDTypography>
            </MDBox>
            <Divider />
            <MDBox mt={1} mx={0.5}>
                <MDBox mb={1}>
                    {action.type === "internal" ? (
                        <MDTypography
                            component={Link}
                            to={action.route}
                            variant="h5"
                            textTransform="capitalize"
                        >
                            {label}
                        </MDTypography>
                    ) : (
                        <MDTypography
                            component="a"
                            href={action.route}
                            target="_blank"
                            rel="noreferrer"
                            variant="h5"
                            textTransform="capitalize"
                        >
                            {label}
                        </MDTypography>
                    )}
                </MDBox>
            </MDBox>
        </Card >
    );
}

// Setting default values for the props of Card
RecipeCard.defaultProps = {
    color: "info",
    percentage: {
        color: "success",
        text: "",
        label: "",
    },
};

// Typechecking props for the Card
RecipeCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]),
        route: PropTypes.string.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "light",
            "dark",
            "white",
        ]).isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default RecipeCard;