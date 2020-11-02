import React from 'react';

//Components
import Button from "../button/Button";

//CSS
// import './HeroSection.css';
import './Hero.css';

function HeroSection() {
    return (
        <div className={'hero__section-container'}>

            <div className={'hero__section-text'}>

                <h1>Lorem Ipsum Dolor</h1>
                <p>Lorem ipsum dolor sit amet consectetuer</p>

                <div className={'hero__section-button'}>
                    <Button buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
                        Sign Up
                    </Button>

                    <Button buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
                        Discover
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;
