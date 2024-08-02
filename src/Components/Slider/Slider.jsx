import { Box, Button, Card, CardBody, Image, Text ,Heading} from "@chakra-ui/react";
import React from "react";
import slidebak from "../Assets/slide-1.jpeg";

const Slider=()=>{
    const slide={
        padding:"4% 10% 0 10%"
    }

    const overlay={
        position: "absolute",
        top: "230px",
        background: "none",
        border: "none",
        boxShadow: "none",
        padding: "50px",
        width: "60%",
        height: "auto"
    }
    
    return(
        <Box style={slide}>
            <Image src={slidebak} />
            <Box style={overlay}>
                <Heading m="0" textTransform="uppercase" color="#23262f" bg="#fae027" w="159px">
                    30% OFF
                </Heading>
                <Text m="0" fontSize="40px" lineHeight="1.2" fontWeight="bold" textAlign={"justify"}>
                    When Buying Parts <br/>With Installation
                </Text>
                <Text color={"#777e90"} textAlign={"justify"} margin="20px 0px 50px">
                Installation of parts in the services of <br/>our partners
                </Text>
                <Button type="submit"background={"#07DB96"} color="#fff" width={"125px"} fontSize={"small"}>Shop Now</Button>
            </Box>
        </Box>
    )
}

export default Slider;