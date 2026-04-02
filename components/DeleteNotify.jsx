export default function DeleteNotify(){
    return(
        <div className="absolute top-18 bottom-0 right-0 left-0 flex items-center justify-center bg-black opacity-80">
            <div className="bg-white shadow-lg w-75 p-3 border-b-4 border-green-400">
                <p>Delete Notification</p>
                <h1>Are you sure want delete jaffary jaffary</h1>
                <div className="flex gap-5">
                    <span>Cancel</span>
                    <span>Ok</span>
                </div>
            </div>
        </div>
    )
}