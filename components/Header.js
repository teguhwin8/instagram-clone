import Image from "next/image"
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline"

function Header() {
	return (
		<div>
			<div className="flex justify-between max-w-6xl">

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
				<div>
					<div className="absolute inset-y-0 pl-3">
						<SearchIcon className="h-5 w-5" />
					</div>
					<input type="text" placeholder="Search" />
				</div>
			</div>
		</div>
	)
}

export default Header
