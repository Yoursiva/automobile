import React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Center,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Spacer,
  Text,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Select,Image, InputGroup, InputLeftElement,Input,InputRightElement,Divider 
} from "@chakra-ui/react";
import logo from "../Assets/logo.png";
import car from "../Assets/svg/car.svg";
import search from "../Assets/svg/search.svg";
import heart from "../Assets/svg/heart.svg";
import person from "../Assets/svg/person.svg";
import cart from "../Assets/svg/cart-20.svg";
import {HamburgerIcon} from '@chakra-ui/icons';



const Navbar = () => {
  return (
    <>
      <Flex as="nav" alignItems="center" w="100%" h="150px"  bg="white" color="black" position="sticky" top="0" zIndex="1000" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" justifyContent="space-between" flexDirection={"column"}>
        <Box  border="1px solid #fff" w={"100%"} h="100%">
          <Flex fontSize={"small"} padding="10px 10% 0px">
              <HStack spacing="14px" textColor="#656262">
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Store Location</Text>
                <Text>Track Order</Text>
                <Text>Blog</Text> 
              </HStack>
              <Spacer />
              <HStack  textColor="#656262" justifyContent="end" gap="0px">
                <Text >Compare:</Text><Text as='span' fontWeight="bold" ml="5px">2</Text>
                <Text ml="15px">Currency:</Text>
                <Select fontWeight={700} w="23%" fontSize="small" border="none" h="unset" >
                  <option value='option1' selected>RS</option>
                  <option value='option2'>DL</option>
                  <option value='option3'>Er</option>
                </Select>
                <Text ml="15px">Language:</Text>
                <Select fontWeight={700} w="23%" fontSize="small" border="none" h="unset">
                      <option value='option1'>EN</option>
                      <option value='option2' selected>TM</option>
                      <option value='option3'>SP</option>
                </Select>
              </HStack>
        </Flex>
        <Flex textColor="#656262" h='75px' padding="0px 10%" borderBottom="1px solid lightgray">
            <HStack w="80%">
                <Box boxSize='sm' height="46px"width= "auto"><Image src='' alt="AM"  h="45px"/></Box>
                <Box bg="yellow">
                <InputGroup bg="yellow" pl="2rem">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Image src={car} alt="car" h="20px" />}
                    height="100%"
                  />
                  <Select placeholder="Select option" bg="yellow" border="none">
                    <option value="option1">Select Vehicle</option>
                    <option value="option2">Select Vehicle</option>
                    <option value="option3">Select Vehicle</option>
                  </Select>
                </InputGroup>
                </Box>
                <Box width="40%">
                <InputGroup>
                  <Input placeholder="Enter Keyword or Part Number" variant={"filled"} />
                  <InputRightElement pointerEvents="none">
                  <Image src={search} alt="car" h="20px" color="gray.500"/>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </HStack>
            <HStack gap="20px" width={"25%"}>
                <Box width="25px"><img src={heart} /></Box>
                <Flex ><HStack><img src={person} width="25px" /><Text ><Text as='p' fontSize="10px">Hello, Log In</Text><Text fontSize="15px !important" fontWeight={700}>My Account</Text></Text></HStack></Flex>
                <Flex >
                  <HStack gap={"1rem"}>
                    <img src={cart} width="25px" />
                    <Text ><Text as='p' fontSize="10px">Shopping Cart</Text><Text fontSize="15px !important" fontWeight={700}>$1468.60</Text></Text>
                  </HStack>
                </Flex>
            </HStack>

            
        </Flex>
        

        <Flex textColor="#656262" fontSize="13px" padding="7px 10%">
            <HStack width={"180px"} gap={"0px"}>
              <HamburgerIcon fontSize="x-large" />
             
              <Select height="30px" border="none" fontWeight={700} fontSize={"10px"}>
                  <option value='option1'>Select Category</option>
              </Select>
              <Divider orientation='vertical' h="70%" margin={"0px 21px 0px 0px"} border="1px solid black" />
            </HStack>
             
            <HStack w="80%" gap={"1rem"}>
                <Text fontWeight={700}>Mome</Text>
                <Text fontWeight={700}>Mega Menu</Text>
                <Text fontWeight={700}>Shop</Text>
                <Text fontWeight={700}>Blog</Text>
                <Text fontWeight={700}>Account</Text>
                <Text fontWeight={700}>Pages</Text>
                <Text fontWeight={700}>Buy Theme</Text>
            </HStack>
            <HStack >
                <Box> <HStack ><Text cs='p' width="45px">Call Us:</Text> <Text cs='p' fontWeight={700}>089521267</Text></HStack></Box>
            </HStack>
        </Flex>
        
        </Box>
    </Flex>
    </>
  );
};

export default Navbar;
