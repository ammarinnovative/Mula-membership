import { extendTheme, ChakraProvider, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import Sidebar from "../../Components/Sidebar/Sidebar"
import BasicStatistics from "../../Components/Cards/Card";



export const UserScreen = () => {
    return (
        <Sidebar>
            <Text fontSize={"30px"} fontWeight={"700"}>Activities</Text>
            <Box>
                <BasicStatistics />
            </Box>
        </Sidebar>
    )
}