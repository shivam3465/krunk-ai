import FilterOptions from "../FilterOptions/FilterOptions";
import ImageWithProduct from "../ImageWithProduct/ImageWithProduct";
import PopularTagsHeader from "../PopularTags/PopularTagsHeader";
import Chat from "../chat/Chat";

const ChatContanainer = () => {
	const chatArray = [
		{
			message:
				"Hi Sam! I am your personal assistant, how can i help you today?",
			sender: false,
			time: "4:45 PM",
		},
		{
			message: "I am looking for a hand bag, with long strap.",
			sender: true,
			time: "4:46 PM",
		},
	];

	const popularOptions = [
		{
			name: "Clutch",
			value: "clutch",
		},
		{
			name: "Fabric lining",
			value: "fabric_lining",
		},
		{
			name: "Baggit",
			value: "baggit",
		},
		{
			name: "Multi Compartment",
			value: "multi_compartment",
		},
	];

	return (
		<div className="px-[12px] py-4">
			{chatArray.map((chat, i) => {
				return <Chat chat={chat} key={i} />;
			})}

			<PopularTagsHeader options={popularOptions} />

			<Chat
				chat={{
					message:
						"Or set filter and help us choose the best bag for you.",
					sender: false,
					time: "4:48 PM",
				}}>
				<ImageWithProduct />
			</Chat>

			<FilterOptions />
		</div>
	);
};

export default ChatContanainer;
