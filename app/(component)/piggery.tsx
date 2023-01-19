"use client"
import Link from "next/link";

export default function Piggery() {
    return (<>
        <div className="hero min-h-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/samples/piggery.PNG" className="max-w-sm h-full rounded-lg shadow-2xl" />
                <div>
                    <h2 className="text-5xl font-bold">Web-Based Piggery Management System with Mobile-Based QR Code Scanner</h2>
                    <p className="py-6">A web based piggery system made for a small hog farms. Get access to piggery scheduling,sms notification,inventory and more..</p>
                    <Link href="https://piggery.sledgedevsteam.lol" target={"_blank"} className="btn btn-primary">Visit</Link>
                </div>
            </div>
        </div>
    </>)
}