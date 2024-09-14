"use client"

import { MainDashboard } from "@/app/components/dashboardComp"
import { useEffect } from "react"
import { useAppSelector } from "@/lib/hooks"
export default function Dashboard() {

    const email = useAppSelector(state => state.user.email);
    const name = useAppSelector(state => state.user.name);
    useEffect(() => {
        alert(email);
        alert(name);
    } , []);

    return(
        <div>
            <MainDashboard />
        </div>
    )
}