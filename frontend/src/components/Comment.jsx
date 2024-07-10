// import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
// import {useState} from 'react';
// import Actions from "../components/Actions";
// import { BsThreeDots } from "react-icons/bs";

// const Comment = ({userAvatar,createdAt,comment,username,likes}) => {
//     const [liked, setLiked] =useState(false)
//   return (
//     <>
//     <Flex gap={4} py={2} my={2} w={"full"}>
// 				{/* <Avatar src={reply.userProfilePic} size={"sm"} /> */}
// 				<Avatar src={userAvatar} size={"sm"} />
// 				{/* <Avatar src='/zuck-avatar.png' size={"sm"} /> */}
// 				<Flex gap={1} w={"full"} flexDirection={"column"}>
// 					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
// 						<Text fontSize='sm' fontWeight='bold'>
// 							{/* {reply.username} */}
// 							{username}
//                             {/* markzuckerberg */}
// 						</Text>
//                         <Flex gap={2} alignItems={"center"}>
//                             <Text fontSize={"sm"} color={'gray.light'}>
// 								{createdAt}
// 								{/* 1d */}
// 							</Text>
//                             <BsThreeDots />
//                         </Flex>
// 					</Flex>
// 					{/* <Text>{reply.text}</Text> */}
// 					<Text>{comment}</Text>
// 					{/* <Text>Hey this looks great.</Text> */}
//                     <Actions liked={liked} setLiked={setLiked} />
//                     <Text color={"gray.light"} fontSize='sm'>
// 							{/* {likes} likes */}
// 							{likes + (liked?1:0)} likes
// 							{/* {100 + (liked?1:0)} likes */}
// 					</Text>
// 				</Flex>
// 			</Flex>
// 			{/* {!lastReply ? <Divider /> : null} */}
//             <Divider />
//     </>
//   )
// }

// export default Comment

import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = ({ reply, lastReply }) => {
	return (
		<>
			<Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src={reply.userProfilePic} size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
							{reply.username}
						</Text>
					</Flex>
					<Text>{reply.text}</Text>
				</Flex>
			</Flex>
			{!lastReply ? <Divider /> : null}
		</>
	);
};

export default Comment;
