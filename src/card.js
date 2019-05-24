import React from 'react';

const Card = () => {
    return (
        <div className='main'>
            <div className="head">

                <h1 className='credit'>CREDIT CARD</h1>
            </div>
            <img className='puce' src={require('./puce.png')} />
            <p className='card-number'>1234 5678 9123 4567</p>
            <p className="cid">1234</p>
            <div className='bottom'>
                <div className='left'>
                    <p className="holder">SLIM MARZOUK</p>
                </div>
                <div className="middle">
                    <div className='text'>
                        <p className="valid">VALID<br />THRU</p>
                        <i class="fas fa-caret-right"></i>
                        <p className="date">MONTH/YEAR<br /><span>07 25</span></p>
                    </div>
                    <img className='master' src={require('./master.png')} />
                </div>
            </div>
        </div>
    )
}
export default Card