import { Box, Button, Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import left from "../Assets/banner1.jpeg";
import Right from "../Assets/banner2.jpeg";

const Banner=()=>{
    return(
        <Box mt="30px">
            <HStack pl={"10%"} paddingRight="10%" gap="25px">
                <Card>
                    <CardBody padding={"none"}>
                        <Box position="absolute" lineHeight="2" p="30px" background="linear-gradient(45deg, black, transparent)" w="100%" h="100%">
                            <Text color="#FFDC40" fontWeight="bold" fontSize="larger">MOTOR OILS</Text>
                            
                            <Text color="#fff" lineHeight="1.5" fontSize="14px">Synthetic moto oil with free shipping <br/>
                            Friction free life guaranteed</Text>

                            <Button bg="#E42327" mt="25px" w="15%" h="35px" fontSize="12px" color="#fff">Shop Now</Button>
                        </Box>
                        <Image src={left} />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody padding={"none"}>
                        <Box position="absolute" p="30px" background="linear-gradient(45deg, black, transparent)" w="100%" h="100%">
                            <Text background="#FFDC40" fontWeight="bold" fontSize="larger" w="30%">SAVE UP TO $40</Text>
                            
                            <Text color="#fff" lineHeight="1.5" fontSize="14px" mt="12px">Luxurious interior part for real aesthetes <br/>
                            Leather, fabric, ivory and more.</Text>

                            <Button bg="#E42327" mt="25px" w="15%" h="35px" fontSize="12px" color="#fff">Shop Now</Button>
                        </Box>
                        <Image src={Right} />
                    </CardBody>
                </Card>
            </HStack>
        </Box>
    )
}

export default Banner;