import React, { useContext, useEffect } from "react";
import { stateContext } from "../App";

//this is boiler plate from: https://react-chartjs-2.js.org/examples/line-chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );
  
  //really need to get this into the backend
  // const APIKEY = "4X2274SBZP3SPX2A";
  const APIKEY = "CCK1IY5CF565MMF9";
  // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=$f&apikey=4X2274SBZP3SPX2A

  // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=f&apikey=4X2274SBZP3SPX2A

function StockChart(props) {
  const [state, setState] = useContext(stateContext);
  console.log(props.ticker);
  //this must be set by searchBar.  if you dont go to searchBar, it will be undefined.  Need to check with Grayden if this is the case.

  //need to use the time_series_daily API and not overview to get the daily values.  then i'll need to use the object.keys thing that Grayden showed us to get the dates and values.  the dates will be the rows and then we'll map to the close values.
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.ticker}&apikey=${APIKEY}`;

  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json()
 
      const dates = Object.keys(data["Time Series (Daily)"]);
      
      const prices = dates.map((date) => data["Time Series (Daily)"][date]["4. close"]);
   
      setState({ ...state, dates: dates.reverse(), prices: prices.reverse() });
  }

  useEffect(() => {
    fetchData();
  }, []);

  //this is boiler plate, i think, for a line charts.  https://react-chartjs-2.js.org/examples/line-chart
  const options = {
    spanGaps: true,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "One Year Stock Performance",
      },
    },
    scales: {
      x: {
        ticks: {
          // maxTicksLimit: 30,
          // display: false,
        },
      },
    },
    pointStyle: 'triangle',
    pointRadius: 3,
  };

  const stockChartData = state.prices;
  const chartLabels = state.dates;

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: props.ticker,
        //use the closing values here.  for an icebox project we could look at displaying the open, close, high, low all on the same display so people could look at volatility.  We could also look at displaying other charts liek volume and average volume.
        data: stockChartData,
        borderColor: "black",
        backgroundColor: "white",
      },
    ],
  };

  //use a ternary to check if the data is loaded or return an error message.
  return stockChartData ? (
    <Line options={options} data={data} />
  ) : (
    <p>Please try again.  Something went wrong.</p>
  );
}

export default StockChart;
