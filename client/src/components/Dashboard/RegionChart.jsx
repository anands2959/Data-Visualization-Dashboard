import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Box, Heading, useColorMode } from "@chakra-ui/react";

// Custom plugin to draw text in the center
const centerTextPlugin = {
  id: 'doughnutCenterText',
  beforeDraw: function(chart) {
    const { ctx, chartArea: { width, height } } = chart;
    const { hoveredLabel, hoveredValue, color } = chart.config.options.plugins.doughnutCenterText;
    ctx.save();
    

    // Set text color based on the mode
    ctx.fillStyle = color;

    // Draw the label
    // ctx.font = 'bold 16px Arial';
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.fillText(hoveredLabel || '', width / 2, height / 2 - 10);

    // Draw the value
    ctx.font = 'bold 65px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(hoveredValue !== null ? hoveredValue : '', width / 2, height / 2 + 10);
    ctx.restore();
  },
};

const RegionChart = ({ data }) => {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);
  const { colorMode } = useColorMode();

  const regionCounts = {};
  data.forEach((item) => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
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
        callbacks: {
          label: function (tooltipItem) {
            const value = chartData.datasets[0].data[tooltipItem.dataIndex];
            setHoveredValue(value);
            return `${value}`;
          },
        },
      },
      legend: {
        position: "right",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      doughnutCenterText: {
        hoveredLabel: hoveredLabel,
        hoveredValue: hoveredValue,
        color: colorMode === 'dark' ? 'white' : 'black',
      },
    },
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      <Doughnut
        data={chartData}
        options={chartOptions}
        plugins={[centerTextPlugin]}
      />
    </Box>
  );
};

export default RegionChart;
