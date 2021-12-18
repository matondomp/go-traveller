/* eslint-disable react/prop-types */
import React from "react";

import { Toast } from "./toast"
import { Auth } from "./auth"

export const AppProvider: React.FC=({children})=>(
    <Auth>
        <Toast>{ children }</Toast>
    </Auth>
)