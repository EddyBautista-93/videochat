import React, { FormEventHandler } from "react";
import {  useState, useEffect } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import Room from "./Room";
import * as dotenv from 'dotenv';



const Login: React.FunctionComponent = () => {
    dotenv.config();

    const endpoint = process.env.ENDPOINT;
    const hmsActions = useHMSActions();
    const [ inputVal, setInputVal ] = useState<string>("");
    const [ selectVal, useSelectVal ] = useState<String>("viewer");

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <>
        <div className=" h-screen flex justify-center items-center bg-slate-800">
          <div className=" flex flex-col gap-6 mt-8">
            <input
              type="text"
              placeholder="John Doe"
              className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
            />
            <input
              type="text"
              placeholder="Select Role"
              className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
            />
            <button className="flex-1 text-white bg-blue-600 py-3 px-10 rounded-md">
              Join
            </button>
          </div>
        </div>
        <Room/>
        </>
    )
}
export default Login;