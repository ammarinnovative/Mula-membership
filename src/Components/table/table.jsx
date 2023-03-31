import { Box, Button, Text, WrapItem, Flex, Avatar } from '@chakra-ui/react'

export default function Table() {
    return (
        <Box marginTop={"70px"}>
            <Box marginBottom={"30px"}>
                <Box display={"flex"}  width={"100%"} justifyContent={"space-between"}>
                    <WrapItem  >
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Box>
                            <Text color={"gray.700"}>Name</Text>
                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                        </Box>
                    </WrapItem>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Date,</Text>
                        <Text fontWeight={"500"}>15Feb 2023</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Item:</Text>
                        <Text fontWeight={"500"}>(Silver Tier)</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Pay</Text>
                        <Text fontWeight={"500"}>$10,00</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Button  border={"1px solid black"}>View Details</Button>
                    </Box>
                    <Box display={{ base: "block", md: "block", lg: "none" }}>
                        <Button marginLeft={"120px"} color={"#fff"} size="sm" _hover={{ backgroundColor: "0d1140" }} backgroundColor={"#24349d"}>View Details</Button>
                    </Box>
                    <Box borderBottom={"2px solid #000"}></Box>

                </Box>
                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
            </Box>
            <Box marginBottom={"30px"}>
                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                    <WrapItem  >
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Box>
                            <Text color={"gray.700"}>Name</Text>
                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                        </Box>
                    </WrapItem>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Date,</Text>
                        <Text fontWeight={"500"}>15Feb 2023</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Item:</Text>
                        <Text fontWeight={"500"}>(Silver Tier)</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Pay</Text>
                        <Text fontWeight={"500"}>$10,00</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Button border={"1px solid black"}>View Details</Button>
                    </Box>
                    <Box display={{ base: "block", md: "block", lg: "none" }}>
                        <Button marginLeft={"120px"} color={"#fff"} size="sm" _hover={{ backgroundColor: "0d1140" }} backgroundColor={"#24349d"}>View Details</Button>
                    </Box>
                    <Box borderBottom={"2px solid #000"}></Box>

                </Flex>
                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
            </Box>
            <Box marginBottom={"30px"}>
                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                    <WrapItem  >
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Box>
                            <Text color={"gray.700"}>Name</Text>
                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                        </Box>
                    </WrapItem>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Date,</Text>
                        <Text fontWeight={"500"}>15Feb 2023</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Item:</Text>
                        <Text fontWeight={"500"}>(Silver Tier)</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Pay</Text>
                        <Text fontWeight={"500"}>$10,00</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Button border={"1px solid black"}>View Details</Button>
                    </Box>
                    <Box display={{ base: "block", md: "block", lg: "none" }}>
                        <Button color={"#fff"} marginLeft={"120px"} size="sm" _hover={{ backgroundColor: "0d1140" }} backgroundColor={"#24349d"}>View Details</Button>
                    </Box>
                    <Box borderBottom={"2px solid #000"}></Box>

                </Flex>
                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
            </Box>
            <Box marginBottom={"30px"}>
                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                    <WrapItem  >
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Box>
                            <Text color={"gray.700"}>Name</Text>
                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                        </Box>
                    </WrapItem>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Date,</Text>
                        <Text fontWeight={"500"}>15Feb 2023</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Item:</Text>
                        <Text fontWeight={"500"}>(Silver Tier)</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text>Pay</Text>
                        <Text fontWeight={"500"}>$10,00</Text>
                    </Box>
                    <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Button border={"1px solid black"}>View Details</Button>
                    </Box>
                    <Box display={{ base: "block", md: "block", lg: "none" }}>
                        <Button color={"#fff"} marginLeft={"120px"} size="sm" _hover={{ backgroundColor: "0d1140" }} backgroundColor={"#24349d"}>View Details</Button>
                    </Box>
                    <Box borderBottom={"2px solid #000"}></Box>

                </Flex>
                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
            </Box>
        </Box>
    );
}