import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import config from '../utils/siteConfig'
import '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <link rel="icon" href={config.siteLogo} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
        <link rel="stylesheet" type="text/css" href={config.fonts} />
        <link rel="apple-touch-icon" href={config.siteIcon} />
        <link rel="shortcut icon" href={config.siteIcon} type="image/x-icon"/>

        <script type="text/javascript">{`
       {
         (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);

         branch.init('${process.env.BRANCH}');
             function sendSMS(form) {
                 var phone = form.phone.value;
                 var linkData = {
                     tags: [],
                     channel: 'Website',
                     feature: 'TextMeTheApp',
                     data: {
                         'foo': 'bar',
                         '$desktop_url': 'https://surfair.com',
                         '$ios_url': 'https://itunes.apple.com/us/app/surf-air/id592008851',
                     }
                 };
                 var options = {};
                 var callback = function(err, result) {
                     if (err) {
                         alert("Sorry, something went wrong.");
                     }
                     else {
                         alert("Thank you. You should recieve a text message with a link to download the app soon.");
                     }
                 };
                 branch.sendSMS(phone, linkData, options, callback);
                 form.phone.value = "";
             }
       }
   `}</script>
      </Helmet>

      <ThemeProvider theme={theme}>
        <div className="siteContent">
          <Menu />
          {children()}
        </div>
      </ThemeProvider>
      {/* Footer placed in seperate ThemeProvider to avoid Rendering an extra DIV in HTML output  */}
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Template
