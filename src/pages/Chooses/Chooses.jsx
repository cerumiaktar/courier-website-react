import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaHandHoldingHeart,FaRegClock,FaShippingFast} from "react-icons/fa";
import { AiOutlineGlobal,AiOutlineProduct } from "react-icons/ai";

const Chooses = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-medium text-center mb-8">Why Choose Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                <div className="border border-[#9BDAEA] text-center py-8 rounded-lg bg-white shadow-xl">
                    <span className="flex justify-center text-4xl text-[#068DBE]"><VscWorkspaceTrusted /></span>
                    <h2 className="text-xl font-medium text-[#068DBE]">Trusted & Reliable</h2>
                    <p className="w-8/12 mx-auto text-[#068DBED6]">Track record of secure, timely service ensures your packages are in safe hands</p>
                </div>
                <div className="border border-[#9BDAEA] text-center py-8 bg-white shadow-xl rounded-lg">
                    <span className="flex justify-center text-4xl text-[#068DBE]"><FaHandHoldingHeart /></span>
                    <h2 className="text-xl font-medium text-[#068DBE]">Fast & Secure</h2>
                    <p className="w-8/12 mx-auto text-[#068DBED6]">Track record of secure, timely service ensures your packages are in safe hands</p>
                </div>
                <div className="border border-[#9BDAEA] text-center py-8 bg-white shadow-xl rounded-lg">
                    <span className="flex justify-center text-4xl text-[#068DBE]"><AiOutlineGlobal /></span>
                    <h2 className="text-xl font-medium text-[#068DBE]">Efficient Global Reach</h2>
                    <p className="w-8/12 mx-auto text-[#068DBED6]">Track record of secure, timely service ensures your packages are in safe hands</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="border border-[#9BDAEA] text-center py-8 rounded-lg bg-white shadow-xl">
                    <span className="flex justify-center text-4xl text-[#068DBE]"><FaRegClock /></span>
                    <h2 className="text-xl font-medium text-[#068DBE]">Real-Time Tracking</h2>
                    <p className="w-8/12 mx-auto text-[#068DBED6]">Track record of secure, timely service ensures your packages are in safe hands</p>
                </div>
                <div className="border border-[#9BDAEA] text-center py-8 bg-white shadow-xl rounded-lg">
                    <span className="flex justify-center text-4xl text-[#068DBE]"><AiOutlineProduct /></span>
                    <h2 className="text-xl font-medium text-[#068DBE]">Affordable & Flexible</h2>
                    <p className="w-8/12 mx-auto text-[#068DBED6]">Track record of secure, timely service ensures your packages are in safe hands</p>
                </div>
                <div className="border border-[#9BDAEA] text-center py-8 bg-white shadow-xl rounded-lg">
                    <span className="flex justify-center text-4xl text-[#068DBE]"><FaShippingFast /></span>
                    <h2 className="text-xl font-medium text-[#068DBE]">Delivering Excellence</h2>
                    <p className="w-8/12 mx-auto text-[#068DBED6]">Track record of secure, timely service ensures your packages are in safe hands</p>
                </div>
            </div>
        </div>
    );
};

export default Chooses;