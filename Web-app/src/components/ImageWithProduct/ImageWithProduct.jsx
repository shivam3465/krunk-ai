import productImg from "../../assets/chat-image.png";
import verifiedLogo from "../../assets/Verified.png";
import { RiArrowRightSLine } from "react-icons/ri";

const ImageWithProduct = () => {
	return (
		<div className="flex items-center font-poppins justify-between px-[6px] py-[8px] mb-2 rounded-[10px] bg-white">
			<img src={productImg} alt="product" className="w-[70px]" />
			<div>
				<div className="font-[500] text-[13px] flex items-center">
					Bags on Timpu{" "}
					<img src={verifiedLogo} alt="verified" className="ml-2" />
				</div>
				<div className="flex items-center text-[12px] justify-between text-[#949494]">
					<div>1123 products</div>
					<RiArrowRightSLine
						className={"text-[#878787] cursor-pointer text-[26px]"}
					/>
				</div>
			</div>
		</div>
	);
};

export default ImageWithProduct;
