import Link from "next/link";

export default function Navbar() {
    return (<>
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">Sledge Development Team</a>
            <div className=" w-1/2">
                <Link className=" mx-4 hover:text-primary cursor-pointer link-hover uppercase" href={"/"}>Home</Link>
                <Link className=" mx-4 hover:text-primary cursor-pointer link-hover uppercase" href={"/team"}>Team</Link>
                <Link className=" mx-4 hover:text-primary cursor-pointer link-hover uppercase" href={"/projects"}>Projects</Link>
                <Link className=" mx-4 hover:text-primary cursor-pointer link-hover uppercase" href={"/contactus"}>Contact Us</Link>
            </div>
        </div>
    </>)
}