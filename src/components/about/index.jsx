const About = () => {
    return (
        <div className='grid grid-cols-2 grid-rows-2'>
            <div className='col-span-1'>
                <h1 className="text-5xl font-bold">castforecast</h1>
            </div>
            <div className="hidden md:block md:col-span-1 md:row-span-2">
                Picture
            </div>
            <div className="col-span-1">
                <p>
                    Our app is designed to give you quick and easy access to the latest weather
                    information for your area. With just a few clicks, you can check the current
                    temperature, see the forecast for the next few days, and get a sense of the
                    overall weather patterns in your region. Our app is user-friendly and intuitive,
                    so you don't need to be a meteorologist to understand the data.
                </p>
            </div >
        </div>
    )
}

export default About
