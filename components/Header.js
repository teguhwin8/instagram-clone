import Image from "next/image"
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

function Header() {
	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 xl:mx-auto items-center">
				{/* Logo */}
				<div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* Middle Header - Search Box */}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center space-x-4">
					<HomeIcon className="navBtn" />
					<div className="relative navBtn">
						<PaperAirplaneIcon className="navBtn rotate-45" />
						<div className="absolute -top-2 -right-1 text-xs w-5 h-5 rounded-full flex items-center animate-pulse bg-red-500 justify-center text-white">
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden" />

					<img
						src="https://lh3.googleusercontent.com/ogw/ADea4I68ZbdI-CXLJ-_cwvuoMALpY9xJyyBw22iRwLS6dw=s83-c-mo"
						alt="profile pic"
						className="h-10 rounded-full cursor-pointer"
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
