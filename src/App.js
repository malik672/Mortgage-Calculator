import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';




function App() {

 const [state, setState] = useState("");
 const [payment, setPayment] = useState("");
 const [repay, setRepay] = useState("");
 const [rate, setRate] = useState("");
 const [monetize, setMonetize] = useState('')
 const [loan, setLoan] = useState("")
 const final = () => {
   const blue = state - payment;
   const rates = (rate/12);
   const repaid = repay * 12
   const red =   (((rates* ((1 + rates))^repaid)) /((1+rates)^repaid)-1);
   console.log(red);
  setMonetize(Math.floor((blue * red)))
  setLoan(blue)
 }
  


 const purchase = (price) =>{
   setState(price) 
 }
 const pay = (pay) => {
  setPayment(pay)
 }
 const paid = (loan) => {
   setRepay(loan)
 }
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
