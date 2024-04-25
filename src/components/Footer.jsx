

const Footer = () => {
  return (
    <div className="bg-black text-white p-5">
        <div className="flex justify-between">
        <div>
            <h3>Logo</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div>
                <input type="text" placeholder="Enter your email" />
                <div>react icon</div>
            </div>
        </div>
        <div>
            <h3>Support</h3>
            <p>1001, Arepo, Ogun State</p>
            <p>gladysalu1@gmail.com</p>
            <p>+2347033726760</p>
        </div>
        <div>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Shop</p>
        </div>
        <div>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div>
            <h3>Download App</h3>
            <p>Save 3 with App New User Only</p>
            <div className="flex gap-2">
                <img src="" alt="" />
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Google Play</p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Download on the</p>
                    <p>App Store</p>
                </div>
            </div>
            <div>
                <p>facebook, twitter, insta, linkdin icon</p>
            </div>
        </div>
        </div>
        <hr />
        <p className="text-center pt-3">Copyright G-Store 2024. All right researved</p>
        
    </div>
  )
}

export default Footer