import React from 'react';
import ExpenseForm from "./ExpenseForm"
import Log from "./Log"
import Card from "./Card"
import IncomeForm from "./IncomeForm"
import BarChartIncome from './BarChartIncome';
import BarChartExpense from './BarChartExpense';
import Select from "react-select";
import firebase from "./util/firebase";

let Years = [
  { label: 2020 , value: 2020 },
  { label: 2021 , value: 2021 },
  { label: 2022 , value: 2022 },
];

let Months = [
  { label: "January" , value: "01" },
  { label: "February" , value: "02" },
  { label: "March" , value: "03" },
  { label: "April" , value: "04" },
  { label: "May" , value: "05" },
  { label: "June" , value: "06" },
  { label: "July" , value: "07" },
  { label: "August" , value: "08" },
  { label: "September" , value: "09" },
  { label: "October" , value: "10" },
  { label: "November" , value: "11" },
  { label: "December" , value: "12" },
];

class Dashboard extends React.Component {

  constructor(props){

    super(props);
    this.state = {
        ExpenseData : [],
        IncomeData : [],
        selectedMonth: "07",
        selectedYear: 2021 ,
    };
  }
  changeDatabase = () => {
    var tempExpenseData = [];
    var ExpenseRef = firebase.database().ref("ExpenseData"); 
    ExpenseRef.on('value', (snapshot) => {
    var Expenses = snapshot.val();
    for (let id in Expenses){
      tempExpenseData.push(Expenses[id])
    }
  })
  this.setState( {ExpenseData : tempExpenseData})
}

changeDatabase1 = () => {
    var tempIncomeData = [];
    var IncomeRef = firebase.database().ref("IncomeData"); 
    IncomeRef.on('value', (snapshot) => {
    var Incomes = snapshot.val();
    for (let id in Incomes){
      tempIncomeData.push(Incomes[id])
    }
})
this.setState( {IncomeData : tempIncomeData})
}


  componentDidMount(){
    this.changeDatabase();
    this.changeDatabase1();
  }
  

handleYearChange = (x) => {
  this.setState({ selectedYear: x.value });
}
handleMonthChange = (x) => {
  this.setState({ selectedMonth: x.value });
}



 render (){

  const { selectedYear, selectedMonth } = this.state;
  // data for Logs => Start //

var x = this.state.ExpenseData
var y = this.state.IncomeData

var FilterDate = this.state.selectedYear + "-" +this.state.selectedMonth
let ExpenseData = x.filter(finder)
let IncomeData = y.filter(finder)
function finder(e){  
  var str = e.Date;
  var patt = new RegExp(FilterDate,"g")
  var res = patt.test(str);
  if (res == true){ return e}
}
console.log(FilterDate)


let data = ExpenseData.concat(IncomeData)
let sortedData = data.sort(function(a, b){return b.Key-a.Key});
let data1 = sortedData.map(x => <Log Type={x.Type} Amount={x.Amount} Description={x.Description} Date={x.Date} Catagory={x.Catagory}/>)
  // data for Logs => End//


  // data for Cards => Start //
var expenseAmount = ExpenseData.map((key)=>parseInt(key.Amount));
var totalExpense = expenseAmount.reduce(function(a, b){ return a + b; }, 0);

var incomeAamount = IncomeData.map((key)=>parseInt(key.Amount));
var totalIncome = incomeAamount.reduce(function(a, b){ return a + b; }, 0);

// data for Cards => End //


// data for bar chart start//
let myAccountTotalArray = IncomeData.map( (k) => { 
  if (k.Catagory==="MyAccount") { return parseInt(k.Amount)} 
  else { return 0}
})
let myAccountTotal = myAccountTotalArray.reduce(function (a,b) { return a + b;},0)

let herAccountTotalArray = IncomeData.map( (k) => { 
  if (k.Catagory==="HerAccount") { return parseInt(k.Amount)} 
  else { return 0}
})
let herAccountTotal = herAccountTotalArray.reduce(function (a,b) { return a + b;},0)

let cashTotalArray = IncomeData.map((k) => { 
  if (k.Catagory==="Cash") { return parseInt(k.Amount)} 
  else { return 0}
})
let cashTotal = cashTotalArray.reduce(function (a,b) { return a + b;},0)

let otherTotalArray = IncomeData.map( (k) => { 
  if (k.Catagory==="OtherIncome") { return parseInt(k.Amount)} 
  else { return 0}} )
let otherTotalIncome = otherTotalArray.reduce(function (a,b) { return a + b;},0)


let GroceryTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Grocery") { return parseInt(k.Amount)} 
  else { return 0}
})
let GroceryTotal = GroceryTotalArray.reduce(function (a,b) { return a + b;},0)

let EatingOutTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="EatingOut") { return parseInt(k.Amount)} 
  else { return 0}
})
let EatingOutTotal = EatingOutTotalArray.reduce(function (a,b) { return a + b;},0)

let HouseholdTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Household") { return parseInt(k.Amount)} 
  else { return 0}
})
let HouseholdTotal = HouseholdTotalArray.reduce(function (a,b) { return a + b;},0)

let UtilityTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Utility") { return parseInt(k.Amount)} 
  else { return 0}
})
let UtilityTotal = UtilityTotalArray.reduce(function (a,b) { return a + b;},0)

let Fuel_AutoTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Fuel_Auto") { return parseInt(k.Amount)} 
  else { return 0}
})
let Fuel_AutoTotal =Fuel_AutoTotalArray.reduce(function (a,b) { return a + b;},0)

let PersonalTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Personal") { return parseInt(k.Amount)} 
  else { return 0}
})
let PersonalTotal = PersonalTotalArray.reduce(function (a,b) { return a + b;},0)

let Debt_RepayTotalArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Debt_Repay") { return parseInt(k.Amount)} 
  else { return 0}
})
let Debt_RepayTotal = Debt_RepayTotalArray.reduce(function (a,b) { return a + b;},0)

let OtherTotalExpenseArray = ExpenseData.map( (k) => { 
  if (k.Catagory==="Other") { return parseInt(k.Amount)} 
  else { return 0}
})
let OtherTotalExpense = OtherTotalExpenseArray.reduce(function (a,b) { return a + b;},0)

let MyAccountSourceArray = ExpenseData.map( (k) => { 
  if (k.Source ==="MyAccount") { return parseInt(k.Amount)} 
  else { return 0}
})
let MyAccountSourceTotal = MyAccountSourceArray.reduce(function (a,b) { return a + b;},0)


let HerAccountSourceArray = ExpenseData.map( (k) => { 
  if (k.Source ==="HerAccount") { return parseInt(k.Amount)} 
  else { return 0}
})
let HerAccountSourceTotal = HerAccountSourceArray.reduce(function (a,b) { return a + b;},0)

let CashSourceArray = ExpenseData.map( (k) => { 
  if (k.Source ==="Cash") { return parseInt(k.Amount)} 
  else { return 0}
})
let CashSourceTotal = CashSourceArray.reduce(function (a,b) { return a + b;},0)

let OtherSourceArray = ExpenseData.map( (k) => { 
  if (k.Source ==="Other") { return parseInt(k.Amount)} 
  else { return 0}
})
let OtherSourceTotal = OtherSourceArray.reduce(function (a,b) { return a + b;},0)

// data for bar chart end //


 return (
        <div class="main_div">
           {/* <div class="navbar ">
            </div> */}
         <div class="dashboard">
           <div id="topBar" class="">
              <div class="filterdate" style= {{"margin": "2.71vh 3vw;"}}> 

              <Select value={Months.filter(function(e) { return e.value === selectedMonth;})}
                onChange={this.handleMonthChange} 
                options={Months} />

                <Select value={Years.filter(function(e) { return e.value === selectedYear;})}
                onChange={this.handleYearChange} 
                options={Years} />

              </div>
              <div>             
                <Card totalExpense = {totalExpense} totalIncome = {totalIncome}  />
              </div>

             </div>
           <div id="container1" class="container1">
              <div class="inputs">
                <div id="row1" class="row1">
                   <ExpenseForm onChangeDatabase={this.changeDatabase}/>
                   <IncomeForm onChangeDatabase1={this.changeDatabase1}/>
                   </div>
                <div id="row2" class="row2 ml-4 mt-3">
                   <BarChartIncome 
                   totalExpense = {totalExpense}
                   totalIncome = {totalIncome} 
                   myAccountTotal = {myAccountTotal}
                   herAccountTotal = {herAccountTotal}
                   cashTotal = {cashTotal}
                   otherTotal = {otherTotalIncome}
                   MyAccountSourceTotal = {MyAccountSourceTotal}
                   HerAccountSourceTotal = {HerAccountSourceTotal}
                   CashSourceTotal = {CashSourceTotal}
                   OtherSourceTotal = {OtherSourceTotal}
                   />
                   <BarChartExpense 
                   totalExpense = {totalExpense}
                   GroceryTotal = {GroceryTotal}
                   EatingOutTotal = {EatingOutTotal}
                   HouseholdTotal = {HouseholdTotal}
                   UtilityTotal = {UtilityTotal}
                   Fuel_AutoTotal = {Fuel_AutoTotal}
                   PersonalTotal = {PersonalTotal}
                   Debt_RepayTotal = {Debt_RepayTotal}
                   OtherTotalExpense = {OtherTotalExpense}
                   />
                 </div>
                </div>
              <div class="history glass p-1">
                   {data1}
               </div>
           </div>
         </div>

        </div>
  )
 }
}



export default Dashboard