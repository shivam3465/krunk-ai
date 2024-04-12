import { GrAttachment } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import logo from "../../assets/Logo.svg";

const ChatBarAndFooter = () => {
	return (
		<div className="bg-[#edf2fc] px-2 rounded-b-[20px]">
			<div className="flex items-center justify-between ">
				<div className="flex items-center relative w-full mr-2 py-1	">
					<input
						type="text"
						className="border-[2px] border-[#E3ECFF] text-[13px] outline-none w-full px-4 rounded-[10px] py-1"
						placeholder="Type your message"
					/>

					<div className="absolute right-2 ">
						<GrAttachment className="text-[#949494] cursor-pointer" />
						<input
							type="file"
							className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" // Make input effectively invisible
							onChange={(e) => {								
								const file = e.target.files[0];
							}}
						/>
					</div>
				</div>

				<button className="bg-[#4C82EF] relative rounded-[10px] z-10 p-2 px-4">
					<RiArrowRightSLine className="text-white z-[100] text-[22px] cursor-pointer" />
				</button>
			</div>
			<div className="py-2 flex items-center text-[13px] justify-center">
				<span className="text-[#B1B1B1] mr-2">Powered by</span>
				<div className="flex text-[#7A7F8C]">
					<span className="mr-1 font-semibold font-geologica">
						Krunk.ai
					</span>
					<img src={logo} alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default ChatBarAndFooter;
