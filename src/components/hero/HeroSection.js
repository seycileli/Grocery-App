import React from 'react';

//Components
import Button from "../button/Button";

//CSS
import './HeroSection.css';

function HeroSection() {
    return (
        <div className={'hero__section-container'}>

            <div className={'hero__section-text'}>

                <h1 className={'hero__section-main-header'}>Lorem Ipsum Dolor</h1>
                <p className={'hero__section-main-p'}>Lorem ipsum dolor sit amet consectetuer</p>


                <div className={'hero__section-button-signup'}>
                    <Button buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
                        Sign Up
                    </Button>
                </div>

                <div className={'hero__section-button-discover'}>
                <Button buttonStyle={'btn--primary'} buttonSize={'btn--large'}>
                    Discover
                </Button>
                </div>

            </div>
        </div>
    );
}

export default HeroSection;
