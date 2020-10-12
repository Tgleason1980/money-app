import React, {useEffect} from 'react';
import "../components/counter.css";

const Counter = (props) => {
const totalFives = props.fives * 5;
const totalTens = props.tens * 10;
const totalTwenties = props.twenties * 20;
const totalFifties = props.fifties * 50;
const totalHundreds = props.hundreds * 100;



useEffect(()=>{
    const dataOne = localStorage.getItem("ones");
    const dataFive = localStorage.getItem("fives");
    const dataTen = localStorage.getItem("tens");
    const dataTwenty = localStorage.getItem("twenties");
    const dataFifty = localStorage.getItem("fifties");
    const dataHundred = localStorage.getItem("hundreds");
    
    if (dataOne){
        props.setOnes(JSON.parse(dataOne));
        
    }
    if (dataFive){
        props.setFives(JSON.parse(dataFive));
    }
    if (dataTen){
        props.setTens(JSON.parse(dataTen));
    }
    if (dataTwenty){
        props.setTwenties(JSON.parse(dataTwenty));
    }
    if (dataFifty){
        props.setFifties(JSON.parse(dataFifty));
    }
    if (dataHundred){
        props.setHundreds(JSON.parse(dataHundred));
    }
   
},[]);
const totalAmountNo =
()=>{
    if(props.ones + totalFives + totalTens + totalTwenties + totalFifties + totalHundreds < 0){
       return 0;
    }
    else{
      return (
          props.ones + totalFives + totalTens + totalTwenties + totalFifties + totalHundreds
  )
    }
};totalAmountNo() 

const totalBillsNo =
()=>{
    if(props.ones + props.fives + props.tens + props.twenties + props.fifties + props.hundreds < 0){
       return 0;
    }
    else{
      return (
        props.ones + props.fives + props.tens + props.twenties + props.fifties + props.hundreds
  )
    }
};totalBillsNo() 

console.log(totalAmountNo)
const totalAmount = totalAmountNo();
const totalBills = totalBillsNo();
useEffect(()=>{
    localStorage.setItem("ones", JSON.stringify(props.ones))
    localStorage.setItem("fives", JSON.stringify(props.fives))
    localStorage.setItem("tens", JSON.stringify(props.tens))
    localStorage.setItem("twenties", JSON.stringify(props.twenties))
    localStorage.setItem("fifties", JSON.stringify(props.fifties))
    localStorage.setItem("hundreds", JSON.stringify(props.hundreds))
},[props.ones, props.fives, props.tens, props.twenties, props.fifties, props.hundreds]);
    return (
    <div className='main-window'>    
      <div className="main_Display">
        <div>
            <div className='display'>
                <h4>Ones: {props.ones}</h4>
            </div>
           <button className="dollars" onClick={()=>props.setOnes(props.ones + 1)}>Ones Up</button>    
           <button className="dollars" onClick={()=>props.setOnes(props.ones - 1)}>Ones Down</button> 
        </div>
        <div>
            <div className='display'>
                <h4>Fives: {props.fives}</h4>
            </div>
          <button className="dollars" onClick={()=>props.setFives(props.fives + 1)}>Fives Up</button> 
          <button className="dollars" onClick={()=>props.setFives(props.fives - 1)}>Fives Down</button>
        </div>
        <div>
            <div className='display'>
                <h4>Tens: {props.tens}</h4>
            </div>
           <button className="dollars" onClick={()=>props.setTens(props.tens + 1)}>Tens Up</button>    
           <button className="dollars" onClick={()=>props.setTens(props.tens - 1)}>Tens Down</button> 
        </div>
        <div>
            <div className='display'>
                <h4>Twenties: {props.twenties}</h4>
            </div>
          <button className="dollars" onClick={()=>props.setTwenties(props.twenties + 1)}>Twenties Up</button> 
          <button className="dollars" onClick={()=>props.setTwenties(props.twenties - 1)}>Twenties Down</button>
        </div>
        <div>
            <div className='display'>
                <h4>Fifties: {props.fifties}</h4>
            </div>
           <button className="dollars" onClick={()=>props.setFifties(props.fifties + 1)}>Fifties Up</button>    
           <button className="dollars" onClick={()=>props.setFifties(props.fifties - 1)}>Fifties Down</button> 
        </div>
        <div>
            <div className='display'>
                <h4>Hundreds: {props.hundreds}</h4>
            </div>
          <button className="dollars" onClick={()=>props.setHundreds(props.hundreds + 1)}>Hundreds Up</button> 
          <button className="dollars" onClick={()=>props.setHundreds(props.hundreds - 1)}>Hundreds Down</button>
        </div>
    </div>
    <div className='displayBottom'>
    
    <div className='display bills'>
        <h4>Total Bills: {totalBills}</h4>
    </div>
    <div className='display amount'>
        <h4>Total Amount: ${totalAmount}</h4>
        
    </div>
  </div>
</div>
    );
 
  };
  
  export default Counter;