import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaceIcon,
} from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

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

			<img src={img} className="object-cover w-full" alt="" />

      <div>
        <HeartIcon />
      </div>
		</div>
	)
}

export default Post
