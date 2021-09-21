
import Web3 from 'web3'





const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "farmCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "farmsArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Abi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PendingFunction",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "farmAddress",
				"type": "address"
			}
		],
		"name": "getFilteredPool",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "lpTokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "poolId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct Bav.pool[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNetArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ChainId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "rpcURL",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct Bav.networks[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "lpTokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "poolId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct Bav.pool[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getfarmArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "contractAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Abi",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PendingFunction",
						"type": "string"
					}
				],
				"internalType": "struct Bav.farms[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "networksArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ChainId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "rpcURL",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "poolArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "lpTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "poolId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ChainId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_rpcUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setNetwork",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lptoken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_poolId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_contractAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_abi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_PendingFunction",
				"type": "string"
			}
		],
		"name": "setfarms",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



var web3;
var TankContract
var address
var conAddressV2 =0 ;
var initialState = [     {
    id: 0,
    ContractAddress: '0x1948abC5400Aa1d72223882958Da3bec643fb4E5',
    Abi: [{"inputs":[{"internalType":"contract IERC20","name":"_DINO","type":"address"},{"internalType":"uint256","name":"_dinoPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DINO","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dinoPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDino","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accDinoPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dinoPerBlock","type":"uint256"}],"name":"setDinoPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"setEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    name: 'Dino Farm',
    PendingFunction: 'pendingDino',
    StakeFunction: 'userInfo',
    HarvestFunction: 'deposit',
    
}]


export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async({netWorkSelected,con_AddressSelected,lpNameSelected},thunkApi)=>{
    

        try {
            if(Web3.givenProvider){ 
                web3 = new Web3(Web3.givenProvider);
	
             //   await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
				const SeekGoldAddress = "0x0B9566eC337fc3B549F45d2801C4bc6A9d3ED3eA"
				var contract = new web3.eth.Contract(abi, SeekGoldAddress);
                
				TankContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
				var ethBalance = await web3.eth.getBalance(address)
                thunkApi.dispatch(balance({
                    contract: TankContract,
                    address: address,
                    netWorkSelected,con_AddressSelected,lpNameSelected


                }))
                
	

            

				return {
                    web3,
                    contract,
                    address,
					SeekGoldAddress,
					ethBalance,
                                                       }
            }else {console.log("error in loading web3")
					return {web3:null,contract:null,address:null,SeekGoldAddress:null}}
        } catch (error) {
            console.log("Error", error)
        }

    }
)



export const balance = createAsyncThunk("balance",
    async ({contract,address, netWorkSelected,con_AddressSelected,lpNameSelected},thunkApi)=>{

		
        try {
            const networkArray = await contract.methods.getNetArray().call()
            const farmArray = await contract.methods.getfarmArray().call()
            const poolArray = await contract.methods.getPoolArray().call()
             thunkApi.dispatch(fetchAndCreateData({
                networkArray: networkArray,
                farmArray: farmArray,
                netWorkSelected,con_AddressSelected,lpNameSelected, poolArray
                
               

            }))

             return {networkArray,farmArray,poolArray}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )



    export const fetchAndCreateData = createAsyncThunk("fetchAndCreateData",
    async ({networkArray,farmArray,
        farmAbi,netWorkSelected,con_AddressSelected,lpNameSelected,poolArray})=>{

		
        try {

            const web3A = await new Web3(new Web3.providers.HttpProvider(`${networkArray[netWorkSelected].rpcURL}`))  
            const FarmContract = new web3A.eth.Contract(JSON.parse(farmArray[0].Abi), farmArray[0].contractAddress)
            const pendingToken =  await FarmContract.methods[`${farmArray[0].PendingFunction}`](poolArray[lpNameSelected].poolId,address).call();
            const stakedToken =  await FarmContract.methods[`userInfo`](poolArray[lpNameSelected].poolId,address).call();
			var filteredPool = await poolArray.filter(entry => entry.lpTokenAddress==farmArray[conAddressV2].contractAddress)
	            


			return {web3A,FarmContract,pendingToken,stakedToken}

        } catch (error) {
            console.log("Error in fetchAndCreateData",error)
        }
    }
    )






	export const Mint = createAsyncThunk("Mint",
    async ({chainId, rpcURL, name})=>{

		
        try {
			const result = await TankContract.methods.setNetwork(chainId, rpcURL, name).send({from:address })
                return result;
        } catch (error) {
            console.log("Error in Mint",error)
        }
    }
    )

    export const setFarm = createAsyncThunk("setFarm",
    async ({farmAddress,farmAbi,farmName,farmFunction})=>{

		
        try {
			const result = await TankContract.methods.setfarms(farmAddress,farmAbi,farmName,farmFunction).send({from:address })
                return result;
        } catch (error) {
            console.log("Error in setFarm",error)
        }
    }
    )

    export const setPool = createAsyncThunk("setPool",
    async ({lptokenAddress,poolId,poolName})=>{

		
        try {
			const result = await TankContract.methods.setPool(lptokenAddress,poolId,poolName).send({from:address })
                return result;
        } catch (error) {
            console.log("Error in setFarm",error)
        }
    }
    )







const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
		web3A: null,
        address : null,
        networkArray: null,
		pendingToken: null,
		stakedToken: null,
        toggle: false,
		poolArray: null,
        farmArray: null,
        FarmContract : null,
		con_AddressSelected: 0,

		 



    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        },
		SetconaddressSelected: (state,actions)=>{
			state.con_AddressSelected = actions.payload
			conAddressV2 = actions.payload
		},
	
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.address = action.payload.address;
			state.ethBalance = action.payload.ethBalance;



         },

         [balance.fulfilled] : (state,action)=>{
            state.networkArray = action.payload.networkArray
            state.farmArray = action.payload.farmArray
            state.poolArray = action.payload.poolArray;


            
			        },

        [fetchAndCreateData.fulfilled] : (state,action)=>{
            state.pendingToken = action.payload.pendingToken
            state.stakedToken = action.payload.stakedToken;
            state.FarmContract = action.payload.FarmContract;
            state.web3A = action.payload.web3A;

                                },


		

       
        [Mint.pending] : (state,action)=>{
			

            state.toggle = !state.toggle;
			state.error = null;
        },
        [Mint.fulfilled] : (state,action)=>{
			
            state.toggle = !state.toggle;
			state.error = action.payload;

        },


               
        [setFarm.pending] : (state,action)=>{
			

            state.toggle = !state.toggle;
			state.error = null;
        },
        [setFarm.fulfilled] : (state,action)=>{
			
            state.toggle = !state.toggle;
			state.error = action.payload;

        },

        [setPool.pending] : (state,action)=>{
			

            state.toggle = !state.toggle;
			state.error = null;
        },
        [setPool.fulfilled] : (state,action)=>{
			
            state.toggle = !state.toggle;
			state.error = action.payload;

        },



       
//
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle,SetconaddressSelected } = adoptSlice.actions
