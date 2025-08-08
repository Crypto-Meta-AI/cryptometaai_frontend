// import React, { useState } from "react";
// import { ethers } from "ethers";
// import axios from "axios";
// function BuySellSwap() {
//  const [walletAddress, setWalletAddress] = useState('');
//   const [amount, setAmount] = useState('');
//   const [quote, setQuote] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fromToken = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'; // Native BNB
//   const toToken = '0x55d398326f99059fF775485246999027B3197955'; // USDT (BSC)

//   const connectWallet = async () => {
//     if (typeof window.ethereum === 'undefined') {
//       alert('MetaMask is not installed!');
//       return;
//     }

//     try {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       setWalletAddress(accounts[0]);
//     } catch (error) {
//       console.error('Wallet connection error:', error);
//       alert('Connection to MetaMask failed');
//     }
//   };

//   const getSwapQuote = async () => {
//     if (!amount || !walletAddress) return alert('Enter amount and connect wallet');
//     setLoading(true);
//     const sellAmount = ethers.utils.parseUnits(amount, '18').toString();

//     try {
//       const res = await axios.get('https://bsc.api.0x.org/swap/v1/quote', {
//         params: {
//           sellToken: fromToken,
//           buyToken: toToken,
//           sellAmount,
//           takerAddress: walletAddress,
//         },
//       });
//       setQuote(res.data);
//     } catch (error) {
//       console.error(error);
//       alert('Error fetching quote');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const executeSwap = async () => {
//     if (!quote) return;
//     try {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const tx = await signer.sendTransaction({
//         to: quote.to,
//         data: quote.data,
//         value: ethers.BigNumber.from(quote.value || '0'),
//         gasPrice: ethers.BigNumber.from(quote.gasPrice),
//         gasLimit: ethers.BigNumber.from(quote.gas),
//       });
//       await tx.wait();
//       alert('Swap Successful!');
//     } catch (error) {
//       console.error('Swap failed:', error);
//       alert('Swap transaction failed');
//     }
//   };

//   return (
//      <div style={{ padding: '20px', background: '#111', color: 'white', maxWidth: '500px', margin: 'auto' }}>
//       <h2>Swap BNB → USDT (via 0x)</h2>

//       {!walletAddress ? (
//         <button onClick={connectWallet}>🔌 Connect Wallet</button>
//       ) : (
//         <p>✅ Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
//       )}

//       <input
//         type="number"
//         placeholder="Amount in BNB"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         style={{ padding: '10px', width: '100%', marginTop: '10px' }}
//       />

//       <button onClick={getSwapQuote} style={{ marginTop: '10px' }} disabled={loading}>
//         {loading ? 'Fetching Quote...' : 'Get Quote'}
//       </button>

//       {quote && (
//         <>
//           <p style={{ marginTop: '10px' }}>
//             🪙 Estimated: {ethers.utils.formatUnits(quote.buyAmount, 18)} USDT
//           </p>
//           <button onClick={executeSwap}>🚀 Swap Now</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default BuySellSwap;
