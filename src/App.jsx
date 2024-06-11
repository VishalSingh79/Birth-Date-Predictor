import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show,setShow]=useState(false);
 const data=[
      [
        [1,3,5,7],
        [9,11,13,15],
        [17,19,21,23],
        [25,27,29,31]
      ],
      [
        [2,3,6,7],
        [10,11,14,15],
        [18,19,22,23],
        [26,27,30,31]
      ],
      [
        [4,5,6,7],
        [12,13,14,15],
        [20,21,22,23],
        [28,29,30,31]
      ],
      [
        [8,9,10,11],
        [12,13,14,15],
        [24,25,26,27],
        [28,29,30,31]
      ],
      [
        [16,17,18,19],
        [20,21,22,23],
        [24,25,26,27],
        [28,29,30,31]
      ]
 ]
 const[predictor,setPredictor]=useState(0);
 let [i,setI]=useState(0);
 const [date, setDate] = useState(0);
  let res=0;
 function changeHandler2()
      {
        setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 300);
     if(i<4){
      const sum = date;
      const newDate = sum + (Math.pow(2, i) * 0);
      setDate(newDate);        
      setI(i+1);
       } 
    else if(i==4){
     
      const sum = date;
      const newDate = sum + (Math.pow(2, i) * 0);
      setDate(newDate);  
      res=newDate;
      showresult();
       }
    }
function changeHandler1() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 300);
    if (i < 4) {
        const sum = date;
        const newDate = sum + (Math.pow(2, i) * 1);
   
        setDate(newDate);
        setI(i + 1);
    } 
    else if (i === 4) {
        const sum = date;
        const newDate = sum + (Math.pow(2, i) * 1);
    
        setDate(newDate);
        res=newDate;
        showresult();
    }
}


function showresult() {
     console.log(res); 
     setPredictor(1);
}
  
  return (
    <div className='main-container'>
     {predictor?<div></div>:<div className='heading'>Click Yes if your DOB is in the box, otherwise click No</div>
     }
       {predictor? 
       <div className='result-box'>
          <h2>Your Birth-Date is</h2>
          <h1>{date}</h1>
         
         <div><button onClick={()=>{
            setI(0);
            setDate(0);
            setPredictor(0);
          }}>Try Again</button>
          </div> 
       </div>
       : <div className='main-box'>
          
               <div className='content'>
               {
                show?
                <div class="spinner"></div>
                :
               <>

                <div className='row1'>
                      <p className='colum'>{data[i][0][0]}</p>
                      <p className='colum'>{data[i][0][1]}</p>
                      <p className='colum'>{data[i][0][2]}</p>
                      <p>{data[i][0][3]}</p>
                     </div>
                     <div className='row2'>
                      <p className='colum'>{data[i][1][0]}</p>
                      <p className='colum'>{data[i][1][1]}</p>
                      <p className='colum'>{data[i][1][2]}</p>
                      <p>{data[i][1][3]}</p>
                     </div>
                     <div className='row3'>
                      <p className='colum'>{data[i][2][0]}</p>
                      <p className='colum'>{data[i][2][1]}</p>
                      <p className='colum'>{data[i][2][2]}</p>
                      <p>{data[i][2][3]}</p>
                     </div>
                     <div className='row4'>
                      <p className='colum'>{data[i][3][0]}</p>
                      <p className='colum'>{data[i][3][1]}</p>
                      <p className='colum'>{data[i][3][2]}</p>
                      <p>{data[i][3][3]}</p>
                     </div>
                  </>
               }
                     
               </div>
               <div className='btns'>
                <button onClick={changeHandler1} >Yes</button>
                <button onClick={changeHandler2} >No</button>
               </div>
        </div>
       }
    </div>
  )
}

export default App
