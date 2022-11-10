import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react";

import "../styles/App.css";
import "../styles/globals.css";
import "../styles/CandyMachine.css";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = ({ Component, pageProps }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);
    const wallet = useWallet(() => [wallets], [network]);
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}  autoConnect>
                <WalletModalProvider>
                    <Component {...pageProps} />
                    {console.log("is wallet connected? "+ wallet.connected)}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );

};

export default App;
