import { Box, Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import brand1 from "../Assets/brand-1.png";
import brand2 from "../Assets/brand-2.png";
import brand3 from "../Assets/brand-3.png";
import brand4 from "../Assets/brand-4.png";
import brand5 from "../Assets/brand-5.png";
import brand6 from "../Assets/brand-6.png";
import brand7 from "../Assets/brand-7.png";
import brand8 from "../Assets/brand-8.png";
import brand9 from "../Assets/brand-9.png";
import brand10 from "../Assets/brand-10.png";
import brand11 from "../Assets/brand-11.png";
import brand12 from "../Assets/brand-12.png";
import brand13 from "../Assets/brand-13.png";
import brand14 from "../Assets/brand-14.png";
import brand15 from "../Assets/brand-15.png";
import brand16 from "../Assets/brand-16.png";


const Parts=()=>{
    const common={
        width:"15%",
        border: "1px solid lightgray",
        boxSizing:"border-box"
    }
    const textclr={
        textAlign:"center",
        fontSize:"small",
        color:"gray"

    }
    const cartbodystyle={
        padding:"15px 22px"
    }
    return(
        <Box p={"4% 10% 4% 10%"}>
            <HStack gap={"0px"}>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand1} />
                    <Text style={textclr}>AIMPARTS</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand2} />
                    <Text style={textclr}>WINDENGINE</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand3} />
                    <Text style={textclr}>TURBOELECTRIC</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand4} />
                    <Text style={textclr}>STARTONE</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand5} />
                    <Text style={textclr}>BRANDIX</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand6} />
                    <Text style={textclr}>ABS-BRAND</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand7} />
                    <Text style={textclr}>GREATCIRCLE</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand8} />
                    <Text style={textclr}>JUSTROMB</Text>
                </CardBody>
            </Card>
            </HStack>


            <HStack gap={"0px"}>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand9} />
                    <Text style={textclr}>FASTWHEELS</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand10} />
                    <Text style={textclr}>STROYKA-X</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand11} />
                    <Text style={textclr}>MISSION-51</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand12} />
                    <Text style={textclr}>FUELCORP</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand13} />
                    <Text style={textclr}>REDGATE</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand14} />
                    <Text style={textclr}>BLOCKS</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand15} />
                    <Text style={textclr}>BLACKBOX</Text>
                </CardBody>
            </Card>
            <Card style={common}>
                <CardBody style={cartbodystyle}>
                    <Image src={brand16} />
                    <Text style={textclr}>sQUAREGARAGE</Text>
                </CardBody>
            </Card>
            </HStack>
        </Box>
    )
}

export default Parts;