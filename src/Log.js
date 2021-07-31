import React from 'react';
import Fade from 'react-reveal/Fade';

class Log extends React.Component {
 
    constructor(props){
        super(props); 
        this.state = {
        };
      }
      
colorSelect (){
    let color = ""
    switch (this.props.Catagory) {
          case "Grocery":
          color = "#2CC0DA";
          break;
          case "EatingOut":
          color = "#D95774";
          break;
          case "Household":
          color = "#1FCA6D";
          break;
          case "Utility":
          color = "#5467DF";
          break;
          case "Fuel_Auto":
          color = "#C8D62F";
          break;
          case "Personal":
          color = "#D97B5D";
          break;
          case "Debt_Repay":
          color = "#AE4EBE";
          break;
          case "Other":
          color = "#C13535";
          break;
          case "MyAccount":
          color = "#FCB142";
          break;
          case "HerAccount":
          color = "#19D54E";
          break;
          case "Cash":
          color = "#F7355F";
          break;
          case "OtherIncome":
          color = "#D849B9";
         break;

        default:
          color = "#2CC0DA";
      }
      return color
}


 render()
 { 
     return (
         <div>
         <Fade left >
                <div className="logs">
                    <div className ="rectangle"  style = {{ backgroundColor: this.props.Type == "expense" ? "#FF2F2F" : "#00CB51" }} >
                    </div>

                    <div>
                        <p className ="log_description">{this.props.Description}</p>
                        <p className ="log_date">{this.props.Date}</p>
                    </div>

                    <div style= {{ "display" :"flex" , position:"absolute" , right:"50px", height:"100%" , justifyContent: "center"}}>
                        <p className ="log_amount mr-2 my-auto">{this.props.Amount}</p>
                    </div>

                    <div className ="log_icon" 
                    style={{backgroundColor: this.colorSelect()}}
                    >
                    </div>
             </div>
       </Fade>
    </div>  
     ) 

 }

}



export default Log
