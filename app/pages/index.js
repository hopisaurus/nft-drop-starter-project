import React from "react";
import dynamic from 'next/dynamic';
import { useWallet } from "@solana/wallet-adapter-react";

// Constants
const TWITTER_HANDLE= "hopisaurus";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const TWITTER_LOGO = "twitter-logo.svg";



const WalletMultiButton = dynamic(
    async () => 
        (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
        { ssr: false }
    );

const Home = () => {
    // actions for phantom
    const wallet = useWallet();
    const renderNotConnectedContainer = () => (
        <div>
            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🎵 I'll take you to the candy shop</p>
                    <p className="sub-text">go 'head, drop an NFT like it's hot!</p>
                    <img src="https://media.giphy.com/media/sQuHLqjWwRXGvrjkg0/giphy.gif" alt="emoji" />
                    {/* Render your connect to wallet button right here */}
                    <div>
                        {wallet.publicKey ? <div><p className="sub-text-1">🌞 Bonjour! ✌ Mi Amigo 🌊</p></div> : renderNotConnectedContainer()}
                    </div>
                </div>
                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src={TWITTER_LOGO} />
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`@${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
