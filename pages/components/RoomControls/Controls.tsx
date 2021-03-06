import React from "react";

const Controls: React.FunctionComponent = () => {
    return (
        <div className=" w-full h-full flex flex-row gap-2 justify-center items-center text-white font-semibold">
        <button className=" uppercase px-5 py-2 hover:bg-blue-600">Video</button>
        <button className=" uppercase px-5 py-2 hover:bg-blue-600">Audio</button>
        <button className=" uppercase px-5 py-2 hover:bg-blue-600">Screen Share</button>
        <button className=" uppercase px-5 py-2 hover:bg-blue-600">Exit Meeting</button>
        <button className=" uppercase px-5 py-2 hover:bg-blue-600">Switch view</button>
      </div>
    );
}
export default Controls;