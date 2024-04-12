import { RiArrowRightSLine } from "react-icons/ri";

const PopularTagsHeader = ({ options }) => {
	const handleRightArrowClick = () => {
		// move the container to the right and also have to check you didn't moved the container more than the total width of container
		//skipping this part as a little bit advanced thing
	};

	return (
		<div className="mb-4">
			<div className="text-[#949494]  text-[13px] mb-4">
				Popular tags for handbag
			</div>

			<div className="flex items-center relative pr-4">
				<div
					className="flex items-center justify-start overflow-x-auto hide-scrollbar"
					style={{ scrollbarWidth: "none" }}>
					{options?.map((option, i) => {
						return (
							<div
								key={i}
								className="bg-[#f2f7ff] flex-shrink-0 whitespace-nowrap mr-[14px] rounded-[5px] text-[#4C82EF] border-[2px] text-[13px] min-w-8 border-[#4C82EF] py-[3px] px-[10px]">
								{option.name}
							</div>
						);
					})}
				</div>
				<div className="h-full absolute right-[0px] m-auto cursor-pointer bg-white">
					<RiArrowRightSLine
						onClick={() => handleRightArrowClick}
						className={"text-[#4d83f0] text-[26px] active:scale-95"}
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularTagsHeader;
