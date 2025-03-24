import React, { FC } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import { RequestAirdrop } from './RequestAirdrop';
import { SendTokens } from './assets/SendTokens';
import { SignMessage } from './SignMessage';

function App() {
  return (
    <>
      <ConnectionProvider
        endpoint={
          // 'https://api.devnet.solana.com'
          'https://solana-devnet.g.alchemy.com/v2/zhC5LCHoF-DwUmkJgJVlnt1Q1a8cuOcW'
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            {/* <Airdrop />
            <RequestAirdrop /> */}
            {/* <SendTokens /> */}
            <SignMessage />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
