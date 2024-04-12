import profileImg from "../../assets/profile.png";
import verifiedLogo from "../../assets/Verified.png";

const Navbar = () => {
	return (
		<div className="bg-[#edf2fc] flex items-end justify-between rounded-t-[20px] px-[20px] py-[13px]">
			<div className="flex justify-between items-center">
				{/* profile image */}
				<div className="relative mr-[10px] w-[50px] h-[50px]">
					<img src={profileImg} alt="profile image" className="w-full h-full" />
					<span className="w-2 h-2 absolute bottom-[2px] right-[4px] z-10 rounded-full bg-[#3FE225]"></span>
				</div>

				<div className="text-[#4C82EF] font-poppins">
					<div className="flex items-center">
						<div className="font-[500] text-[18px]">Timpu</div>
						<img src={verifiedLogo} alt="verified logo" className="ml-2" />
					</div>
					<div className="font-[400] text-[15px]">Chat assistant</div>
				</div>
			</div>

			<div className="relative pl-3 flex items-center justify-">
				<div className="text-[#4C82EF] font-poppins text-[15px]">Online</div>
				<span className="w-2 h-2 absolute m-auto left-0 z-10 rounded-full bg-[#3FE225]"></span>
			</div>
		</div>
	);
};

export default Navbar;
