import mockupMobile from '../../assets/images/about/mockup_mobile.png'
import mockupLaptop from '../../assets/images/about/mockup_laptop.png'

const About = ({changeActivePage}) => {
    return (
        <div className='flex flex-col h-[80vh] text-center justify-center md:grid md:grid-cols-2 md:grid-rows-2'>
            <div className='mb-8 md:col-span-1 md:flex md:items-end'>
                <h1 className='text-5xl md:text-6xl font-black self-end dark:text-slate-200'>castforecast</h1>
            </div>
            <div className='hidden md:flex md:items-center md:gap-4 md:col-span-1 md:row-span-2 md:self-center'>
                <div className='w-3/4'><img src={mockupLaptop} alt="app preview" /></div>
                <div className='w-1/4'><img src={mockupMobile} alt="app preview" /></div>
                </div>
            <div className='flex flex-col items-center md:items-start gap-4 md:col-span-1'>
                <p className='text-lg font-medium max-w-prose md:text-start dark:text-slate-300'>
                    Our app is user-friendly and intuitive, so you don't need to be a meteorologist
                    to understand the data. With just a few clicks, you can see the forecast for the
                    next few days and get a sense of the overall weather patterns in your area.
                </p>
                <button onClick={()=>changeActivePage('weather')} className='bg-emerald-600 py-2 px-8 text-white rounded-lg'>See Weather</button>
            </div>
        </div>
    )
}

export default About
