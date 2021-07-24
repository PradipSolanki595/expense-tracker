import React from 'react';

class Card extends React.Component {

    constructor(props){
        super(props); 
        this.state = {

        };
      }

 render()
 {
     return (
        <div id="cards" class="">
        <div id="card1" class="glass" >
            <h3 id="card_amount" class="w-100">{this.props.totalExpense}</h3>
            <h4 id="card_title" class="w-100 mt-1">Total Expense</h4>
        </div>
        <div id="card2" class="glass " >
            <h3 id="card_amount" class="w-100">{this.props.totalIncome}</h3>
            <h4 id="card_title" class="w-100 mt-1">Total Income</h4>
        </div>
        <div id="card3" class="glass " >
            <h3 id="card_amount" class="w-100">{this.props.totalIncome - this.props.totalExpense}</h3>
            <h4 id="card_title" class="w-100 mt-1">Total Balance</h4>
        </div>
    </div>
     )

 }

}



export default Card
