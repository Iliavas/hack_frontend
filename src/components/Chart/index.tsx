import react from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface ICHart{
  values: {
    x: number,
    y: number,
  }[]
}

export const Chart: react.FC<ICHart> = (props) => {
  return (
    <Line
      width={600}
      height={308}
      data={{ datasets: [
        {
          label: "Data",
          data: props.values.map((e) => {
            return {
              x: e.x,
              y: e.y
            }
          }),
          backgroundColor: "red",
          borderColor: "red"
        }
      ]}}
      options={
        {
          //spanGaps: 1000,
          interaction: {
            mode: "nearest"
          },
          scales: {
            x: {
              type: "time",
              display: true,
              time: {
                unit: "second"
              },
              title: {
                display: true,
                //text: "Date"
              }
            }
          }
        }
      }
    />
  );
}