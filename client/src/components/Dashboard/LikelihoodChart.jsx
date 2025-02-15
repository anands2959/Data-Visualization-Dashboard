import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Box,
  useColorModeValue,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

const LikelihoodRadarChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const chartData = {
    labels: data.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((entry) => entry.likelihood),
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
          font: {
            family: "Roboto, sans-serif",
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5,
          stepSize: 1,
          color: textColor,
        },
      },
    },
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4} ml={6}>
        Likelihood Chart
      </Heading>

      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodRadarChart;
