import React from 'react'

const EarnMoneyOnline = () => {
  return (
    <div className='earnmoneyonline'>
         <h1>Earn Money Online | Working from Home</h1>
         <div className='div3'>
         <div className='div2'>
         <div className='div1'>
          <span>1</span>
          <h2 style={{fontSize:"30px"}}>Upload Products that you have!</h2>
          </div>
         <ul>
          <li>Create your Account by clicking <a href="here">here</a></li>
          <li>Verify your account</li>
          <li>Go to <a href="dashboard">Dashboard</a></li>
          <li>Pick any product. For example mobile phone, or any item.</li>
          <li>Search for it in the Database.</li>
          <li>If it's available, upload a photograph.</li>
          <li>Please mention the price you bought it at.</li>
         </ul>
         </div>

         <div className='div2'>
         <div className='div1'>
          <span>2</span>
          <h2 style={{fontSize:"30px"}}>Provide a brief description of how to use!</h2>
          </div>
         <ul>
          <li>Describe the product you just uploaded.</li>
          <li>Mention from where you bought it, online or offline</li>
          <li>A Video increases your chances of getting a product approved, but it is not mandatory to upload videos.</li>
         </ul>
         </div>

         <div className='div2'>
         <div className='div1'>
          <span>3</span>
          <h2 style={{fontSize:"30px"}}>On Approval get scratch cards and earn money!</h2>
          </div>
         <ul>
          <li>We will review the products you uploaded.</li>
          <li>On approval you will get a scratch card, which can be money or coupon code.</li>
          <li>Make sure you provide the correct bank details or UPI Id, to which you want the money to transfer</li>
         </ul>
         </div>
         </div>

         <div class="video-container">
         <iframe src="https://www.youtube.com/embed/TfQyg-DSHBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        
        <div class="cta">
        <a class="btn btn-primary" href="/home">Get Started!</a>
        </div>

      </div>

      
  )
}

export default EarnMoneyOnline