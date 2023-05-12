import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import { Button, Checkbox, Input, Select } from "antd";
import { GET } from "../../utilities/ApiProvider";
import { POST } from "../../utilities/ApiProvider";
import { useSelector } from "react-redux";




function ChatRoom() {
  const [Category,setCategory] = useState([]);
  const [val,setVal] = useState("");
  const selector = useSelector(state=>state);
  const token = selector.user.user.data.data.JWT_TOKEN;
const getCat = async ()=>{
  const res = await GET("courseCategory/getAllCourseCategoryList?limit=10&page=1",{
    authorization:`bearer ${token}`
  });
  setCategory(res.data);
  
}

const [fields,setFields] = useState({
  title:"",
  details:"",
  readonly:false,
  category:[]
})
const PostData = async ()=>{
  const jsonFields = JSON.stringify(fields);
  console.log(jsonFields);
  // const res = await POST("chatroom",jsonFields,{
  //   authorization:`bearer ${token}`
  // })
}

useEffect(()=>{
  getCat();
},[])

  return (
    <Sidebar>
        <Stack maxW={"800px"} margin={"auto"}>
        <Input margin="15px 0" onChange={(e)=>{setFields({...fields,title:e.target.value})}} type="text" placeholder="Title" />
        <Input padding="5px" margin="15px 0" onChange={(e)=>{setFields({...fields,details:e.target.value})}} type="text" placeholder="Details" />
        <Select  onChange={(e)=>{setFields({...fields,category:JSON.stringify([e])})}} padding="5px" margin="15px 0" placeholder="Select option">
          {
            Category.map((item)=>{
              return(
                <option value={item._id}>{item.course_category_name}</option>
              )
            })
          }
        </Select>{" "}
        <Checkbox checked={!fields.readonly} onChange={(e)=>{setFields({...fields,readonly:!fields.readonly})}} margin="15px 0" defaultChecked>Checkbox</Checkbox>
        <Button onClick={PostData}>Create</Button>
        </Stack>
    </Sidebar>
  );
}

export default ChatRoom;
