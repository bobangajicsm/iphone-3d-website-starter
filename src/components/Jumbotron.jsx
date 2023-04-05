import IPhone from '../assets/images/iphone-14.jpg';
import HoldingIPhone from '../assets/images/iphone-hand.png';

const Jumbotron = () => {
    const handleLearnMore = () => {
        const element = document.querySelector('.sound-section');
        window.scrollTo({
            top: element?.getBoundingClientRect().top + window.scrollY,
            left: 0,
            behavior: 'smooth'
        })
    };

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={IPhone} alt="iPhone 14 Pro" />
            <p className='text'>Big and bigger.</p>
            <span className='description'>
                From $41.62/mo. for 24 mo. or $999 before trade in
            </span>
            <ul className='links'>
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <a className='link' onClick={handleLearnMore}>Learn more</a>
                </li>
            </ul>
            <img className='iphone-img' src={HoldingIPhone} alt='iPhone' />
        </div>
    )
}

export default Jumbotron;