"use client"
import { useState } from "react";
import NoUser from "../components/noUser";

const Notif = () => {
    const [login, setLogin] = useState(false);

    return (
        login ? (
            <div className="h-dvh w-full flex items-center">hai</div>
        ) : (
            <NoUser />
        )
    );
};

export default Notif;
