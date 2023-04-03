import { extendTheme, ChakraProvider, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import { Home } from '../Views/Home/Home'
import { BrowserRouter as Main,Routes,Route } from 'react-router-dom'
import { LoginPage } from '../Views/LoginPage/LoginPage'
import { SignUp } from '../Views/SignupPage/SignUp'
import { Courses } from '../Views/Courses/Courses'
import { UserScreen } from '../Views/UsersScreen/UsersScreen'
import SingleCourse from '../Views/SingleCourse/SingleCourse'
import ChatsScreen from '../Views/ChatsScreen/ChatsScreen'

export const Router = ()=>{
    return(
<Box>
    <Main>
        <Routes>
            <Route path="/dashboard/home" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/dashboard/courses" element={<Courses />}/>
            <Route path="/dashboard/courses" element={<Courses />}/>
            <Route path="/dashboard/user" element={<UserScreen />}/>
            <Route path="/dashboard/singleCourse" element={<SingleCourse/>}/>
            <Route path="/dashboard/chatsScreen" element={<ChatsScreen/>}/>
           
        </Routes>
    </Main>
</Box>
    )
}

