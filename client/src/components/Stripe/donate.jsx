import React, { Component, Fragment } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './checkoutForm';

class Donate extends Component {

    render() {
        return (
            <div className="flex-container p-3 w-50 bg-light mx-auto border border-dark rounded">
                <h1 className="mb-3"><kbd>Baby, we need YOU!</kbd></h1>
                <p className="lead">When you donate, you're giving BloggerBaby the renewed strength to fighting off haters, bringing people closer together and making everyone feel good, baby! You can change lives!</p>
                <div>
                    <StripeProvider apiKey="pk_test_jzIsiCBOhC8oYrI2pgWxcFzd">
                        <Elements>
                            <InjectedCheckoutForm/>
                        </Elements>
                    </StripeProvider>
                </div>
                <p className="lead">Thank you for your contribution!</p>
            </div>
        );
    }

}

export default Donate;