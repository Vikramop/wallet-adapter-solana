import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react';

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = document.getElementById('key').value;
    await connection.requestAirdrop(
      wallet.publicKey,
      amount * LAMPORTS_PER_SOL
    );
    alert('airdrop received');
  }

  return (
    <div>
      {wallet?.publicKey
        ? `Hi Mrs. ${wallet.publicKey.toString()}`
        : 'Hi Mrs. Guest'}
      <input type="text" placeholder="Amount" id="key" />
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
};

export default Airdrop;
