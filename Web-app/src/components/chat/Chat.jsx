const Chat = ({ chat, children }) => {	
	return (
		<div
			className={`flex flex-col ${
				chat?.sender ? "items-end" : "items-start"
			}`}>
			{/* main chat contents */}
			<div
				className={`${
					chat?.sender ? "bg-[#ddf7c6]" : "bg-chat-gradient"
				} max-w-[250px] p-3 px-4 rounded-[15px] mt-3 text-[13px]`}>
				{children}
				{chat?.message}
			</div>

			{/* chat time  */}
			<div className="ml-3 text-[12px] mt-[5px] text-[#333333]">
				{chat?.time}
			</div>
		</div>
	);
};

export default Chat;
