import ChatBarAndFooter from "../ChatBarAndFooter/ChatBarAndFooter";
import ChatContanainer from "../ChatContainer/ChatContanainer";
import Navbar from "../Navbar/Navbar";

const MobileBox = () => {
	return <div className="bg-white font-poppins w-[360px] min-h-[700px] p-[6px] my-4 rounded-[20px]">
        <Navbar />
        <ChatContanainer />
        <ChatBarAndFooter />
    </div>;
};

export default MobileBox;
