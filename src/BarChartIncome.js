import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FormatSpecifier } from 'd3';

class BarChartIncome extends React.Component {
    
    constructor(props){
        super(props); 
        this.state = {
          
        };
      }

 render()
 {var totalExpense = this.props.totalExpense;
  var totalIncome = this.props.totalIncome;
  var myAccountTotalTemp = this.props.myAccountTotal;
  var herAccountTotalTemp = this.props.herAccountTotal;
  var cashTotalTemp = this.props.cashTotal;
  var otherTotalTemp = this.props.otherTotal;
  var MyAccountSourceTotal = this.props.MyAccountSourceTotal;
  var HerAccountSourceTotal = this.props.HerAccountSourceTotal;
  var CashSourceTotal = this.props.CashSourceTotal;
  var OtherSourceTotal = this.props.OtherSourceTotal;

  var myAccountTotal = myAccountTotalTemp - MyAccountSourceTotal;
  var herAccountTotal = herAccountTotalTemp - HerAccountSourceTotal ;
  var cashTotal = cashTotalTemp - CashSourceTotal ;
  var otherTotal = otherTotalTemp - OtherSourceTotal ;
  var totalBalance = totalIncome - totalExpense;
 
  var myAccountProgress = (myAccountTotal / totalBalance)*100;
  var herAccountProgress = (herAccountTotal  / totalBalance)*100;
  var cashTotalProgress = (cashTotal  / totalBalance)*100;
  var otherTotalProgress = (otherTotal / totalBalance)*100;


     return (
        <div id="BarChartIncome" class="glass p-2">
            <h4 class="text-center pt-2">Balance Breakup</h4>
            <div class="px-4 py-3">
              <ProgressBar style={{borderRadius: "14px" , height: "10px", }} >
                <ProgressBar style={{backgroundColor: "#FCB142" }} now={myAccountProgress} key={1} />
                <ProgressBar style={{backgroundColor: "#19D54E" }} now={herAccountProgress} key={2} />
                <ProgressBar style={{backgroundColor: "#F7355F" }} now={cashTotalProgress} key={3} />
                <ProgressBar style={{backgroundColor: "#D849B9" }} now={otherTotalProgress} key={4} />
            </ProgressBar>
            </div>
            <div class="px-4 py-2"> 
            <table class="table table-borderless">
                  <tbody>
                  <tr style={{borderBottom: "1px", borderStyle: "solid", borderColor : "#c4c4c4", fontWeight : 600,}}>
                      <td> 
                      </td>
                      <td>Total</td>
                      <td className="align_right">{totalBalance}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#FCB142" />
                          </svg>
                      </td>
                      <td>My Account</td>
                      <td className="align_right">{myAccountTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#19D54E" />
                          </svg>
                      </td>
                      <td>Her Account</td>
                      <td className="align_right">{herAccountTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#F7355F" />
                          </svg>
                      </td>
                      <td>Cash</td>
                      <td className="align_right">{cashTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#D849B9" />
                          </svg>
                      </td>
                      <td>Other</td>
                      <td className="align_right">{otherTotal}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
     )

 }
}



export default BarChartIncome
