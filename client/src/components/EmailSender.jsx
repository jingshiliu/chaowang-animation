import React, {useState} from 'react';
import '../styles/EmailSender.css'

function EmailSender() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [emailIsSent, setEmailIsSent] = useState(false)

    function updateInputValue(value, update) {
        try{
            update(value)
        }catch (e){
            console.error('Incorrect method: update')
        }
    }

    function sendEmail(e) {
        e.preventDefault()

        fetch('/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                address,
                email,
                phone,
                subject,
                message,
            })
        }).then(() => {
            setEmailIsSent(true)
        }).catch(err => console.error(err))
    }

    return (
        <form className={'EmailSender'} action="/email" method={'post'}>
            <label>
                Name: <br/>
                <input onChange={e => updateInputValue(e.target.value, setName)} type="text" name={'name'}
                       value={name}
                       placeholder={'Enter your name'} required={false}/>
            </label>

            <label>
                Address:<br/>
                <input onChange={e => updateInputValue(e.target.value, setAddress)}
                       value={address}
                       type="text"
                       name={'address'} placeholder={'Enter your address'} required={false}/>
            </label>

            <div>
                <label htmlFor="">
                    Email: <br/>
                    <input onChange={e => updateInputValue(e.target.value, setEmail)}
                           value={email}
                           type="email" name={'email'} placeholder={'Enter your email'} required={true}/>
                </label>

                <label htmlFor="">
                    Phone Number:<br/>
                    <input onChange={e => updateInputValue(e.target.value, setPhone)}
                           value={phone}
                           type="text" name={'phone'} placeholder={'Enter your phone number'} required={false}/>
                </label>
            </div>

            <label htmlFor="">
                Subject:<br/>
                <input onChange={e => updateInputValue(e.target.value, setSubject)}
                       value={subject}
                       type="text" name={'subject'} placeholder={'Type the subject'} required={true}/>
            </label>

            <label htmlFor="">
                Message:<br/>
                <textarea onChange={e => updateInputValue(e.target.value, setMessage)}
                          value={message}
                          name={'message'} placeholder={'Type your message here...'}/>
            </label>

            <div>
                {emailIsSent?
                    <span>
                    Email sent!
                </span> : <span></span>}
                <button onClick={sendEmail}>Send</button>
            </div>
        </form>
    );
}

export default EmailSender;