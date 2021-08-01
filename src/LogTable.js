import React from 'react';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from "./util/firebase";
import DataTable from 'react-data-table-component';




let tempTotalData = [];


class LogTable extends React.Component {
 
    constructor(props){
        super(props); 
        this.state = {
            userData : JSON.parse(localStorage.getItem('user')),
         };
      }
     

componentDidMount(){
    let userData = this.state.userData
    let userName = userData.googleId

    var ExpenseRef = firebase.database().ref(userName + " ExpenseData"); 

    ExpenseRef.on('value', (snapshot) => {
    var Expenses = snapshot.val();
    for (let id in Expenses){
      tempTotalData.push(Expenses[id]);
    }
  });
  console.log(tempTotalData)
}




 render()
 {  
    const columns = [
        {
          name: 'Date',
          selector: 'Date',
          sortable: true,
        },
        {
          name: 'Type',
          selector: 'Type',
          sortable: true,
          right: true,
        },
        {
          name: 'Description',
          selector: 'Description',
          sortable: true,
          right: true,
        },
        {
          name: 'Amount',
          selector: 'Amount',
          sortable: true,
          right: true,
        },
        {
          name: 'Source',
          selector: 'Source',
          sortable: true,
          right: true,
        },
      ];

     return (
        <div>
             <DataTable
                 title="Logs"
                 columns={columns}
                 data={tempTotalData}
             />
        </div>





     )
 }
}

export default LogTable