import { useWallet } from '@solana/wallet-adapter-react';
import { ed25519 } from '@noble/curves/ed25519';
import bs58 from 'bs58';

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  async function sign() {
    if (!publicKey) throw new Error('Wallet is not connected');
    if (!signMessage)
      throw new Error('Wallet does not support message signing');

    const message = document.getElementById('message').value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
      throw new Error('Message Signature not valid');
    alert('success');
    console.log(`message signature: ${bs58.encode(signature)}`);
  }

  return (
    <div>
      <input id="message" type="text" placeholder="Enter your message" />
      <button onClick={sign}>Sign Message</button>
    </div>
  );
}
