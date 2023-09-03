import ChartBar1 from './ChartBar1'
import './chart.css'
function Chart(props)
{
  const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
  const totalMaximum=Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint=>
      <ChartBar1 
      key ={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximum} 
      label={dataPoint.label}> 
      </ChartBar1>)}
    </div>
  )
};
export default Chart;
