import '@/styles/globals.css'

import { configureChains, mainnet, WagmiConfig, createClient, sepolia} from 'wagmi'
import { publicProvider } from "wagmi/providers/public";
import { avalanche, polygonMumbai } from 'wagmi/chains'

export default function App({ Component, pageProps }) {

  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, avalanche, polygonMumbai, sepolia],
    [publicProvider()]
  );
  
  const client = createClient({
    autoConnect:true,
    chains,
    provider,
    webSocketProvider,
  });


  return (

    <>
    <WagmiConfig client={client}>
  
    <Component {...pageProps} />

    </WagmiConfig>
    </>
  )
}
