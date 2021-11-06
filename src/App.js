import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';




function App() { 


 // State to store the principal
 const [state, setState] = useState("");
 // State to store the  Down Payment
 const [payment, setPayment] = useState("");
 // State to store the Mortgage Principal
 const [repay, setRepay] = useState("");
 // State to store the Intrest
 const [rate, setRate] = useState("");
 //State to store the Monthly Mortgage
 const [monetize, setMonetize] = useState('');
 //State to store the loan
 const [loan, setLoan] = useState("")


// Function to Initialize The Calculation for the Monthly Mortgage
 const final = () => {
   const blue = state - payment;
   const rates = (rate/12);
   const repaid = repay * 12
   const red =   (((rates* ((1 + rates))^repaid)) /((1+rates)^repaid)-1);
   console.log(red);
  setMonetize(Math.floor((blue * red)))
  setLoan(blue)
 }
  

//Principal
 const purchase = (price) =>{
   setState(price) 
 }
 //Down Payment
 const pay = (pay) => {
  setPayment(pay)
 }
 // Loan
 const paid = (loan) => {
   setRepay(loan)
 }
 //Intrest loan
 const intrest = (intres) => {
   setRate(intres)
 }
  return (
    <div className="Container">
       <form action="" onClick={(e)=>(e.preventDefault())}>
          <div className='form-control'>
              <label htmlFor="Purchase">Purchase Price:{'$'+ state}</label>
              <input autoComplete="off" type="range" name="purchase" id="purchase"  min={10000} max={40000} onChange= {(e) =>(purchase(e.target.value))}/>
           </div>
           <div className='form-control'>
              <label htmlFor="Payment">Down Payment: {'$' + payment}</label>
              <input autoComplete="off" type="range" name='Down Payment' id='purchase' min={5000} max={20000} onChange={(e)=>(pay(e.target.value))}/>
           </div>
           <div className='form-control'>
              <label htmlFor="intrest">Repayment time: {repay + 'years'}</label>
              <input autoComplete="off" type="range" name='Down Payment' id='purchase' min={1} max={20}  onChange={(e)=>(paid(e.target.value))}/>
           </div>
           <div className='form-control'>
              <label htmlFor="intrest">Interest rate: {rate + '%'}</label>
              <input autoComplete="off" type="range" name='Down Payment' id='purchase' min={1} max={100}  onChange={(e)=>intrest(e.target.value)}/>
           </div>
           <div className="form-control">
             <label htmlFor="Loan amount">Loan amount</label>
             <input type="text" readOnly value={'$' + loan} placeholder='$0' />
           </div>
           <div className="form-control">
             <label htmlFor="Loan amount">Estimated pr.month</label>
             <input type="text"  readOnly placeholder='$0' value={'$' + monetize}/>
           </div>
           <button   onClick={(e)=>(final())}>Get a mortgage quote</button>
       </form>
    </div>
  );
}

export default App;
