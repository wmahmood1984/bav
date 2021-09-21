import  { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import App5 from './App5';
import { initWeb3 } from './state/ui';
import { Mint,setFarm,setPool,SetconaddressSelected } from './state/ui';


const Web3 = require('web3')


export default function App4() {

  const PrivateKey = process.env.REACT_APP_PrivateKey
 

  
    const [isOn,setTimerOn ] = useState(false);
    const [timeInterval, settimeInterval] = useState("")
    const [timeIntervalSelected, settimeIntervalSelected] = useState(25)
    const [Seconds, setSeconds] = useState(0);
    const [Minutes, setMinutes] = useState(25);
    const [netWork, setNetWork] = useState(2)
    const [netWorkSelected, setNetWorkSelected] = useState(2)
    const [con_Address, setCon_Address] = useState(0)
//const [con_AddressSelected, setcon_AddressSelected] = useState(0)
 
    const [lpName,setlpName] = useState(0)
    const [lpNameSelected,setlpNameSelected] = useState(0)
    const [name , setName] = useState();
    const [rpcURL, setRPCURL] = useState();
    const [chainId, setChainID] = useState();
    const [farmAbi, setfarmAbi] = useState();
    const [farmAddress, setfarmAddress] = useState();
    const [farmName, setfarmName] = useState();
    const [farmFunction, setfarmFunction] = useState();
    const [lptokenAddress, setlptokenAddress] = useState();
    const [poolId, setpoolId] = useState();
    const [poolName, setpoolName] = useState();
    const [ App5isOn,setApp5TimerOn] = useState(false)
    const [App5Seconds, setApp5Seconds] = useState(10);

    const dispatch = useDispatch();
    const net1  = useSelector((state)=>{
      const result =  state.adoptReducer.networkArray; 
     return result
     });


    const farmArray  = useSelector((state)=>{
      const result =  state.adoptReducer.farmArray; 
     return result
     });

     const con_AddressSelected  = useSelector((state)=>{
      const result =  state.adoptReducer.con_AddressSelected; 
     return result
     });



     const toggle  = useSelector((state)=>{
      const result =  state.adoptReducer.toggle; 
     return result
     });


     const pendingToken  = useSelector( (state)=>{
      const result =   state.adoptReducer.pendingToken; 
     return result
     });

     const stakedToken  = useSelector((state)=>{
      const result =  state.adoptReducer.stakedToken; 
     return result
     });



     const poolArray  = useSelector((state)=>{
      const result =  state.adoptReducer.poolArray; 
     return result
     });


     const address  = useSelector((state)=>{
      const result =  state.adoptReducer.address; 
     return result
     });






     var filteredPool = poolArray?  poolArray.filter(entry => entry.lpTokenAddress==farmArray[con_AddressSelected].contractAddress): []

     const web3A = net1 == null? null : new Web3(new Web3.providers.HttpProvider(net1[netWorkSelected].rpcURL))
     const Contract = farmArray == null ? null :   new web3A.eth.Contract(JSON.parse(farmArray[con_AddressSelected].Abi) ,farmArray[con_AddressSelected].contractAddress);
     const wallet = net1 == null? null:  web3A.eth.accounts.wallet.add(PrivateKey)
     




     

    

    
     var myInterval; 
useEffect(() => {
    dispatch(initWeb3({netWorkSelected,lpNameSelected}))


    myInterval = setInterval(() => {
 
    
        if(isOn === true){
        if (Seconds > 0) {
          setSeconds(Seconds-1);
        }
        if (Seconds === 0) {
          if (Minutes === 0) {
            clearInterval(myInterval);
            console.log("Time call initiated")
            setMinutes(timeIntervalSelected-1)
            setSeconds(59)
            sendData()
          } else {
            setMinutes(Minutes -1)
            setSeconds(59);
          }
        }
      }}, 1000);

    return () => {clearInterval(myInterval)}
}, [Seconds, isOn, con_AddressSelected,lpNameSelected,toggle,netWorkSelected])


function handleNetworkSubmit(e){
  e.preventDefault();
  dispatch(Mint({chainId, rpcURL, name}))
  setName("")
  setRPCURL("")
  setChainID("")
}

function handleFarmSubmit(e){
  e.preventDefault();
  dispatch(setFarm({farmAddress, farmAbi,farmName,farmFunction}))
  setfarmAbi("")
  setfarmName("")
  setfarmFunction("")
  setfarmAddress("")
}

function handlePoolSubmit(e){
  e.preventDefault();
  dispatch(setPool({lptokenAddress,poolId,poolName}))
  setlptokenAddress("")
  setpoolId("")
  setpoolName("")

}




async function sendData(){
  //   try {
  //     const result = await Contract.methods.deposit(lpNameSelected,0).send(
  //       {
  //       from: wallet.address,
  //       gas: 200000,
  //       gasPrice: await web3A.eth.getGasPrice()
  //       }
  //   )

  //   console.log("Data send",result)
  //   } catch (error) {
  // console.log(error)    
  //   }

  setApp5Seconds(5);  setApp5TimerOn(!App5isOn)
  }

function HarvestAll(){}





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
                
                >Current Network : <span style={{fontWeight:"normal",color:"blue"}}>{net1&& net1[netWorkSelected].name}</span></div>
                <div
                style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                >Current Form website is : <span style={{fontWeight:"normal",color:"blue"}}>{farmArray && farmArray[con_AddressSelected].name}</span></div>

                <div
                style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                >Current pool Selected is : <span style={{fontWeight:"normal",color:"blue"}}>{poolArray && poolArray[lpNameSelected].name}</span></div>

                <div
                style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                >Current time interval is : <span style={{fontWeight:"normal",color:"blue"}}>{timeIntervalSelected} minutes</span></div>
                
                {!isOn ? 
                <div>
                <div style={{display:"block"}}>
                    <label style={{fontSize:"20px",textAlign:"left"}}> Please enter the network parameters </label><br/>
                    <input type="value" placeholder="enter chain id in numebrs" value={chainId} onChange={(e)=>{setChainID(e.target.value)}}></input>
                    <input type="value" placeholder="enter RPC url" value={rpcURL} onChange={(e)=>{setRPCURL(e.target.value)}}></input>
                    <input type="value" placeholder="enter name of network" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                    <button onClick={handleNetworkSubmit} >configure new network</button>
                </div>
                
                <div >

                <select value= {netWork} onChange = {(e)=>{setNetWork(e.target.value)}}>
                  {net1 && net1.map((entry)=><option key={entry.id} value={entry.id}>{entry.name}</option>)}
                  </select>
                  <button onClick={()=>{setNetWorkSelected(netWork)}}>Select Network</button> 

             
                </div>

                <div style={{display:"block"}}>
                    <label style={{fontSize:"20px",textAlign:"left"}}> Please enter the farm parameters </label><br/>
                    <input type="value" placeholder="abi here" value={farmAbi} onChange={(e)=>{setfarmAbi(e.target.value)}}></input>
                    <input type="value" placeholder="address here" value={farmAddress} onChange={(e)=>{setfarmAddress(e.target.value)}}></input>
                    <input type="value" placeholder="farm name here" value={farmName} onChange={(e)=>{setfarmName(e.target.value)}}></input>
                    <input type="value" placeholder="farm function here" value={farmFunction} onChange={(e)=>{setfarmFunction(e.target.value)}}></input>
                    <button onClick={handleFarmSubmit} >configure the farm</button>
                </div>


                <div >
                  <select value= {con_Address} onChange = {(e)=>{setCon_Address(e.target.value)}}>
                  {farmArray &&  farmArray.map((entry)=><option key={entry.id} value={entry.id}>{entry.name}</option>)}
                  </select>
                  <button onClick={()=>{dispatch(SetconaddressSelected(con_Address))}}>Submit Farm</button>      
            
                </div>

                <div style={{display:"block"}}>
                    <label style={{fontSize:"20px",textAlign:"left"}}> Please enter the pool parameters </label><br/>
                    <input type="value" placeholder="farm Address here" value={lptokenAddress} onChange={(e)=>{setlptokenAddress(e.target.value)}}></input>
                    <input type="value" placeholder="pool Id here" value={poolId} onChange={(e)=>{setpoolId(e.target.value)}}></input>
                    <input type="value" placeholder="pool name here" value={poolName} onChange={(e)=>{setpoolName(e.target.value)}}></input>
    
                    <button onClick={handlePoolSubmit} >configure the Pool</button>
                </div>



                <div >
                  <select value= {lpName} onChange = {(e)=>{setlpName(e.target.value)}}>
                  {filteredPool.map((entry,index)=><option key={index} value={Number(entry.poolId)}>{entry.name}</option>)}
                  </select>
                  <button onClick={()=>{setlpNameSelected(lpName)}}>Submit Pool</button>      
            
                </div>




                <div >

                    <label style={{fontSize:"20px",textAlign:"left"}}> Please select time inteval in minutes</label><br/>
                    <input style={{minWidth:"40px"}} type="value" value={timeInterval} onChange={(e)=>{settimeInterval(e.target.value)}}></input>
                    <button onClick={()=>{settimeIntervalSelected(timeInterval);setMinutes(timeInterval) ;settimeInterval("")}}>Submit Time</button>
                </div>
                </div>
                
                : <div></div>}
                
                <button onClick={sendData}>manual send</button>
                <button onClick={()=>{setApp5Seconds(5);  setApp5TimerOn(!App5isOn)}}>Harvest All</button>

                <button 
                onClick={()=>setTimerOn(!isOn)}
                style={{minWidth:"40px", height:"50px", color:"red", fontWeight:"bold", fontSize:"20px"}}>{!isOn? "Start Bot" : "Stop Bot and change configuration"}</button>


            
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
        >Pool Details
              <div
                style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                
                >Tokens Pending for Harvest : <span style={{fontWeight:"normal",color:"blue"}}> {pendingToken && (pendingToken/1000000000000000000).toFixed(4)}</span></div>
                <br/>
                <div
                style={{fontSize:"20px",textAlign:"left", marginLeft:"40px"}}
                
                >LP Token Staked : <span style={{fontWeight:"normal",color:"blue"}}> {stakedToken && (stakedToken.amount/1000000000000000000).toFixed(7)}</span></div>
        
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
        {Minutes} Minutes : {Seconds} Seconds: 
        </div>
        <App5 App5isOn={App5isOn} setApp5TimerOn={setApp5TimerOn} Seconds={App5Seconds} setSeconds={setApp5Seconds} ></App5>
    </div>
)
}



    // forms.Forms.map(async (item)=>{
    //     const itemContract = await new web3.eth.Contract(item.Abi,item.ContractAddress)
    // itemContract.methods.poolLength().call(
    //     async  (err,res)=>{
            
    //         for (var i = 0; i <= res-1; i++ ){
    //             itemContract.methods.poolInfo(i).call(async (err,res1)=>{
    //                 const LpTokenContract  = await new web3.eth.Contract(lpTokenAbi,res1.lpToken)
    //                 const reserve0 = await LpTokenContract.methods.token0().call();
    //                 const reserve1 = await LpTokenContract.methods.token1().call()
    //                 var tx1 = {form: item.ContractAddress,
    //                             formData: {lpToken: res1.lpToken,reserve0,reserve1}    }
                                
    //                 lpName.push(tx1)

    //             })
    //         }
    //     }
    // );
    // })
    
    // const poolArray = lpName.filter(transaction => transaction.form===forms.Forms[con_AddressSelected].ContractAddress)