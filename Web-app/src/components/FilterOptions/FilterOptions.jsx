import { LuSlidersHorizontal } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const FilterOptions = () => {
	const options = [
		{ name: "Strap - Long", selected: false },
		{ name: "Colour", selected: false },
		{ name: "Size", selected: false },
		{ name: "Brand", selected: false },
		{ name: "Material", selected: false },
	];
	const [filterOptions, setFilterOptions] = useState(options);

	const handleClick = (name) => {
		const newOptions = filterOptions.map((item) => {
			if (item.name === name)
				return {
					name: item.name,
					selected: !item.selected,
				};
			return item;
		});
		setFilterOptions(newOptions);
	};

	return (
		<div className="my-2">
			<div className="flex items-center justify-between text-[13px]">
				<div className="text-[#949494] font-normal">Select Filter</div>
				<div className="flex items-center text-[#666666]">
					<LuSlidersHorizontal
						className={"mr-1 text-[18px] cursor-pointer text-[#666666]"}
					/>
					Filter
				</div>
			</div>

			<div className="flex items-center justify-start flex-wrap">
				{filterOptions.map((item, i) => {
					return (
						<div
							key={i}
							className={`${
								item?.selected
									? "text-[#4C82EF] border-[2px] border-[#77a0f2] bg-[#f5f8ff]"
									: "text-gray-500 border-[2px] border-white bg-[#F4F4F4]"
							} flex items-center text-[13px] cursor-pointer font-poppins rounded-[5px] mr-2 mt-[10px] py-[2px] px-[8px] `}
							onClick={() => handleClick(item?.name)}>
							{item?.name}{" "}
							<IoMdClose className={"text-[17px] ml-2"} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilterOptions;
