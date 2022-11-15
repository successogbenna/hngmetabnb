import React from 'react';
import '../App.css'
import { useAppContext } from './Context'
function Modal(props) {
    const { wallet, handleClose } = useAppContext()
    return (
        <div className={wallet ? "connect-wallet active" : "connect-wallet"}
        onClick={handleClose}
        >
        <div className="connect"
        onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h3>Connect Wallet</h3>
            <img src="/assets/close.svg" alt="close"
             className='close' 
             onClick={handleClose}
             />
          </div>
            <div className="line"></div>
          <div>
            <p>Choose your preferred wallet:</p>
            <div className="wallet">
              <div>
                <img src="/assets/meta-wallet.svg" alt="metamask" />
                <h3>Metamask</h3>
              </div>
              <img src="/assets/arrow.svg" alt="arrow" />
            </div>
            <div className="wallet">
              <div>
                <img src="/assets/connect-wallet.svg" alt="walletConnect" />
                <h3>WalletConnect</h3>
              </div>
              <img src="/assets/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Modal;