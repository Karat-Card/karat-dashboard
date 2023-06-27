import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  // Set the desired height here
  height: 1200,
  plugins: {
    legend: {
      position: 'none',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data:  [250,300,600,700,800,900,950],
      borderColor: '#d98c33',
      backgroundColor: 'rgb(227 145 62 / 37%)',
    },
  ],
};
debugger

function Linechart() {
  return <Line options={options} data={data} />;
}


export default Linechart;