import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
	return (
		<div className="bg-white my-y border rounded-sm">
			<div className="flex items-center p-5">
				<img
					src={userImg}
					className="rounded-full h-12 w-12 object-contain p-1 mr-3"
					alt=""
				/>
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className="h-5 cursor-pointer" />
			</div>

			<img src={img} className="w-full object-cover" alt="" />

			<div className="flex justify-between items-center px-4 pt-4">
				<div className="flex items-center space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn" />
				</div>
				<BookmarkIcon className="btn" />
			</div>

			{/* Caption */}
			<p className="p-5 truncate">
				<span className="font-bold mr-1">{username}</span>
				<span>{caption}</span>
			</p>

			{/* Comments */}

			{/* Post Comment Form */}
			<form className="flex items-center p-4">
				<EmojiHappyIcon className="h-7" />
				<input
					type="text"
					placeholder="Add a comment..."
					className="flex-1 border-none focus:ring-0 outline-none"
				/>
				<button className="font-semibold text-blue-400">Post</button>
			</form>
		</div>
	);
}

export default Post;
