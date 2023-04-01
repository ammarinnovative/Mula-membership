import React from 'react'
import { Text , Stack, Image } from '@chakra-ui/react'
export default function ChatsActiveProfile({data}) {
  return (
    data.map((d)=>{
      return(
        <Stack spacing={"2"} key={d.id} direction="row" alignItems={"center"} p={"8px 0px"} borderRight={"1px solid #ddd"} borderBottom={"1px solid #ddd"}>
          <Image width={"18%"}  opacity={"0.5"} src={d.img}></Image>
          <Text fontSize={"18px"} color={"#000"} opacity={"0.5"} fontWeight={"600"}>
              {d.name}
          </Text>
        </Stack>
      )
    }) 
  )
}


