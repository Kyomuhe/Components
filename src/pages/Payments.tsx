import React from 'react';
import wallet from '../images/wallet.png';
import insurance from '../images/insurance.png';
import business from '../images/business.png';
import mtn from '../images/mtn.PNG';
import airtel from '../images/airtel.png';
import credit from '../images/credit.png';
import master from '../images/master.PNG';
import visa from '../images/visa.PNG';
import discover from '../images/discover.PNG';
import axem from '../images/axem.PNG';
import cvc from '../images/cvc.png';
import question from '../images/question.png';
import deposit from '../images/deposit.png';
import pay from '../images/pay.png';
import third from '../images/third.png';
import card from '../images/card.png';
import forward from '../images/forward.png';
import history from '../images/history.png';
import eye from '../images/eye.png';
import transact from '../images/transact.png';




const cardData = [
  { bgColor: 'bg-[#FFE2E5]', iconBg: 'bg-[#FA5A7D]', image: wallet, amount: '66,000', label: 'Savings Balance, UGX', icon: eye },
  { bgColor: 'bg-[#FFF4DE]', iconBg: 'bg-[#FF947A]', image: business, amount: '12,500', label: 'Available Credit,Ugx', icon: question },
  { bgColor: 'bg-[#DCFCE7]', iconBg: 'bg-[#22C55E]', image: business, amount: 'Gold', label: 'Current plan', icon: question},
  { bgColor: 'bg-[#F3E8FF]', iconBg: 'bg-[#BF83FF]', image: insurance, amount: '1', label: 'AAR health insurance', icon :question }
];

const servicesData = [
  { label: "Deposit", image: deposit},
  { label: "Transfer", image: pay },
  { label: "Withdraw", image: third },
  { label: "Cards", image: card },
  { label: "Payments", image: forward },
  { label: "More", image: history }
];

const paymentOptions = [
  { id: 1, label: "Add Cards", image: credit, borderColor: "border-[#2196F3]", bgColor: "bg-[#2196F3]" },
  { id: 2, label: "MTN", image: mtn, borderColor: "border-[#F8C000]", bgColor: "bg-[#F8C000]" },
  { id: 3, label: "Airtel", image: airtel, borderColor: "border-[#E20010]", bgColor: "bg-[#E20010]" }
];

const Payments = () => {
  return (
    <div className="flex flex-col space-y-4 absolute left-[366px]" style={{ marginTop: '35px'}}>
      <div className="flex w-full max-w-4xl space-x-4">
        {cardData.map((card, index) => (
          <div key={index} className={`p-4 rounded-lg w-44 h-24 ${card.bgColor} flex flex-col justify-between`}>
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${card.iconBg}`}>
                <img className="w-6 h-6" src={card.image} alt="Icon" />
              </div>
              <p className="text-black text-lg font-semibold">{card.amount}</p>
              <img className="w-2 h-2 text-black" src ={card.icon}/>
            </div>
            <p className="text-sm text-[#080B09]">{card.label}</p>
          </div>
        ))}
      </div>
      
      {/* Services section */}
      <div className="w-full max-w-[765px] h-20 rounded-xl bg-[#4CD080] flex items-center justify-between px-4">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center h-16">
              <div className="flex flex-col items-center w-20">
                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                  <img className="w-6 h-6" src={service.image} alt="Icon" />
                </div>
                <p className="text-white text-sm font-medium">{service.label}</p>
              </div>
              {index < servicesData.length - 1 && (
                <div className="h-10 w-px bg-white/30 ml-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Payment Options and Form */}
      <div className="flex w-full mt-8 space-x-12">
        {/* Payment Options */}
        <div className="flex flex-col space-y-9">
          {paymentOptions.map((option, index) => (
            <div key={option.id} className="w-40 h-68" style={{width: '164px', height: '78px'}}>
              <div className={`${option.borderColor} border p-4 flex flex-col items-center rounded-t-lg`} style={{width: '164px', height: '78px'}}>
                <img src={option.image} alt={option.label} className="w-16 h-8" style={{width: '66px', height: '35px', marginTop: '10px'}} />
              </div>
              <div className={`${option.bgColor} flex justify-center items-center`} style={{width: '164px', height: '25px'}}>
                <p className="text-white font-medium" style={{height: '23px', fontSize: '16px', lineHeight: '24px', fontFamily: 'GT Walsheim Pro', fontWeight: '500'}}>
                  {option.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Payment Form */}
        <div className="w-full max-w-lg space-y-12" style={{width: '533px', height: '363px'}}>
          <div className="mb-4">
            <label className="block text-black font-medium mb-1">
              Enter Amount to deposit
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Min 500" 
                className="w-full px-3 py-2 border border-blue-400 rounded"
                style={{width: '530px', height: '48px', borderRadius: '4px', borderColor: '#0085FF80'}}
              />
              <div className="absolute right-3 top-3 text-gray-500">ugx</div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-black font-medium mb-1">
              Card Number
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="1234 1234 1234 1234" 
                className="w-full px-3 py-2 border border-blue-400 rounded"
                style={{width: '530px', height: '48px', borderRadius: '4px', borderColor: '#0085FF80'}}
              />
              <div className="absolute right-3 top-3 flex space-x-1">
                <img className="w-6 h-4" src={visa}></img>
                <img className="w-6 h-4" src={master}></img>
                <img className="w-6 h-4" src={axem}></img>
                <img className="w-6 h-4" src={discover}></img>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-black font-medium mb-1">
                Expiration
              </label>
              <input 
                type="text" 
                placeholder="MM/YY" 
                className="w-full px-3 py-2 border border-blue-400 rounded"
                style={{width: '255px', height: '48px', borderRadius: '4px', borderColor: '#0085FF80'}}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-black font-medium mb-1">
                CVC
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="cvc" 
                  className="w-full px-3 py-2 border border-blue-400 rounded"
                  style={{width: '255px', height: '48px', borderRadius: '4px', borderColor: '#0085FF80'}}
                />
                <img className="absolute right-3 top-3 w-6 h-4"src={cvc}></img>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              className="bg-blue-500 text-white font-medium rounded px-8 py-3"
              style={{
                width: '252px', 
                height: '49px', 
                borderRadius: '7.66px', 
                padding: '13.41px 30.65px',
                background: '#0085FF'
              }}
            >
              Add Card
            </button>
          </div>
          <div className='flex w-[314px] h-[30px] absolute left-[450px]  'style={{marginTop:'100px'}}>
            <img className='w-[35px] h-[30px]'src={transact}/>
            <p className='text-custom-blue w-[265px] h-[24px] font-[GT_Walsheim_Pro] text-[14px] font-semibold' 
>
                All payments are 100% secure</p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Payments;