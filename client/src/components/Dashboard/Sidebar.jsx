import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdSettings,
  MdExitToApp,
  MdPeople,
  MdCalendarToday,
  MdAnalytics,
  MdChat,
  MdFileDownload,
  MdShield,
} from "react-icons/md";

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const toast = useToast();
  const {colorMode } = useColorMode();
  const hoverBg = {
    backgroundColor:colorMode === "dark" ? "gray.700" : "gray.200",
    borderRadius: "5px"
  }



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };
  const handleconstrution = () => {
    toast({
      title: "Under the Construction",
      description: "You remain on the dashboard",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };
  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
  return (
    <Container>
      <IconButton
        icon={<HamburgerIcon />}
        // color={colorMode === "dark" ? "white" : "black"}
        color={"white"}
        fontSize={25}
        border={'none'}
        onClick={onOpen}
        position="fixed"
        top={8}
        left={4}
        transform="translateY(-50%)"
        zIndex={100}
        colorScheme="teal"
        variant="outline"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="26px"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <SettingsIcon mr={2} /> Admin Menu
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3} fontSize="2xl" alignItems={'center'}>
              {/* ... Your list items */}
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleDashboard}
              >
                <ListIcon as={MdDashboard} fontSize="xl" />
                Dashboard
              </ListItem>
              
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdPeople} fontSize="xl" />
                Users
              </ListItem>
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdCalendarToday} fontSize="xl" />
                Calendar
              </ListItem>
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdChat} fontSize="xl" />
                Chat
              </ListItem>
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdAnalytics} fontSize="xl" />
                Analytics
              </ListItem>
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdFileDownload} fontSize="xl" />
                Invoice
              </ListItem>
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdShield} fontSize="xl" />
                Authentication
              </ListItem>
              <ListItem
                cursor="pointer"
                padding="8px 20px"
                display="flex"
                alignItems="center"
                _hover={hoverBg}
                onClick={handleconstrution}
              >
                <ListIcon as={MdSettings} fontSize="xl" />
                Settings
              </ListItem>
              <ListItem
                cursor="pointer"
                display="flex"
                alignItems="center"
                padding="8px 20px"
                _hover={hoverBg}
                onClick={handleLogout}
              >
                <ListIcon as={MdExitToApp} fontSize="xl" />
                Logout
              </ListItem>
            </List>

            <Flex alignItems="center" mt="30%" _hover={hoverBg} padding={2}>
              <Avatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/91383238?v=4&size=64"
                mr={4}
              />
              <Box>
                <Heading size="md">Anand Kr. Sharma</Heading>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Web Developer
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default AdminDashboard;
