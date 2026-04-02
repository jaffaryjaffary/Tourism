import { IoMdCheckmark } from "react-icons/io";
export default function Success(){
    return(
        <div className="mt-5 bg-green-400 shadow-lg p-3 border-b-4 border-green-300">
            <div className="flex items-center justify-center gap-2">
                <span><IoMdCheckmark size={25} color="green" /></span>
                <p className="text-xl font-semibold text-white">Congratulation!. Your registration complete</p>
                
            </div>
        </div>
    )
}