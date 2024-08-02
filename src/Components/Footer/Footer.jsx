import { Box, Card, CardBody, Text,Image, HStack, Slide, Spacer, Grid, CardHeader, List, UnorderedList, ListItem, Input, Button } from "@chakra-ui/react";
import React from "react";
import Payments from '../Assets/payments.png';
import { SocialIcon } from 'react-social-icons/component';

const Footer=()=>{
    return(
        <Box>
            <Card background={"#323232"} borderRadius={"none"}>
                <HStack pl={"10%"} paddingRight="10%" gap="25px" paddingTop={"20px"} paddingBottom={"20px"}>
                    <Card background={"#323232"} 
                    boxShadow={"none"} w="35%" color="gray">
                        <CardHeader color="#fff" pl="0px">
                            Contact US
                        </CardHeader>
                        <CardBody fontSize={"small"} pt="0px" pl="0px">
                            <Text>Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:</Text>
                            <br />
                            <Box>
                                <HStack>
                                    <Box width={"45%"}>
                                        <Text>PHONE NUMBER</Text>
                                        <Text color="#fff">9087654321</Text>
                                    </Box>
                                    <Spacer></Spacer>
                                    <Box width={"45%"}>
                                        <Text>EMAIL ADDRESS</Text>
                                        <Text color="#fff">careers@gmail.com</Text>
                                    </Box>
                                </HStack>
                                <HStack>
                                    <Box width={"45%"}>
                                        <br />
                                        <Text>OUR LOCATION</Text>
                                        <Text color="#fff">
                                            102, Athipalayam Rd,<br />
                                            Chennai, Tamil Nadu<br />
                                            6000028
                                        </Text>
                                    </Box>
                                    <Spacer></Spacer>
                                    <Box width={"45%"}>
                                        <Text>WORKING HOURS</Text>
                                        <Text color="#fff">Mon-Fri 10:00pm - 6:00pm</Text>
                                        <Text></Text>
                                        <Text></Text>
                                    </Box>
                                </HStack>
                            </Box>
                        </CardBody>
                    </Card>
                    
                    <Card background={"#323232"} boxShadow={"none"} w="15%" color="gray">
                        <CardHeader color="#fff">
                            Information
                        </CardHeader>
                        <CardBody fontSize={"small"} pt="0px">
                            <UnorderedList styleType="none" ml="0px" pb="20px">
                                <ListItem pb="5px">About Us</ListItem>
                                <ListItem pb="5px">Delivery Information</ListItem>
                                <ListItem pb="5px">Privacy Policy</ListItem>
                                <ListItem pb="5px">Brands</ListItem>
                                <ListItem pb="5px">Contact Us</ListItem>
                                <ListItem pb="5px">Returns</ListItem>
                                <ListItem pb="5px">Site Map</ListItem>
                            </UnorderedList>
                        </CardBody>
                    </Card>
                    
                    <Card background={"#323232"} boxShadow={"none"} w="15%" color="gray">
                        <CardHeader color="#fff">My Account</CardHeader>
                        <CardBody fontSize={"small"} pt="0px">
                            <UnorderedList styleType="none" ml="0px" pb="20px">
                                    <ListItem pb="5px">Store Location</ListItem>
                                    <ListItem pb="5px">Order History</ListItem>
                                    <ListItem pb="5px">Wish List</ListItem>
                                    <ListItem pb="5px">Newsletter</ListItem>
                                    <ListItem pb="5px">Special Offers</ListItem>
                                    <ListItem pb="5px">Gift Certificates</ListItem>
                                    <ListItem pb="5px">Affiliate</ListItem>
                                </UnorderedList>
                        </CardBody>
                    </Card>
                    
                    <Card background={"#323232"} boxShadow={"none"} w="35%" color="gray"> 
                        <CardHeader color="#fff">Newsletter</CardHeader>
                        <CardBody fontSize={"small"} pt="0px">
                            <form action="">
                            <Text>Enter Your email below to subscribe to our newsletter<br/>and keep up to date with discounts and special offers.</Text>
                            <br />
                            <HStack>
                                <Input type="email" placeholder="user@example.com" />
                                <Button type="submit"background={"#07DB96"} color="#fff" width={"125px"} fontSize={"small"}>Subscribe</Button>
                            </HStack>
                            </form>
                            <br />
                            <Box>
                                <Text>Follow us on Social networks</Text>
                                <HStack w="100px">
                                    <SocialIcon network="Instagram" url="www.instagram.com" w="35px !important" h="35px" />
                                    <SocialIcon network="Instagram" url="www.instagram.com" w="35px" h="35px" />
                                    <SocialIcon network="Instagram" url="www.instagram.com" w="35px" h="35px" />
                                </HStack>
                            </Box>
                        </CardBody>
                    </Card>
                </HStack>
            </Card>
            <Card background={"black"} color="gray" borderRadius={"none"} height={"5% !important"} >
                <CardBody pl={"10%"} paddingRight="10%" pt="10px" pb="10px">
                    <HStack>
                    <Text fontSize={"small"}>
                        Powered by <span style={{color:"#fff"}}>React / Next.js</span> - Designed by <span style={{color:"#fff"}}>Siva</span>
                    </Text>
                    <Spacer></Spacer>
                    <Box>
                        <Image src={Payments} />
                    </Box>
                    </HStack>
                </CardBody>
            </Card>
        </Box>
    )
}

export default Footer;