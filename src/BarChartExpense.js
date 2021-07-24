import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class BarChartExpense extends React.Component {
    
    constructor(props){
        super(props); 
        this.state = {
          
        };
      }

 render()
 {

    var totalExpense = this.props.totalExpense
    var GroceryTotal = this.props.GroceryTotal
    var EatingOutTotal = this.props.EatingOutTotal
    var HouseholdTotal = this.props.HouseholdTotal
    var UtilityTotal = this.props.UtilityTotal
    var Fuel_AutoTotal = this.props.Fuel_AutoTotal
    var PersonalTotal = this.props.PersonalTotal
    var Debt_RepayTotal = this.props.Debt_RepayTotal
    var OtherTotalExpense = this.props.OtherTotalExpense






    return (
        <div id="BarChartExpense" class="glass p-2 mx-3 flex-fill">
            <h4 class="text-center pt-2">Balance Breakup</h4>
            <div class="px-4 pb-1" style={{width: "298px"}}> 
            <table class="BarChartExpense table table-borderless">
                  <tbody>
                  <tr style={{borderBottom: "1px", borderStyle: "solid", borderColor : "#fff", fontWeight : 600,}}>
                      <td> 
                      </td>
                      <td>Total</td>
                      <td className="align_right">{this.props.totalExpense}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#2CC0DA" />
                          </svg>
                      </td>
                      <td>Grocery</td>
                      <td className="align_right">{this.props.GroceryTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#D95774" />
                          </svg>
                      </td>
                      <td>Eating Out</td>
                      <td className="align_right">{this.props.EatingOutTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#1FCA6D" />
                          </svg>
                      </td>
                      <td>Household</td>
                      <td className="align_right">{this.props.HouseholdTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#5467DF" />
                          </svg>
                      </td>
                      <td>Utility</td>
                      <td className="align_right">{this.props.UtilityTotal}</td>
                    </tr>

                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#C8D62F" />
                          </svg>
                      </td>
                      <td>Fuel/Auto</td>
                      <td className="align_right">{this.props.Fuel_AutoTotal}</td>
                    </tr>
                    
                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#D97B5D" />
                          </svg>
                      </td>
                      <td>Personal</td>
                      <td className="align_right">{this.props.PersonalTotal}</td>
                    </tr>
                    
                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#AE4EBE" />
                          </svg>
                      </td>
                      <td>Debt Repay</td>
                      <td className="align_right">{this.props.Debt_RepayTotal}</td>
                    </tr>
                    
                    <tr>
                      <td> 
                        <svg height="10" width="10">
                         <circle cx="5" cy="5" r="5" fill="#C13535" />
                          </svg>
                      </td>
                      <td>Other</td>
                      <td className="align_right">{this.props.OtherTotalExpense}</td>
                    </tr>

                  </tbody>
                </table>
            </div>
          </div>
     )

 }
}



export default BarChartExpense
