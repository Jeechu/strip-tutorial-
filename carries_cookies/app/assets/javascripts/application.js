// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require jquery_ujs
//= require turbolinks
//= require_tree .

var j = jQuery.noConflict();


j(document).ready(function(){

  j('.bxslider').bxSlider({
  	auto: true
  });



j('#terms').click(function(){
console.log('got clicked')
    j.fancybox.open({
        content: '<iframe id="myFrame" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" src="about:blank"></iframe>',
        autoSize: false,
        width: '80%',
        height: '80%',
        scrolling: 'no',
        afterShow: function () {
            var oIframe = document.getElementById('myFrame');
            var iframeDoc = (oIframe.contentWindow.document || oIframe.contentDocument);
            iframeDoc.open();
            iframeDoc.write(myContent);
            iframeDoc.close();
            
        }
    });
});

var myContent = '<div class="container">\
				      <p class="terms">Terms of Service("Terms")</p>\
				      <p>Last updated: November 11, 2015</p>\
				      <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the www.crowdsurfer.co website (the "Service") operated by Crowdsurfer LLC ("us", "we", or "our").\
				      Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.\
				      By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.</p>\
				      <p>Intellectual Property</p>\
				      <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Crowdsurfer LLC and its licensors. The Service is protected\
				       by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Crowdsurfer LLC</p>\
				 	  <p>Links To Other Web Sites</p>\
				 	  <p>Our Service may contain links to third party web sites or services that are not owned or controlled by Crowdsurfer LLC\
					  Crowdsurfer LLC. has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.\
					  You acknowledge and agree that Crowdsurfer LLC. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.\
					  We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.</p>\
					  <p>Termination</p>\
					  <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.\
					  If you wish to terminate your account, you may simply discontinue using the Service.\
					  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability</p>\
					  <p>Limitation Of Liability</p>\
					  <p>In no event shall Crowdsurfer LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your\
					   access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, \
					   tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>\
				 	  <p>Disclaimer</p>\
					  <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement\
					   or course of performance. Crowdsurfer LLC	 its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>\
 					  <p>Exclusions</p>\
					  <p>Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.</p> \
					  <p>Governing Law</p>\
					  <p>These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p> \
					  <p>Changes</p>\
					  <p>SWe reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p> \
					  <p>Contact Us</p>\
					  <p>If you have any questions about these Terms, please contact us.</p> \
				 </div>';




j('#privacy').click(function(){
  	console.log("i've been clicked booooy")
  });


j('#privacy').click(function(){
	
    j.fancybox.open({
        content: '<iframe id="myFrame" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" src="about:blank"></iframe>',
        autoSize: false,
        width: '80%',
        height: '80%',
        scrolling: 'no',
        afterShow: function () {
            var oIframe = document.getElementById('myFrame');
            var iframeDoc = (oIframe.contentWindow.document || oIframe.contentDocument);
            iframeDoc.open();
            iframeDoc.write(myOtherContent);
            iframeDoc.close();
            
        }
    });
});

var myOtherContent = '<div class="container">\
				      <p class="terms">Privacy Policy</p>\
				      <p>Last updated: November 11, 2015</p>\
				      <p>Crowdsurfer LLC ("us", "we", or "our") operates the www.crowdsurfer.co website (the "Service").\
					  This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.\
					  We will not use or share your information with anyone except as described in this Privacy Policy.\
					  We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at www.countup.io</p>\
				      <p>Information Collection And Use</p>\
				      <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, postal address ("Personal Information").\
					  We collect this information for the purpose of providing the Service, identifying and communicating with you, responding to your requests/inquiries, servicing your purchase orders, and improving our services.</p>\
				 	  <p>Log Data</p>\
				 	  <p>We collect information that your browser sends whenever you visit our Service. This Log Data may include information such as your computer Internet Protocol address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.\
					  In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Service functionality. These third party service providers have their own privacy policies addressing how they use such information.</p>\
					  <p>Cookies</p>\
					  <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and transferred to your device. We use cookies to collect information in order to improve our services for you.\
					  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. The Help feature on most browsers provide information on how to accept cookies, disable cookies or to notify you when receiving a new cookie.\
					  If you do not accept cookies, you may not be able to use some features of our Service and we recommend that you leave them turned on.</p>\
					  <p>Do Not Track Disclosure</p>\
					  <p>In no event shall CountUp Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your\
					   access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, \
					   tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>\
				 	  <p>Disclaimer</p>\
					  <p>We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.\
					  You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>\
 					  <p>Service Providers</p>\
					  <p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services and/or to assist us in analyzing how our Service is used.\
					  These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose.</p> \
					  <p>Security</p>\
					  <p>The security of your Personal Information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store, in order to protect it from unauthorized access, destruction, use, modification, or disclosure. \
					  However, please be aware that no method of transmission over the internet, or method of electronic storage is 100% secure and we are unable to guarantee the absolute security of the Personal Information we have collected from you.</p> \
					  <p>Links To Other Sites</p>\
					  <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party site. We strongly advise you to review the Privacy Policy of every site you visit. \
					  We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p> \
					  <p>Children Privacy</p>\
					  <p>Only persons age 18 or older have permission to access our Service. Our Service does not address anyone under the age of 13 ("Children"). \
					  We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you learn that your Children have provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a children under age 13 without verification of parental consent, we take steps to remove that information from our servers.</p> \
					  <p>Changes To This Privacy Policy/p>\
					  <p>This Privacy Policy is effective as of June 05, 2015 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. \
					  We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. \
					  If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website. \
					  </p> \
					  <p>Contact Us</p>\
					  <p>If you have any questions about this Privacy Policy, please contact us. \
				 </div>';



});