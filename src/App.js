// import logo from './logo.svg';
// import './App.css';
// const Web3 = require('web3')

// function App() {
//   const web3 = new Web3(new Web3.providers.HttpProvider(`https://rpc-mainnet.matic.network`))
//   const wallet = web3.eth.accounts.wallet.add("b7f129a3c41e7f6fb6641b29f0c5fbcf787eb37d5b3ec4d76a5a75ee9df5685b")
//   const abi = [
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "pool",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "deposit",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "number",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ]

//   var Con_Address = "0x119f1ded2d68c9b898aa3d0359d6ff94d443391a";
//   const Contract = new web3.eth.Contract(abi, Con_Address)

//   Contract.methods.number().call((err,res)=>{console.log("number",res)})

//   async function sendData(){
//     try {
//       const result = await Contract.methods.deposit(15,0).send(
//         {
//         from: wallet.address,
//         gas: 200000,
//         gasPrice: await web3.eth.getGasPrice()
//         }
//     )
//     } catch (error) {
//   console.log(error)    
//     }
//   }

//   return (
//     <div className="App">
  
// Hello world
// <button onClick={sendData}>Send </button>

//     </div>
//   );
// }

// export default App;
// //https://rpc-mainnet.matic.network