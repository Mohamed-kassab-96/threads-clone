// import { useEffect, useState } from "react";
// import UserHeader from "../components/UserHeader";
// import { useParams } from "react-router-dom";
// import useShowToast from "../hooks/useShowToast";
// // import { Flex, Spinner } from "@chakra-ui/react";
// // import Post from "../components/Post";
// // import useGetUserProfile from "../hooks/useGetUserProfile";
// // import { useRecoilState } from "recoil";
// // import postsAtom from "../atoms/postsAtom";




// import UserPost from "../components/UserPost";

// const UserPage = () => {
//   const { user, setUser } = useState();
//   const { username } = useParams();
//   const showToast = useShowToast();

//   useEffect(() => {
// 		const getUser = async () => {
// 			// if (!user) return;
// 			// setFetchingPosts(true);
// 			try {
// 				const res = await fetch(`/api/users/profile/${username}`);
// 				const data = await res.json();
//         if (data.error) {
//           showToast("Error",data.error,"error");
//           return;
//         }
//         // data;
//         setUser(data);
// 				// console.log(data);
// 				// setPosts(data);
// 			} catch (error) {
// 				showToast("Error", error , "error");
// 				// setPosts([]);
//         // console.log(error);
// 			} 
//       // finally {
// 			// 	setFetchingPosts(false);
// 			// }
// 		};

// 		getUser();
// 	}, [username, showToast ]);
// 	// }, [username, showToast, setPosts, user]);
//   if (!user) return null;
//   return (
//     <>
//     <UserHeader />
//     <UserPost likes={1200} replies={354} postImg='post1.png' postTitle="Lets talk about Threads." />
//     <UserPost likes={49} replies={11} postImg='post2.png' postTitle="Nice tutorial." />
//     <UserPost likes={692} replies={36} postImg='post3.png' postTitle="I love this guy." />
//     <UserPost likes={963} replies={89}  postTitle="Yhis is my first Thread." />
//     </>
//   )
// }

// export default UserPage



import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => {
	const { user, loading } = useGetUserProfile();
	const { username } = useParams();
	const showToast = useShowToast();
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [fetchingPosts, setFetchingPosts] = useState(true);

	useEffect(() => {
		const getPosts = async () => {
			if (!user) return;
			setFetchingPosts(true);
			try {
				const res = await fetch(`/api/posts/user/${username}`);
				const data = await res.json();
				console.log(data);
				setPosts(data);
			} catch (error) {
				showToast("Error", error.message, "error");
				setPosts([]);
			} finally {
				setFetchingPosts(false);
			}
		};

		getPosts();
	}, [username, showToast, setPosts, user]);

	if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}

	if (!user && !loading) return <h1>User not found</h1>;

	return (
		<>
			<UserHeader user={user} />

			{!fetchingPosts && posts.length === 0 && <h1>User has not posts.</h1>}
			{fetchingPosts && (
				<Flex justifyContent={"center"} my={12}>
					<Spinner size={"xl"} />
				</Flex>
			)}

			{posts.map((post) => (
				<Post key={post._id} post={post} postedBy={post.postedBy} />
			))}
		</>
	);
};

export default UserPage;
