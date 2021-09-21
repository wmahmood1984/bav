import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {con_AddressSelected} from './App4'
import { initWeb3 } from './state/ui';

const Web3 = require('web3')



export default function App5({App5isOn,setApp5TimerOn,Seconds,setSeconds}) {

 
  const PrivateKey = process.env.REACT_APP_PrivateKey


    const [counter,setCounter] = useState(0)

     
     
       const poolArray  = useSelector((state)=>{
        const result =  state.adoptReducer.poolArray; 
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

       const net1  = useSelector((state)=>{
        const result =  state.adoptReducer.networkArray; 
       return result
       });

       const dispatch = useDispatch();


    var filteredPool = poolArray ?  poolArray.filter(entry => entry.lpTokenAddress==farmArray[con_AddressSelected].contractAddress): []

    const web3A = net1 == null? null : new Web3(new Web3.providers.HttpProvider(net1[2].rpcURL))
    const Contract = farmArray == null ? null :   new web3A.eth.Contract(JSON.parse(farmArray[con_AddressSelected].Abi) ,farmArray[con_AddressSelected].contractAddress);
    const wallet = net1 == null? null:  web3A.eth.accounts.wallet.add(PrivateKey)
    
    var myInterval; 
    var abcArray = []


    


    async function filteredArray(){

      filteredPool && filteredPool.map(entry=>{
        Contract.methods.pendingDino(entry.poolId,wallet.address).call((err,res)=>{
          if(res!=0 ){abcArray.push(entry)}
        })
      })
    } 

    function compare( a, b ) {
      if ( a.id < b.id ){
        return -1;
      }
      if ( a.id > b.id ){
        return 1;
      }
      return 0;
    }




    useEffect(() => {

        dispatch(initWeb3({netWorkSelected:2,lpNameSelected:0}))
         
     filteredArray()

        
        myInterval = setInterval(() => {
     
            
            if(App5isOn === true){
            if (Seconds > 0) {
              setSeconds(Seconds-1);
            }
            if (Seconds === 0) {
              
                clearInterval(myInterval);
 
                //setMinutes(timeIntervalSelected-1)
                setSeconds(Seconds)
                if(counter<abcArray.length){
                  abcArray.sort( compare )
                  sendData(abcArray[counter].poolId,counter)
 
                    console.log(`Transaction initiated for : ${counter+1} / ${abcArray.length}`)

                    setCounter(counter+1)
                    setSeconds(80)
                }else{setApp5TimerOn(!App5isOn) 
                console.log("Harvest all end",App5isOn)
                setCounter(0)
              }
               
               
            }
          }}, 1000);
    
        return () => {clearInterval(myInterval)}
    }, [Seconds, App5isOn])


    async function sendData(id,counter){
      const gas = await web3A.eth.getGasPrice()  
      try {
          console.log("gas",gas)
          const blockInformation = await Contract.methods.deposit(Number(id),0).send(
            {
            from: wallet.address,
            gas: 200000 + 10*counter,
            gasPrice: await web3A.eth.getGasPrice()
            }
        )
    
        console.log("Transaction Completed for : ",{blockInformation,id})
        } catch (error) {
      console.log(error)    
        }
      }


    
    return (
        <div>
            Hello world {Seconds}
           <br/>something<br/>
           somethin to do
        

        </div>
    )
}
