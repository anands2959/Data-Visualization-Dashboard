import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <Box
      bgImage="url(/loginbg.png)" // Correctly reference image in the public directory
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="10px"
        boxShadow="lg"
        borderColor="white"
        textAlign="center"
        w={400}
        h={400}
        bg="rgba(255, 255, 255, 0.03)" 
        backdropFilter="blur(5px)" 
      >
        <h1 style={{ color: "white", fontSize:"30px"}}>!! Welcome Admin !!</h1>
        <form>
          <FormControl>
            <FormLabel style={{ color: "white", margin: '20px 10px 5px' }}>Username / Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="anand_admin@gmail.com"
              borderColor="white"
              color="white"
              _focus={{ outline: 0 }}
              w="90%"
              
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: "white",margin: '20px 10px 5px' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              borderColor="white"
              color="white"
              _focus={{ outline: "none" }}
              w="90%"
              disabled
            />
          </FormControl>
          <Button colorScheme="green" mt={6} w="90%" onClick={handleLogin} style={{margin: '30px 10px 5px'}}>
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent color="white"  bgImage='url(/loginbg.png)' overflow={"hidden"}>
                <AlertDialogHeader>!! Welcome Admin !!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
