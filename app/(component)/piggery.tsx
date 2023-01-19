"use client"
import Link from "next/link";
import { useState } from "react";

export default function Piggery() {
    const [steps, setSteps] = useState(1)


    return (<>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/samples/piggery.PNG" className="max-w-sm h-full rounded-lg shadow-2xl" />
                <div>
                    <Link href="https://piggery.sledgedevsteam.lol" target={"_blank"} className="text-5xl font-bold">Web-Based Piggery Management System with Mobile-Based QR Code Scanner</Link>
                    <p className="py-6">A web based piggery system made for a small hog farms. Get access to piggery scheduling,sms notification,inventory and more..</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </>)
}