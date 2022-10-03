import React from 'react'

const Contact = () => {
  function handleClick() {
    alert("Thank You! Your form has been submitted.");
  }
  
 
  return (
    <div>
    <div className='contact' style={{fontFamily:"Roboto"}}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>You can contact our team by filling this form -</p>
    <div className='box3'>

    <div className='box1'>
    <label>First name*</label><br />
    <input style={{width:"555px"}} placeholder='Please enter your first name*'/><br />
    <label>Email*</label><br/>
    <input style={{width:"555px"}} placeholder='Please enter your email*'/>
    </div>

    <div className='box2'>
    <label>Last name*</label><br />
    <input style={{width:"555px"}} placeholder='Please enter your last name*'/><br />
    <label>Phone</label><br/>
    <input style={{width:"555px"}} placeholder='Please enter your phone'/>
    </div>
    </div>
    <label>Message*</label><br />
    <textarea style={{width:"1140px",height:"94px"}} placeholder='Message for me*'/><br />

    <button onClick={handleClick}
    style={{marginTop:"30px",
    backgroundColor:"green",color:"white",border:"none",
    borderRadius:"5px",
    
    }}>Send message</button>
    
    </div> 
    </div>
  )
}

export default Contact