import React from 'react';
import Link from 'next/link';

const MobileApp = (props) => {
    return (
        <div className="keep-update">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="keep-updating-text">
                            <div className="section-title text-left">
                                <h2>    
                                    {
                                        props.selected === 'dispensaries' ? 'Loyalty Platform'
                                            : props.selected === 'deliveries' ? 'Loyalty Platform' 
                                            : props.selected === 'brands' ? 'Control your Profile & Products' 
                                            : ''
                                    }
                                </h2>
                            </div>
                            <p>
                                {
                                    props.selected === 'dispensaries' ? 'Did you know that 80% of your future profits will come from just 20 percent of your existing customers?  With Weedzly loyalty, customers earn points as they spend and will likely return to keep earning and  obtaining rewards. You’ll be rewarding your loyal customers and give them a reason to keep on coming back.  Offering a rewards plan is great as you’re more likely to acquire new repeat customers. Acquiring repeat  customers is key because a 5% increase in customer retention can increase profitability by 25% to 95%.'
                                        : props.selected === 'deliveries' ? `Did you know that 80% of your future profits will come from just 20 percent of your existing customers?  With Weedzly loyalty, customers earn points as they spend and will likely return to keep earning and  obtaining rewards. You’ll be rewarding your loyal customers and give them a reason to keep on coming back.  Offering a rewards plan is great as you’re more likely to acquire new repeat customers. Acquiring repeat  customers is key because a 5% increase in customer retention can increase profitability by 25% to 95%.` 
                                        : props.selected === 'brands' ? "You're in full control of your brand - Keep your community involved by updating your product catalog with new arrivals. Verify products so that shoppers could be assured that they're buying legitimate products made by your brand. Simply add new products with one simple click from our dashboard. With Weedzly, more shoppers can discover your products, and in turn increase your revenue."
                                        : ''
                                }
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="keep-img">
                            <img src={`${props.selected === 'dispensaries' ? '/images/saas-landing/saas-iphone-two.png' : props.selected === 'deliveries' ? '/images/saas-landing/saas-iphone-two-delivery.png' : props.selected === 'brands' && '/images/saas-landing/saas-iphone-two-brand.png'}`} alt="iphone" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="keep-shape">
                <img src="/images/saas-landing/saas-shape5.png" alt="shape" />
            </div>
        </div>
    )
}

export default MobileApp;