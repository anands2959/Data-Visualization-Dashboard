import React, { useState } from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = ({ onSearch }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (onSearch) {
      onSearch(event.target.value); // Pass search term to parent component
    }
  };

  return (
    <Box
      py={2}
      bgImage="url(/loginbg.png)"
      bgSize="cover"
      bgPosition="center"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Box w="80%">
            <Input
              type="text"
              placeholder="Search..."
              size="lg"
              borderRadius="5px"
              bg={colorMode === "light" ? "white" : "gray.800"}
              px={4}
              py={1}
              color={colorMode === "light" ? "gray.800" : "white"}
              _placeholder={{
                color: colorMode === "light" ? "gray.500" : "gray.300",
              }}
              _focus={{ outline: "none" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Box>
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Toggle Theme"
                icon={
                  colorMode === "light" ? (
                    <MoonIcon boxSize={6} />
                  ) : (
                    <SunIcon boxSize={6} />
                  )
                }
                color={"white"}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon boxSize={7} />}
                color={"white"}
                bg="transparent"
                border="none"
              >
                <Badge colorScheme="red" color="red">
                  3
                </Badge>
              </IconButton>
              <Menu>
                <MenuButton
                  color={"white"}
                  as={IconButton}
                  icon={<ChevronDownIcon boxSize={7} />}
                  variant="unstyled"
                />
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
              <Avatar
                size="sm"
                src="https://avatars.githubusercontent.com/u/91383238?v=4&size=64"
                ml={3}
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
