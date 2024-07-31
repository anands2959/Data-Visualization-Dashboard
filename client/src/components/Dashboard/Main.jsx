import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "https://data-visualization-dashboard-nfnh.onrender.com";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData with the full dataset
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      // Reset to original data if search term is empty
      setFilteredData(data);
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      const newFilteredData = data.filter(item =>
        item.name && item.name.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredData(newFilteredData);
    }
  };

  return (
    <ChakraProvider>
      <Navbar onSearch={handleSearch} />
      <AdminDashboard />
      <IntensityChart data={filteredData} />
      <Flex direction={{ base: "column", md: "row" }} m={50}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={filteredData} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsRadarChart data={filteredData} />
        </Box>
      </Flex>
      <RelevanceBubbleChart data={filteredData} />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Box>
          <PieChart data={filteredData} />
        </Box>
        <Box>
          <LikelihoodRadarChart data={filteredData} />
        </Box>
      </Grid>
      <CountryChart data={filteredData} />
      <Footer />
    </ChakraProvider>
  );
};

export default Main;
