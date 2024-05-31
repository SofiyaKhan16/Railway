import React, { useState, useEffect } from 'react';

const Captcha = () => {
    const [captcha, setCaptcha] = useState('');
    const [input, setInput] = useState('');
    
    useEffect(() => {
        genNewCaptcha();
    }, []);

    const chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    const genNewCaptcha = () => {
        let newCaptcha = chars[Math.floor(Math.random() * chars.length)];
        for (let i = 0; i < 6; i++) {
            newCaptcha += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptcha(newCaptcha);
    };

    const checkCaptcha = () => {
        if (captcha === input) {
            alert("Valid captcha!!! Success");
        } else {
            alert("Invalid captcha!!! Please try again");
        }
        setInput('');
        genNewCaptcha();
    };

    return (
        <center>
            <div className="container">
                {/* <h1>Captcha</h1> */}
                <div name="form1" style={{marginLeft:'-200px',display:'flex',marginTop:'20px'}}>
                    <label type="text" id="captchaTxtArea" name="text"  readOnly style={{fontSize:'20px',color:'#311B92'}}>{captcha}</label> 
                   <div>
                    <input 
                        type="text" 
                        id="captchaEnter" 
                        placeholder="Enter The Captcha code" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        style={{fontSize:'20px',marginLeft:'20px',border:'1px solid black'}}
                    />
                    </div>

                    <input 
                        type="button" 
                        value="Refresh" 
                        id="refreshbtn" 
                        onClick={genNewCaptcha} 
                        style={{fontSize:'20px',marginLeft:'20px'}}
                    />
                   
                </div>
            </div>
        </center>
    );
};

export default Captcha;