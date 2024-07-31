import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Heading, useColorMode } from "@chakra-ui/react";


const IntensityChart = ({ data }) => {
  const { colorMode } = useColorMode(); 
  const intensityData = data.map((item) => item.intensity);
  const years = data.map((item) => item.start_year);

  const getColor = (value) => {
    const colors = [
      "#279861", // Green
      "#F2B93B", // Yellow
      "#FF8000", // Orange
      "#FF453A", // Red
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };
  const lightenColor = (color, percent) => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };
  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Intensity",
        backgroundColor: intensityData.map((value) => getColor(value)),
        borderColor: intensityData.map((value) => getColor(value)),
        borderWidth: 1,
        borderRadius:7,
        data: intensityData,
        hoverBackgroundColor: intensityData.map((value) =>
          lightenColor(getColor(value), 20)
        ),
        hoverBorderColor: intensityData.map((value) =>
          lightenColor(getColor(value), 20)),
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },

      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "start",
        offset: -20,
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value) => value + "%",
        shadowBlur: 10,
        shadowColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          color: colorMode === "dark" ? "gray" : "rgba(0,0,0,0.1)",
          display: true,
        },
        ticks: {

          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
          callback: (value) => value + "%",
        },
      },
    },
    animation: {
      duration: 3000,
      easing: "easeInOutQuart", // Use a smooth easing function
      mode: "progressive",
    },
  };

  return (
    <div
      style={{
        margin: "50px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Heading as="h2" mb={2} ml={3} mt={1}>
        Intensity Chart
      </Heading>
      <Bar
        data={chartData}
        options={chartOptions}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default IntensityChart;
