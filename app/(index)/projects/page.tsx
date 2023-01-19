import Piggery from "@/app/(component)/piggery";
import PointOfSales from "@/app/(component)/pointofsales";

export default function Page() {
    return (<>
        <div className=" min-h-screen flex bg-base-200">
            <div className="">
                <div className="divider">Piggery Management</div>
                <Piggery></Piggery>
                <div className="divider">Point Of Sales</div>
                <PointOfSales></PointOfSales>
            </div>
        </div>
    </>)
}