function FooterDiv(){
    let footerBox = document.createElement('div')
    footerBox.classList.add('footer-box')

    footerBox.innerHTML = `
        <section class="footer-top-section">
        <div class="footer-cover-div">
          <p>We'd Love to hear what you think!</p>
          <button id="feedBtn">Give feedback</button>
        </div>
      </section>
      <section class="footer-mid-section">
        <a href="#home" class="footer-a">All Departments</a>
        <a href="#home" class="footer-a">Store Directory</a>
        <a href="#home" class="footer-a">Careers</a>
        <a href="#home" class="footer-a">Our Company</a>
        <a href="#home" class="footer-a">Sell on Walmart.com</a>
        <a href="#home" class="footer-a">Help</a>
        <a href="#home" class="footer-a">Product Recalls</a>
        <a href="#home" class="footer-a">Accessibility</a>
        <a href="#home" class="footer-a">Tax Exempt Program</a>
        <a href="#home" class="footer-a">Get the Walmart App</a>
        <a href="#home" class="footer-a">Safety Data Sheet</a>
        <a href="#home" class="footer-a">Terms of Use</a>
        <a href="#home" class="footer-a">Privacy Notice</a>
        <a href="#home" class="footer-a">California Supply Chain Act</a>
        <a href="#home" class="footer-a">Your Privacy Choices</a>
        <a href="#home" class="footer-a">Notice at Collection</a>
        <a href="#home" class="footer-a">AdChoices</a>
        <a href="#home" class="footer-a"
          >Consumer Health Data Privacy Notices</a
        >
        <a href="#home" class="footer-a">Brand Shop Directory</a>
        <a href="#home" class="footer-a">Pharmacy</a>
        <a href="#home" class="footer-a">Walmart Business</a>
        <a href="#home" class="footer-a">#IYWYK</a>
        <a href="#home" class="footer-a">Delete Account</a>
      </section>
      <section class="footer-bottom-section">
        @ 2025 Walmart. The trademarks Walmart and the Walmart Spark design are
        registered with the US Patent and Trademark Office. All Rights Reserved.
      </section>
    `
    return footerBox
}

export default FooterDiv;