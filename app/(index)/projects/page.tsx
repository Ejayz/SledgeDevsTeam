import Piggery from "@/app/(component)/piggery";

export default function Page() {
    return (<>
        <div className=" min-h-screen grid grid-cols-5 bg-base-200">
            <div className="col-span-3">
                <Piggery></Piggery>
            </div>
            <div className=" flex">
                <ul className="steps mx-auto steps-vertical">
                    <li className="step step-primary text-center">Piggery Management</li>
                    <li className="step">Point of Sales</li>
                    <li className="step">Class Scheduling</li>
                </ul>
            </div>
            <div className="col-span-1">
            </div>
        </div>
    </>)
}