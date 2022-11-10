/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

 

 =========================================================

  */

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [...datasets],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
}

export default configs;
