// import logo from './logo.svg';
// import './Lead.css';
import {Bar, Pie, Doughnut} from 'react-chartjs-2'

function Lead() {
  return (
    <div className="Lead">
      
      <Bar
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          label:'Store 1',
          data:[100,200,300,400,500,600],
          backgroundColor:'red',
          barThickness:12
        },
        {
          label:'Store 2',
          data:[321,212,344,332,223,566],
          backgroundColor:'green',
          barThickness:12
        },
        {
          label:'Store 3',
          data:[123,200,232,400,232,23],
          backgroundColor:'orange',
          barThickness:12
        },
        {
          label:'Store 4',
          data:[100,500,300,343,43,343],
          backgroundColor:'purple',
          barThickness:12
        },
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Revenue: $"+toolTipItem.value)
            }
          }

        },
        
        
      }}
      >

      </Bar>

      
      
     
     

    </div>
  );
}

export default Lead;