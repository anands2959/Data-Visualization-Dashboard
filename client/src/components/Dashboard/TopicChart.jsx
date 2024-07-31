import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";


const TopicsPolarAreaChart = ({ data }) => {
  const topics = data.map((item) => item.topic);
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map((item) => item.relevance),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        backgroundColor:
          colorMode === "dark"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(0, 0, 0, 0.8)",
        titleColor: colorMode === "dark" ? "#000" : "#fff",
        bodyColor: colorMode === "dark" ? "#000" : "#fff",
        borderColor: colorMode === "dark" ? "#000" : "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color:
            colorMode === "dark"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          color:
            colorMode === "dark"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          color: textColor,
          font: {
            family: "Roboto, sans-serif",
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          max: 5,
          color: textColor,
        },
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
