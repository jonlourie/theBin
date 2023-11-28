export const abi = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_storeKeyAddr",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_blocLicenseAddr",
					"type": "address"
				}
			],
			"stateMutability": "payable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "store",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "itemId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "streetAddress",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "city",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "postalCode",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "country",
					"type": "string"
				}
			],
			"name": "OrderCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "merchantWallet",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "store",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "itemId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "completed",
					"type": "bool"
				}
			],
			"name": "OrderFinalized",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "blocLicense",
			"outputs": [
				{
					"internalType": "contract IBlocLicense",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_store",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_storeKey",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_orderId",
					"type": "uint256"
				}
			],
			"name": "completeOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_storeKey",
					"type": "uint256"
				}
			],
			"name": "getItemRedemption",
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
					"name": "_storeKey",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_orderNumber",
					"type": "uint256"
				}
			],
			"name": "getOrderItem",
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
					"name": "_storeKey",
					"type": "uint256"
				}
			],
			"name": "getOrderNumber",
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
					"name": "_storeKey",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_orderNumber",
					"type": "uint256"
				}
			],
			"name": "getOrderSender",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_storeKey",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_orderNumber",
					"type": "uint256"
				}
			],
			"name": "getOrderShippingInfo",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
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
					"name": "_storeKey",
					"type": "uint256"
				}
			],
			"name": "getPendingOrders",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_demark",
					"type": "uint256"
				}
			],
			"name": "negativeRating",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "orderData",
			"outputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "itemId",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "streetAddress",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "city",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "postalCode",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "country",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "completed",
					"type": "bool"
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
			"name": "orderTracker",
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
			"name": "pendingOrders",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_promark",
					"type": "uint256"
				}
			],
			"name": "positiveRating",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_itemId",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "_store",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_streetAddress",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_city",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_postalCode",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_country",
					"type": "string"
				}
			],
			"name": "redeem",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "storeKey",
			"outputs": [
				{
					"internalType": "contract IStoreKey",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "storeKeyAddr",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
];
export const BLOCMART_CONTRACT = "0x6F8A9C8e6bD90ba1581D303448bD714268521f77";