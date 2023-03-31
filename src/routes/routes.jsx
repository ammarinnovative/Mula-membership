import { extendTheme, ChakraProvider, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import { Home } from '../Views/Home/Home'
import { BrowserRouter as Main,Routes,Route } from 'react-router-dom'
import { LoginPage } from '../Views/LoginPage/LoginPage'
import { Courses } from '../Views/Courses/Courses'
import { UserScreen } from '../Views/UsersScreen/UsersScreen'
import { Setting } from '../Views/Setting/Setting'
import { Tiers } from '../Views/Tiers/Tier'
import {UserCourses} from "../Views/UsersScreen/UserCourses";
import MeetingSchedule from '../Views/Zoom Meeting/MeetingSchedule'


export const Router = ()=>{
    return(
<Box>
    <Main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard/Courses" element={<Courses />}/>
            <Route path="/dashboard/User" element={<UserScreen />}/>
            <Route path="/dashboard/UserScreen" element={<UserCourses />}/>
            <Route path="/dashboard/Setting" element={<Setting />}/>
            <Route path="/dashboard/Tiers" element={<Tiers />}/>
            <Route path="/dashboard/MeetingSchdule" element={<MeetingSchedule />}/>
        </Routes>
    </Main>
</Box>
    )
}