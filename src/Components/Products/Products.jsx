import { Box, Button, Card, CardBody, Divider, Flex, Grid, GridItem, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from '@chakra-ui/react';
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons';
import product1 from '../Assets/product-1.jpeg';
import product2 from '../Assets/product-2.jpeg';
import product3 from '../Assets/product-3.jpeg';
import product4 from '../Assets/product-4.jpeg';
import product5 from '../Assets/product-5.jpeg';
import preview from '../Assets/svg/quickview.svg';

const Products=()=>{
    return(
        <Box pl="10%" pr="10%" mb="40px">
            <Flex>
                <Text fontWeight="bold">Featured Products</Text>
                <Spacer></Spacer>
                <Box gap="15px" display={"flex"}>
                    <Button p="0px 5px 0px 5px" borderTopLeftRadius="20px" borderBottomRightRadius="20px" fontSize="small" h="30px" bg="black" color="#fff">ALL</Button>
                    <Link href="/#" fontSize="14px" p="2px" color="gray">Power Tools</Link>
                    <Link href="/#" fontSize="14px" p="2px" color="gray">Hand Tools</Link>
                    <Link href="/#" fontSize="14px" p="2px" color="gray">Plumbing</Link>
                    <Button type="submit" value="<" p="0px 5px 0px 5px" borderTopLeftRadius="20px" borderBottomRightRadius="20px" fontSize="small" h="30px" bg="#07DB96" color="#fff"><ChevronLeftIcon fontSize={"large"} /></Button>
                    <Button type="submit" value=">" p="0px 5px 0px 5px" borderTopLeftRadius="20px" borderBottomRightRadius="20px" fontSize="small" h="30px" bg="#07DB96" color="#fff" ml="-10px"><ChevronRightIcon fontSize={"large"} /></Button>
                </Box>
            </Flex>
            <Divider border="1px solid gray" mt="5px"></Divider>
            <Grid templateColumns="repeat(5,1fr)" gap="25px" mt="10px">
                <GridItem>
                    <Card>
                        <CardBody>
                        <Image src={preview} width={"15px"} position={"absolute"} top="15px" right={"10px"}/>
                            <Image src={product1} />
                            <Text fontSize="11px" color="gray">SKU: A43-44328-B</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} mt="6px" lineHeight="1.4">Glossy Gray 19' Aluminium Wheel AR-19</Text>
                            <Text fontSize="12px" fontWeight="600" mt="6px">$589.00</Text>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card>
                        <CardBody>
                        <Image src={preview} width={"15px"} position={"absolute"} top="15px" right={"10px"}/>
                            <Image src={product2} />
                            <Text fontSize="11px" color="gray">SKU: 729-51203-B</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} mt="6px" lineHeight="1.4">Twin Exhaust Pipe From Brandix Z54</Text>
                            <Text fontSize="12px" fontWeight="600" mt="6px">$759.00</Text>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card height="100%">
                        <CardBody>
                        <Image src={preview} width={"15px"} position={"absolute"} top="15px" right={"10px"}/>
                            <Image src={product3} />
                            <Text fontSize="11px" color="gray">SKU: 573-49386-C</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} mt="6px" lineHeight="1.4">Motor Oil Level 5</Text>
                            <Text fontSize="12px" fontWeight="600" mt="6px">$23.00</Text>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card height="100%">
                        <CardBody>
                        <Image src={preview} width={"15px"} position={"absolute"} top="15px" right={"10px"}/>
                            <Image src={product4} />
                            <Text fontSize="11px" color="gray">SKU: 753-38573-B</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} mt="6px" lineHeight="1.4">Brandix Engine Block Z4</Text>
                            <Text fontSize="12px" fontWeight="600" mt="6px">$452.00</Text>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card height="100%">
                        <CardBody>
                        <Image src={preview} width={"15px"} position={"absolute"} top="15px" right={"10px"}/>
                            <Image src={product5} />
                            <Text fontSize="11px" color="gray">SKU: 472-67282-Z</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} mt="6px" lineHeight="1.4">Brandix Clutch Discs Z175</Text>
                            <Text fontSize="12px" fontWeight="600" mt="6px">$345.00</Text>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Products;