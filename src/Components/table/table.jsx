import { Box, Button, Text, WrapItem, Flex, Avatar } from '@chakra-ui/react'

export default function Table({name,number,profile,id,onOpen,btnItems}) {
    return (
        <Box marginTop={"70px"}>
            <Box marginBottom={"30px"} key={id}>
                <Box display={"flex"}  width={"100%"} justifyContent={"space-between"}>
                    <WrapItem width={"200px"} >
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Box>
                            <Text color={"gray.700"}>Name</Text>
                            <Text fontWeight={"bold"} fontSize={"13px"}>{name}</Text>
                        </Box>
                    </WrapItem>
                    <Box width={"200px"} display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Phone</Text>
                        <Text fontWeight={"500"}>{number}</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>User Id:</Text>
                        <Text fontWeight={"600"}>{id}</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text></Text>
                        <Text fontWeight={"500"}></Text>
                    </Box>
                    <Box display={{ base: "block", md: "block", lg: "none" }}>
                        <Button onClick={()=>{btnItems(name,number,id)}} marginLeft={"120px"} color={"#fff"} size="sm" _hover={{ backgroundColor: "0d1140" }} backgroundColor={"#24349d"}>View Details</Button>
                    </Box>
                    <Box borderBottom={"2px solid #000"}></Box>

                </Box>
                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
            </Box>
        </Box>
    );
}