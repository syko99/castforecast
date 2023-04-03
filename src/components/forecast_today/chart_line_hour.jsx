import { Chart } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const LineChart = ({ forecastData }) => {
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: { grid: { display: false } },
        },
    }

    return (
        <div className='hidden w-full h-1/2 md:block row-span-1 relative'>
            <Line data={forecastData} options={options} chart={Chart} />
        </div>
    )
}

export default LineChart
