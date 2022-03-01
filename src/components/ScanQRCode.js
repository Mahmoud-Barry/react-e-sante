import React from 'react';
import QRCode from 'react-qr-code';

const ScanQrCode = () => {
    let randomNumber = Math.round(Math.random()*10000)
    return (
        <div>
            <header className='text-start p-5 mb-5 bg-primary text-light'>
                <h1>Connexion</h1>
                <h3>Accueil / Connexion</h3>
            </header>
            <h3 className='text-primary my-5'>Scannez votre code QR</h3>
            <div className='bg-primary p-5 m-5' style={{borderRadius:'30px'}}>
                <div className='bg-light p-5' style={{borderRadius:'30px'}}>
                    <QRCode value={randomNumber.toString()}></QRCode>
                </div>
            </div>
        </div>
    );
};

export default ScanQrCode;