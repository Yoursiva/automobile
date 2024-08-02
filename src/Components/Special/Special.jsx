import { Box, Card, CardBody, CardHeader, Divider, Grid, GridItem, HStack, Image, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";
import top1 from "../Assets/product-6.jpeg";
import top2 from "../Assets/product-7.jpeg";
import top3 from "../Assets/product-8.jpeg";
import special1 from "../Assets/product-9.jpeg";
import special2 from "../Assets/product-10.jpeg";
import special3 from "../Assets/product-11.jpeg";
import best1 from "../Assets/product-12.jpeg";
import bestw from "../Assets/product-13.jpeg";
import preview from "../Assets/svg/quickview.svg";

const Special=()=>{
    return(
        <Box pl={"10%"} paddingRight="10%" mt="20px" mb="20px">
            <Grid templateColumns="repeat(3,1fr)" gap="25px">
                    <GridItem>
                        <Card boxShadow={"none"}>
                            <CardHeader pb="5px" color="black" fontWeight={"bold"}>Top Rated Products</CardHeader>
                            <Divider orientation='horizontal' color="gray" />
                            <CardBody p="0px" > 
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={top1} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Fantastic 12-Stroke Engine With A Power of 1991 hp</Text>
                                                <Text fontWeight={"bold"}>$2579.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={top2} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Set of Four 19 Inch Spiked Tires</Text>
                                                <Text fontWeight={"bold"}>$327.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={top3} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>40 Megawatt Low Beam Lamp</Text>
                                                <Text fontWeight={"bold"}>$4.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                

                                </Card>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                    <Card boxShadow={"none"}>
                            <CardHeader pb="5px" color="black" fontWeight={"bold"}>Special Offers</CardHeader>
                            <Divider orientation='horizontal' color="gray" />
                            <CardBody p="0px" > 
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={special1} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Brandix Manual Five Speed Gearbox</Text>
                                                <Text fontWeight={"bold"}>$879.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={special2} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Set of Car Floor Mats Brandix Z4</Text>
                                                <Text fontWeight={"bold"}>$78.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={special3} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Taillights Brandix z54</Text>
                                                <Text fontWeight={"bold"}>$60.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                

                                </Card>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem>
                    <Card boxShadow={"none"}>
                            <CardHeader pb="5px" color="black" fontWeight={"bold"}>Bestsellers</CardHeader>
                            <Divider orientation='horizontal' color="gray" />
                            <CardBody p="0px" > 
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={best1} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Brandix Engine Block Z4</Text>
                                                <Text fontWeight={"bold"}>$453.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={bestw} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Brandix Clutch Discs Z175</Text>
                                                <Text fontWeight={"bold"}>$345.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                                <Card mt="15px">
                                    <CardBody padding={"8px"}>
                                        <HStack>
                                            <Image src={special1} width={"25%"}/>
                                            <Box w="68%" fs="15px" lineHeight={"1.2"}>
                                                <Image src={preview} width={"15px"} position={"absolute"} top="10px" right={"10px"}/>
                                                <Text>Brandix Manual Five Speed Gearbox</Text>
                                                <Text fontWeight={"bold"}>$879.00</Text>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                

                                </Card>
                            </CardBody>
                        </Card>
                    </GridItem>
            </Grid>
        </Box>
    )
}

export default Special;