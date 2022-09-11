import React from "react";
import Axios from 'axios';
import Button from "../Button.jsx";

const Payment = ({ payload }) => {

    const paymentHandler = async (e) => {
        const API_URL = 'https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/payment/';
        e.preventDefault();
        const orderUrl = `${API_URL}order`;
        const response = await Axios.post(orderUrl, payload);
        console.log('resp', response);
        const { data } = response;

        console.log('data', data);
        const options = {
            key: 'rzp_test_sNOBxNUNmRGlmI',
            name: 'Vanity',
            description: 'Total Amount',
            order_id: data.id,
            handler: async (response) => {
                try {
                    console.log(
                        'response.razorpay_payment_id',
                        response.razorpay_payment_id
                    );
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await Axios.post(url, {});
                    console.log('CR', captureResponse);
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: '#686CFD',
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };


    return (
        <Button str="Pay Now" clr="black" click={paymentHandler}></Button>
    )
}

export default Payment