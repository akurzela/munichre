import "./chart.css"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'spline',
        inverted: false
    },
      title: {
        text: 'Average Risk Score'
      },
       xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },  
        yAxis: {
         title: {
            text: null
        }
        }, 
      series: [{
        name: '',
        marker: {
            enabled: false
        },
        data: [10, 20, 30,20,20,30,40,50,30, 60]
      }]
    }


export default function Chart(){
    return(
            <div className="chart">
             <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>)
}