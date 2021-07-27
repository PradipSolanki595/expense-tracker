import React from 'react';
import BaseSelect from "react-select";
import FixRequiredSelect from "./FixRequiredSelect";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "./util/firebase";

let Sources = [
  { label: "MyAccount", value: "MyAccount" },
  { label: "HerAccount", value: "HerAccount" },
  { label: "Cash", value: "Cash" },
  { label: "Other", value: "Other" },
];

let Select = props => (
  <FixRequiredSelect
    {...props}
    SelectComponent={BaseSelect}
    Sources={props.Sources || Sources}
  />
);

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
        DataBase : [],
        selectedOption: 'Yes',
        source : "",
        selectedDrop: "",
        userData : JSON.parse(localStorage.getItem('user'))
    };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let userData = this.state.userData
    let userName = userData.googleId
    let path = userName + " ExpenseData"
    console.log(userData)
    let ExpenseRef = firebase.database().ref(path); 

    var tempFormData = {
          Key : Date.now(),
          Type : "expense",
          Amount: this.refs.Amount.value,
          Description: this.refs.Description.value,
          Date: this.refs.Date.value,
          Catagory: this.state.selectedOption,
          Source : this.state.selectedDrop
          };

    ExpenseRef.push(tempFormData)
    this.props.onChangeDatabase();  


  }

  handleSourceChange = (x) => {
    this.setState({ selectedDrop : x.value });
  }

  render ()  
  {  

  const { selectedDrop } = this.state;
  
    return (
      <div id="expense" class=" glass ">
        <h4>New Expense</h4>
        {this.state.message}
        <form onSubmit={this.handleSubmit}>
          
            <p className="mb-0"> <label htmlFor="Amount"></label>
              <input id="Amount" type="number" ref="Amount" name="amount" placeholder="Amount" required/></p>

            <div className="catagory d-block">
                <div className="d-flex w-100 ">
                   
                <p> <input  type="radio"  name="radio1"  id="Grocery"  value="Grocery"
                             checked={this.state.selectedOption === "Grocery"}
                             onChange={this.radioChange} required/>
                        <label className="Grocery ml-0" htmlFor="Grocery">Grocery</label></p>

                        <p> <input type="radio"  name="radio1" id="EatingOut"  value="EatingOut"
                            checked={this.state.selectedOption === "EatingOut"}
                            onChange={this.radioChange} required/>
                        <label  className="EatingOut"  htmlFor="EatingOut">Eating Out </label></p>

                     <p> <input type="radio"  name="radio1" id="Household"  value="Household"   
                           checked={this.state.selectedOption === "Household"}
                           onChange={this.radioChange} required/>
                        <label  className="Household"  htmlFor="Household">Household </label> </p>
                          
                        <p><input type="radio" name="radio1"  id="Utility"  value="Utility" 
                          checked={this.state.selectedOption === "Utility"}
                          onChange={this.radioChange} required/>
                        <label  className="Utility"  htmlFor="Utility">Utility </label></p>
                              

                </div>
                <div className="d-flex w-100">

                <p> <input  type="radio"  name="radio1"  id="Fuel_Auto"  value="Fuel_Auto"
                          checked={this.state.selectedOption === "Fuel_Auto"}
                          onChange={this.radioChange} required/>
                        <label className="Fuel_Auto ml-0" htmlFor="Fuel_Auto">Fuel/Auto</label></p>
                          
                        <p> <input type="radio" name="radio1"  id="Personal"  value="Personal"
                            checked={this.state.selectedOption === "Personal"}
                            onChange={this.radioChange} required/>
                        <label  className="Personal"  htmlFor="Personal">Personal</label></p>
                              
                        <p> <input  type="radio"  name="radio1"  id="Debt_Repay"  value="Debt_Repay" 
                            checked={this.state.selectedOption === "Debt_Repay"}
                            onChange={this.radioChange} required/>
                        <label className="Debt_Repay" htmlFor="Debt_Repay">Debt Repay</label></p>
                  
                        <p> <input  type="radio"  name="radio1"  id="Other"  value="Other"
                          checked={this.state.selectedOption === "Other"}
                          onChange={this.radioChange} required/>
                        <label className="Other" htmlFor="Other">Other</label></p>

                </div>
               </div>       

          <div className="d-flex w-100 ">
            <p><label htmlFor="Description"></label>
                <input className="w-auto mb-2" id="Description" type="text" ref="Description" placeholder="Spent for" required/></p>
                <Select 
                value={Sources.filter(function(e) { return e.value === selectedDrop;})}
                onChange={this.handleSourceChange} 
                options={Sources}
                required />

          </div>

          <div className="d-flex w-100 ">
              <label htmlFor="Date"></label>
               <input className="w-auto mr-2" type="date" id="Date" name="Date" ref="Date" required/>

              < input type="submit" id="submit_expense" className="w-auto"/>
          </div>
          
          

        </form>
      </div>
    )
  }
}



export default ExpenseForm
