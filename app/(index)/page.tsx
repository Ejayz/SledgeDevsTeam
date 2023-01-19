

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/tech.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Elevate Your Business with Our Custom Software Solutions</h1>
            <p className="py-6 blockquote ">Welcome to our software development team! We are a group of highly skilled and experienced developers who specialize in creating custom software solutions to solve business problems. Whether you need a new application to streamline your operations, a website to connect with customers, or a tool to analyze data, we have the expertise to build it. Our team uses the latest technologies and industry best practices to deliver high-quality, reliable software that meets your specific needs. We are dedicated to working closely with you to understand your business goals and deliver solutions that drive success. Thank you for choosing our team for your software development needs.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}
