import { Box, Card, CardBody, Container, Divider, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import help24 from "../Assets/svg/24-hours.svg";
import free from "../Assets/svg/free-delivery.svg";
import security from "../Assets/svg/payment-security.svg";
import tag from "../Assets/svg/tag.svg";

const Help=()=>{
    return(
        <Box pl={"10%"} paddingRight="10%">
            <Divider></Divider>
            <Box padding="30px 80px 30px 80px">
                <HStack>
                    <HStack w="100%">
                        <Image src={free} />
                        <Box>
                            <Text color="black" fontWeight="bold">Free Shipping</Text>
                            <Text color="gray" fontSize="12px">For orders from $50</Text>
                        </Box>
                    </HStack>

                    <HStack w="100%">
                        <Image src={help24} />
                        <Box>
                            <Text color="black" fontWeight="bold">Support 24/7</Text>
                            <Text color="gray" fontSize="12px">Call us anytime</Text>
                        </Box>
                    </HStack>

                    <HStack w="100%">
                        <Image src={security} />
                        <Box>
                            <Text color="black" fontWeight="bold">100% Safety</Text>
                            <Text color="gray" fontSize="12px">Only secure payments</Text>
                        </Box>
                    </HStack>

                    <HStack w="100%">
                        <Image src={tag} />
                        <Box>
                            <Text color="black" fontWeight="bold">Hot Offers</Text>
                            <Text color="gray" fontSize="12px">Discounts up $90</Text>
                        </Box>
                    </HStack>
                </HStack>
            </Box>
           
        </Box>
    )
}

export default Help;