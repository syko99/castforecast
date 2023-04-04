import { Chart } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'


const LineChart = ({ forecastData, options, lightMode}) => {

    if (lightMode) {
        Chart.defaults.color = 'slate-gray-500'
    } else {
        Chart.defaults.color = 'rgb(203, 215, 225)'
        Chart.defaults.borderColor = 'rgb(203, 215, 225, 0.1)'
    }

    return (
        <div className='hidden w-full h-1/2 md:block row-span-1 relative'>
            <Line data={forecastData} options={options} />
        </div>
    )
}

export default LineChart
