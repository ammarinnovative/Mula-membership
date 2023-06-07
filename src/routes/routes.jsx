import { extendTheme, ChakraProvider, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import { Home } from "../Views/Home/Home";
import { BrowserRouter as Main,Routes,Route } from 'react-router-dom'
import { LoginPage } from '../Views/LoginPage/LoginPage'
import { Courses } from '../Views/Courses/Courses'
import { UserScreen } from '../Views/UsersScreen/UsersScreen'
import SingleCourse from '../Views/SingleCourse/SingleCourse'
import ChatsScreen from '../Views/ChatsScreen/ChatsScreen'
import { Setting } from '../Views/Setting/Setting'
import { Tiers } from '../Views/Tiers/Tier'
import {UserCourses} from "../Views/UsersScreen/UserCourses";
import MeetingSchedule from '../Views/ZoomMeeting/MeetingSchedule'
import UploadMember from "../Views/UploadMembership/UploadMembership";
import UploadVideo from '../Views/UploadVideos/UploadVideo';
import ChatRoom from '../Views/ChatRoom/ChatRoom';
import  Subscriber  from '../Components/Subscribers/Subcribers';
import Payout from "../Views/Payout/Payout";
import PayoutHistory from '../Components/PayoutHistory/PayoutHistory';


export const Router = ()=>{
    return(
<Box>
    <Main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard/courses" element={<Courses />}/>
            <Route path="/dashboard/user" element={<UserScreen />}/>
            <Route path="/dashboard/CourseDetails/:id" element={<SingleCourse/>}/>
            <Route path="/dashboard/chatsScreen" element={<ChatsScreen/>}/>
            <Route path="/dashboard/UserScreen" element={<UserCourses />}/>
            <Route path="/dashboard/Setting" element={<Setting />}/>
            <Route path="/dashboard/Tiers" element={<Tiers />}/>
            <Route path="/dashboard/MeetingSchdule" element={<MeetingSchedule />}/>
            <Route path="/dashboard/UploadMembershipVideos/:id" element={<UploadMember />}/>
            <Route path="/dashboard/UploadVideo" element={<UploadVideo />}/>
            <Route path="/dashboard/ChatRoom" element={<ChatRoom />}/>
            <Route path="/dashboard/subscribers/:id" element={<Subscriber />}/>
            <Route path='/dashboard/Payout' element={<Payout />} />
            <Route path='/dashboard/PayoutHistory' element={<PayoutHistory />} />
        </Routes>
    </Main>
</Box>
    )
}

