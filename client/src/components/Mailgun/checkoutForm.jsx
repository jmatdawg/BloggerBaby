import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../../services/stripeService';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.stripe.createToken({name: this.state.customerName })
        .then(({token}) => {
            postCharge({ id: token.id, amount: 10 });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {
        return (
                <form className=" w-50 border-dark mx-auto bg-dark" onSubmit={(e) => this.handleSubmit(e)}>
                    <input onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                    <CardSection />
                    <button className="btn btn-sm btn-primary">SUBMIT</button>
                </form>
        );
    }
}

export default injectStripe(CheckoutForm);
