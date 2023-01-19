import Link from "next/link";
import Image from 'next/image'
export default function Home() {
    return (<>
        <div className=" min-h-auto  bg-base-200">
            <p className="text-4xl p-4 uppercase text-center">Team Members</p>
            <p className="text-md p-4 uppercase text-center">Our team is composed of IT graduate with technical background of creating a softwares for business.</p>
        </div>
        <div className=" min-h-screen grid grids-1 mx-auto lg:grid-cols-3 bg-base-200">
            <div className="card w-11/12 mx-auto lg:w-96 lg:my-auto my-4 h-auto lg:h-3/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src="/ejayz.jpg" alt="Ejayz" className="rounded-xl" height={170} width={170} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold text-primary">Ejayz</h2>
                    <h2 className="text-xl">Full Stack developer</h2>
                    <p>Specialize in PHP ,NextJs. Currently based in Philippines</p>
                    <div className="card-actions mt-2">
                        <Link href="https://github.com/Ejayz" className="btn btn-primary">Github</Link>
                    </div>
                </div>
            </div>
            <div className="card w-11/12 mx-auto lg:w-96  h-auto lg:h-3/4 my-4 lg:my-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src="/sledge.png" alt="skylie2121" height={170} width={170} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold text-primary">skylie2121</h2>
                    <h2 className="text-xl">Data Analyst</h2>
                    <p>Specialize Data analyzation and database optimization.</p>
                    <div className="card-actions">
                        <Link href="https://github.com/skylie2121" className="btn btn-primary">GITHUB</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}