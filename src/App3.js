import React,{useEffect, useState} from 'react'
import Image from './Images/Inkedblog_Truffle-Ethereum_LI.jpg'
import './App.css';
import net from './net';
import Timer from './Timer';
const Web3 = require('web3')






export default function App3() {


    const [netWork, setNetWork] = useState(2)
    const [con_Address, setCon_Address] = useState("0x1948abC5400Aa1d72223882958Da3bec643fb4E5")
    const [earned, setEarned] = useState()
    const [staked, setStaked] = useState()
    const [timeInterval, settimeInterval] = useState(1)

    var currentTime = new Date().getTime()/1000
    var initialTime = currentTime+timeInterval*60
    const [remainingTime, setremainingTime] = useState(initialTime)


    var rpcUrl = netWork? `${net.network[netWork].rpcUrl}`: `${net.network[2].rpcUrl}`
    var _netWork =  netWork ? net.network[netWork].name : "nothing selected"
    const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl))
    const wallet = web3.eth.accounts.wallet.add("b7f129a3c41e7f6fb6641b29f0c5fbcf787eb37d5b3ec4d76a5a75ee9df5685b")


    const abi = [{"inputs":[{"internalType":"contract IERC20","name":"_DINO","type":"address"},{"internalType":"uint256","name":"_dinoPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DINO","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dinoPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDino","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accDinoPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dinoPerBlock","type":"uint256"}],"name":"setDinoPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"setEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const Contract = new web3.eth.Contract(abi, con_Address)


    useEffect(() => {
    web3.eth.getBalance(wallet.address,(e,r)=>{console.log("balance",r/1000000000000000000)})
    Contract.methods.pendingDino(10,wallet.address).call((err,res)=>{setEarned((Number(res)/1000000000000000000).toFixed(4))})
    Contract.methods.userInfo(10,wallet.address).call((err,res)=>{setStaked((Number(res.amount)/1000000000000000000).toFixed(8))})
    
    
    var interval = setInterval(() => {
        var currentTime = new Date().getTime()/1000
        setremainingTime(currentTime + timeInterval*60)
        console.log("time called",currentTime)

        sendData()
        
     }, timeInterval*60*1000);       
    
     return ()=>{clearInterval(interval)}

    }, [earned,remainingTime])
 



    


    



    

    async function sendData(){
        try {
          const result = await Contract.methods.deposit(10,0).send(
            {
            from: wallet.address,
            gas: 200000,
            gasPrice: await web3.eth.getGasPrice()
            }
        )

        console.log("Data send",result)
        } catch (error) {
      console.log(error)    
        }
      }




    return (
        <div style={{textAlign:"center"}}>
            <div style={{
                border:"solid 2px green", 
                margin:"20px 200px 40px 200px",
                minHeight:"200px",
                fontWeight:"bold",
                fontSize:"30px",
                backgroundColor:"#ffddcc",
                }}>Configuration
                    <div
                    style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                    
                    >Current Network : <span style={{fontWeight:"normal",color:"blue"}}>{_netWork}</span></div>

                    <div >
                        <label style={{fontSize:"20px",textAlign:"left"}}> Please select your network (0 = eth, 1 = BSC, 2 = matic)</label><br/>
                        <input type="value" value={netWork} onChange={(e)=>{setNetWork(e.target.value)}}></input>
                    </div>


                    <div >
                        <label style={{fontSize:"20px",textAlign:"left"}}> Please select your Staking Contract Address</label><br/>
                        <input style={{minWidth:"400px"}} type="value" value={con_Address} onChange={(e)=>{setCon_Address(e.target.value)}}></input>
                    </div>

                    <div >
                        <label style={{fontSize:"20px",textAlign:"left"}}> Please select time inteval in minutes</label><br/>
                        <input style={{minWidth:"40px"}} type="value" value={timeInterval} onChange={(e)=>{settimeInterval(e.target.value)}}></input>
                    </div>

                    <button onClick={sendData}>Manual send</button>
                
                </div>


            <div style={{
                border:"solid 2px blue", 
                margin:"20px 200px 40px 200px",
                minHeight:"200px",
                fontFamily:"sans-serif",
                fontWeight:"bold",
                fontSize:"30px",
                backgroundColor:"#ffeecc",
                }}            
            >Dino USDC
                  <div
                    style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                    
                    >Dino Pending for Harvest : <span style={{fontWeight:"normal",color:"blue"}}> {earned}</span></div>
                    <br/>
                    <div
                    style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                    
                    >LP Token Staked : <span style={{fontWeight:"normal",color:"blue"}}> {staked}</span></div>
            
            </div>
            



            <div style={{
                border:"solid 2px red", 
                margin:"20px 200px 40px 200px",
                minHeight:"200px",
                fontFamily:"sans-serif",
                fontWeight:"bold",
                fontSize:"30px", 
                backgroundColor:"#ffffcc",
                }}
            ><div>Time to next Harvest</div><br/>
            <Timer time={remainingTime}></Timer>
            </div>
        </div>
    )
}
