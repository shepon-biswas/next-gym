import PageBanner from '@/components/PageBanner/PageBanner';
import React from 'react';

const ContactPage = () => {
    return (
        <>
            <div>
                <PageBanner title={"Contact"} ></PageBanner>
            </div>
            <div className='w-10/12 mx-auto my-14'>
                <div>
                {/* <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.262105919523!2d90.40614004662814!3d23.780680844350506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ebfc24eab%3A0xea7dab563f12457a!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1694034210152!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>
        </>
    );
};

export default ContactPage;