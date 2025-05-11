
import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
        .then(response => {
            console.log('Email sent successfully', response);
        }).catch(error => {
            console.error('Email sending failed', error);
        });
};
