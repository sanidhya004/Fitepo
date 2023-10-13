import React from 'react'
import './UpperStat.css'
const UpperStat = () => {
  return (
    <>
    <div className="upper_card">
        <div className="img_wrapper"> <img src="money.png"/></div>
        <div className="text_wrapper">
            <p className="text_1">Earning</p>
            <p className="text_2">$ 195</p>
            <p className="text_3"> <span style={{color:"green"}}>37.8%</span>This Month</p>
        </div>
    </div>
    <div className="upper_card">
    <div className="img_wrapper"> <img src="passbook.png"/></div>
    <div className="text_wrapper">
            <p className="text_1">Earning</p>
            <p className="text_2">$ 195</p>
            <p className="text_3"> <span style={{color:"green"}}>37.8%</span>This Month</p>
        </div>
    </div>
    <div className="upper_card">
    <div className="img_wrapper"> <img src="wallet.png"/></div>
    <div className="text_wrapper">
            <p className="text_1">Earning</p>
            <p className="text_2">$ 195</p>
            <p className="text_3"> <span style={{color:"green"}}>37.8%</span>This Month</p>
        </div>
    </div>
    <div className="upper_card">
    <div className="img_wrapper"> <img src="money.png"/></div>
    <div className="text_wrapper">
            <p className="text_1">Earning</p>
            <p className="text_2">$ 195</p>
            <p className="text_3"> <span style={{color:"green"}}>37.8%</span>This Month</p>
        </div>
 
   
    </div>
    
    </>
  )
}

export default UpperStat