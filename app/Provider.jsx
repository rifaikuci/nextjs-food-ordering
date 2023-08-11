'use client'

import {Provider} from "react-redux";
import store from "@/redux/store";
import {SessionProvider} from "next-auth/react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function ThemeProvider({ children : {session, ...children} }) {
    return  (
        <SessionProvider session={session}>
            <Provider store={store}>
                <ToastContainer />
                {children}
            </Provider>
        </SessionProvider>
        )

}
