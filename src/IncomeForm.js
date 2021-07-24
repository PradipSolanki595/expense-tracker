import React from 'react';
import firebase from "./util/firebase";

class IncomeForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
        DataBase : [],
        selectedOption: 'Yes'
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

    let IncomeRef = firebase.database().ref("IncomeData"); 

    var tempFormData = {
          Key : Date.now(),
          Type : "income",
          Amount: this.refs.Amount.value,
          Description: this.refs.Description.value,
          Date: this.refs.Date.value,
          Catagory: this.state.selectedOption
      };

      IncomeRef.push(tempFormData)
    //   var x = this.state.DataBase;
    //   x.push(tempFormData);

    // this.setState({DataBase : x });
    this.props.onChangeDatabase1();

  }


  render () {
    return (
      <div id="income" class=" glass ">
        <h4>New Income</h4>
        {this.state.message}
        <form onSubmit={this.handleSubmit}>
          
            <p className="mb-0"> <label htmlFor="Amount"></label>
              <input id="Amount" type="number" ref="Amount" name="amount" placeholder="Amount" required/></p>

            <div className="catagory d-block">
                <div className="d-flex w-100 ">
                   
                <p> <input  type="radio"  name="radio1"  id="MyAccount"  value="MyAccount"
                             checked={this.state.selectedOption === "MyAccount"}
                             onChange={this.radioChange} required/>
                        <label className="MyAccount ml-0" htmlFor="MyAccount">My Account</label></p>

                        <p> <input type="radio"  name="radio1" id="HerAccount"  value="HerAccount"
                            checked={this.state.selectedOption === "HerAccount"}
                            onChange={this.radioChange} required/>
                        <label  className="HerAccount"  htmlFor="HerAccount">Her Account</label></p>

                     <p> <input type="radio"  name="radio1" id="Cash"  value="Cash"   
                           checked={this.state.selectedOption === "Cash"}
                           onChange={this.radioChange} required/>
                        <label  className="Cash"  htmlFor="Cash">Cash</label> </p>
                          
                        <p><input type="radio" name="radio1"  id="OtherIncome"  value="OtherIncome" 
                          checked={this.state.selectedOption === "OtherIncome"}
                          onChange={this.radioChange} required/>
                        <label  className="OtherIncome"  htmlFor="OtherIncome">Other</label></p>
                              

                </div>

               </div>       

          <div className="d-flex w-100 ">
            <p><label htmlFor="Description"></label>
                <input className="w-auto mb-2" id="Description" type="text" ref="Description" placeholder="Recived for" required/></p>
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



export default IncomeForm
