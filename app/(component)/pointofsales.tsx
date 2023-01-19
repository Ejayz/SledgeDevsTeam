"use client"
import Link from "next/link";

export default function PointOfSales() {
    return (<>
        <div className="hero min-h-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/samples/pointofsales.PNG" className="max-w-sm h-full rounded-lg shadow-2xl" />
                <div>
                    <h2 className="text-5xl font-bold">Web-Based Point Of Sales System</h2>
                    <p className="py-6">Manage your store over the internet . Monitor sales , Manage product pricing at once in all of your branch and many more feautures.</p>
                    <Link href="https://piggery.sledgedevsteam.lol" target={"_blank"} className="btn btn-primary">Visit</Link>
                </div>
            </div>
        </div>
    </>)
}