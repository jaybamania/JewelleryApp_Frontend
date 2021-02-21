import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import Footer from "../../components/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(2, 0),
    },
    title: {
      padding: theme.spacing(3, 0),
    },
    footer: {
      display: "block",
      padding: theme.spacing(2, 2),
      backgroundColor: theme.palette.info.light,
    },
  })
);

const TermsAndConditionsView = () => {
  const classes = useStyles();
  return (
    <>
      <Box px={3}>
        <Typography variant="h4" className={classes.title}>
          Terms &amp; Conditions
        </Typography>
        <Typography variant="h6">Overview</Typography>
        <Typography variant="body1" className={classes.content}>
          This website (www.jweler.com) is operated by VSSN Analytics Pvt. Ltd.
          Throughout the site, the terms "we", "us" and "our" refer to VSSN
          Analytics Pvt. Ltd. VSSN Analytics Pvt. Ltd. offers this website,
          including all information, tools and services available from this site
          to you, the user, conditioned upon your acceptance of all terms,
          conditions, policies and notices stated here.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          By visiting our site www.Jweler.com and/ or purchasing something from
          us, you engage in our "Service" and agree to be bound by the following
          terms and conditions ("Terms of Service", "Terms"), including those
          additional terms and conditions and policies referenced herein and/or
          available by hyperlink. These Terms of Service apply to all users of
          the site, including without limitation users who are browsers,
          vendors, customers, merchants, and/or contributors of content.{" "}
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Please read these Terms of Service carefully before accessing or using
          our website. By accessingor using any part of the site, you agree to
          be bound by these Terms of Service. If you do not agree to all the
          terms and conditions of this agreement, then you may not access the
          website or use any services. If these Terms of Service are considered
          an offer, acceptance is expressly limited to these Terms of Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any new features or tools which are added to the current store shall
          also be subject to the Terms of Service. You can review the most
          current version of the Terms of Service at any time on this page. We
          reserve the right to update, change or replace any part of these Terms
          of Service by posting updates and/or changes to our website. It is
          your responsibility to check this page periodically for changes. Your
          continued use of or access to the website following the posting of any
          changes constitutes acceptance of those changes.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 1 - ONLINE STORE TERMS <br /> By agreeing to these Terms of
          Service, you represent that you are at least the age of majority in
          your state or province of residence, or that you are the age of
          majority in your state or province of residence and you have given us
          your consent to allow any of your minor dependents to use this site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You may not use our products for any illegal or unauthorized purpose
          nor may you, in the use of the Service, violate any laws in your
          jurisdiction (including but not limited to copyright laws).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You must not transmit any worms or viruses or any code of a
          destructive nature.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          A breach or violation of any of the Terms will result in an immediate
          termination of your Services.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 2 - GENERAL CONDITIONS <br /> We reserve the right to refuse
          service to anyone for any reason at any time.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You understand that your content (not including credit card
          information), may be transferred unencrypted and involve (a)
          transmissions over various networks; and (b) changes to conform and
          adapt to technical requirements of connecting networks or devices.
          Credit card information is always encrypted during transfer over
          networks.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree not to reproduce, duplicate, copy, sell, resell or exploit
          any portion of the Service, use of the Service, or access to the
          Service or any contact on the website through which the service is
          provided, without express written permission by us.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree not to reproduce, duplicate, copy, sell, resell or exploit
          any portion of the Service, use of the Service, or access to the
          Service or any contact on the website through which the service is
          provided, without express written permission by us.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The headings used in this agreement are included for convenience only
          and will not limit or otherwise affect these Terms
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION{" "}
          <br />
          We are not responsible if information made available on this site is
          not accurate, complete or current. The material on this site is
          provided for general information only and should not be relied upon or
          used as the sole basis for making decisions without consulting
          primary, more accurate, more complete or more timely sources of
          information. Any reliance on the material on this site is at your own
          risk.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          This site may contain certain historical information. Historical
          information, necessarily, is not current and is provided for your
          reference only. We reserve the right to modify the contents of this
          site at any time, but we have no obligation to update any information
          on our site. You agree that it is your responsibility to monitor
          changes to our site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 4 - MODIFICATIONS TO THE SERVICE <br />
          AND PRICES Prices for our products are subject to change without
          notice.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We reserve the right at any time to modify or discontinue the Service
          (or any part or content thereof) without notice at any time.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We shall not be liable to you or to any third-party for any
          modification, price change, suspension or discontinuance of the
          Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 5 - PRODUCTS OR SERVICES <br />
          Certain products or services may be available exclusively online
          through the website. These products or services may have limited
          quantities and are subject to return or exchange only according to our
          Return Policy.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We have made every effort to display as accurately as possible the
          colors and images of our products that appear at the store. We cannot
          guarantee that your computer monitor's display of any color will be
          accurate,
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We do not warrant that the quality of any products, services,
          information, or other material purchased or obtained by you will meet
          your expectations, or that any errors in the Service will be
          corrected.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION <br />
          We reserve the right to refuse any order you place with us. We may, in
          our sole discretion, limit or cancel quantities purchased per person,
          per household or per order. These restrictions may include orders
          placed by or under the same customer account, the same credit card,
          and/or orders that use the same billing and/or shipping address. In
          the event that we make a change to or cancel an order, we may attempt
          to notify you by contacting the e-mail and/or billing address/phone
          number provided at the time the order was made. We reserve the right
          to limit or prohibit orders that, in our sole judgment, appear to be
          placed by dealers, resellers or distributors.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree to provide current, complete and accurate purchase and
          account information for all purchases made at our store. You agree to
          promptly update your account and other information, including your
          email address and credit card numbers and expiration dates, so that we
          can complete your transactions and contact you as needed.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          For more detail, please review our Returns Policy.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 7 - OPTIONAL TOOLS
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We may provide you with access to third-party tools over which we
          neither monitor nor have any control nor input.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You acknowledge and agree that we provide access to such tools "as is"
          and "as available" without any warranties, representations or
          conditions of any kind and without any endorsement.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We shall have no liability whatsoever arising from or relating to your
          use of optional third-party tools. Any use by you of optional tools
          offered through the site is entirely at your own risk and discretion
          and you should ensure that you are familiar with and approve of the
          terms on which tools are provided by the relevant third-party
          provider(s).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We may also, in the future, offer new services and/or features through
          the website (including, the release of new tools and resources). Such
          new features and/or services shall also be subject to these Terms of
          Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 8 - THIRD-PARTY LINKS <br /> Certain content, products and
          services available via our Service may include materials from
          third-parties.a
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Third-party links on this site may direct you to third-party websites
          that are not affiliated with us. We are not responsible for examining
          or evaluating the content or accuracy and we do not warrant and will
          not have any liability or responsibility for any third-party materials
          or websites, or for any other materials, products, or services of
          third-parties.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We are not liable for any harm or damages related to the purchase or
          use of goods, services, resources, content, or any other transactions
          made in connection with any third-party websites. Please review
          carefully the third-party's policies and practices and make sure you
          understand them before you engage in any transaction. Complaints,
          claims, concerns, or questions regarding third-party products should
          be directed to the third-party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS <br /> If,
          at our request, you send certain specific submissions (for example
          contest entries) or without a request from us you send creative ideas,
          suggestions, proposals, plans, or other materials, whether online, by
          email, by postal mail, or otherwise (collectively, 'comments'), you
          agree that we may, at any time, without restriction, edit, copy,
          publish, distribute, translate and otherwise use in any medium any
          comments that you forward to us. We are and shall be under no
          obligation (1) to maintain any comments in confidence; (2) to pay
          compensation for any comments; or (3) to respond to any comments
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We may, but have no obligation to, monitor, edit or remove content
          that we determine in our sole discretion are unlawful, offensive,
          threatening, libelous, defamatory, pornographic, obscene or otherwise
          objectionable or violates any party's intellectual property or these
          Terms of Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree that your comments will not violate any right of any
          third-party, including copyright, trademark, privacy, personality or
          other personal or proprietary right. You further agree that your
          comments will not contain libelous or otherwise unlawful, abusive or
          obscene material, or contain any computer virus or other malware that
          could in any way affect the operation of the Service or any related
          website. You may not use a false e-mail address, pretend to be someone
          other than yourself, or otherwise mislead us or third parties as to
          the origin of any comments. You are solely responsible for any
          comments you make and their accuracy. We take no responsibility and
          assume no liability for any comments posted by you or any third-party
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 10 - PERSONAL INFORMATION <br /> Your submission of personal
          information through the store is governed by our Privacy Policy.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS <br />
          Occasionally there may be information on our site or in the Service
          that contains typographical errors, inaccuracies or omissions that may
          relate to product descriptions, pricing, promotions, offers, product
          shipping charges, transit times and availability. We reserve the right
          to correct any errors, inaccuracies or omissions, and to change or
          update information or cancel orders if any information in the Service
          or on any related website is inaccurate at any time without prior
          notice (including after you have submitted your order).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We undertake no obligation to update, amend or clarify information in
          the Service or on any related website, including without limitation,
          pricing information, except as required by law. No specified update or
          refresh date applied in the Service or on any related website, should
          be taken to indicate that all information in the Service or on any
          related website has been modified or updated:
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 12 - PROHIBITED USES <br />
          In addition to other prohibitions as set forth in the Terms of
          Service, you are prohibited from using the site or its content: (a)
          for any unlawful purpose; (b) to solicit others to perform or
          participate in any unlawful acts; (c) to violate any international,
          federal, provincial or state regulations, rules, laws, or local
          ordinances; (d) to infringe upon or violate our intellectual property
          rights or the intellectual property rights of others; (e) to harass,
          abuse, insult, harm defame, slander, disparage, intimidate, or
          discriminate based on gender, sexual orientation, religion, ethnicity,
          race, age, national origin, or disability: (f) to submit false or
          misleading information: (g) to upload or transmit viruses or any other
          type of malicious code that will or may be used in any way that will
          affect the functionality or operation of the Service or of any related
          website, other websites, or the Internet: (h) to collect or track the
          personal information of others; (i) to spam, phish, pharm, pretext,
          spider, crawl, or scrape; C) for any obscene or immoral purpose; or
          (k) to interfere with or circumvent the security features of the
          Service or any related website, other websites, or the Internet. We
          reserve the right to terminate your use of the Service or any related
          website for violating any of the prohibited uses.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY <br />
          We do not guarantee, represent or warrant that your use of our service
          will be uninterrupted, timely, secure or error-free,
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We do not warrant that the results that may be obtained from the use
          of the service will be accurate or reliable.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree that from time to time we may remove the service for
          indefinite periods of time or cancel the service at any time, without
          notice to you.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You expressly agree that your use of, or inability to use, the service
          is at your sole risk. The service and all products and services
          delivered to you through the service are except as expressly stated by
          us) provided 'as is' and 'as available for your use, without any
          representation, warranties or conditions of any kind, either express
          or implied, including all implied warranties or conditions of
          merchantability, merchantable quality, fitness for a particular
          purpose, durability, title, and non-infringement.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          In no case shall VSSN Analytics Pvt. Ltd., our directors, officers,
          employees, affiliates, agents, contractors, interns, suppliers,
          service providers or licensors be liable for any injury, loss, claim,
          or any direct, indirect, incidental, punitive, special, or
          consequential damages of any kind, including without limitation lost
          profits, lost revenue, lost savings, loss of data, replacement costs,
          or any similar damages, whether based in contract, tort (including
          negligence), strict liability or otherwise, arising from your use of
          any of the service or any products procured using the service, or for
          any other claim related in any way to your use of the service or any
          product, including, but not limited to, any errors or omissions in any
          content, or any loss or damage of any kind incurred as a result of the
          use of the service or any content (or product) posted, transmitted, or
          otherwise made available via the service, even if advised of their
          possibility. Because some states or jurisdictions do not allow the
          exclusion or the limitation of liability for consequential or
          incidental damages, in such states or jurisdictions, our liability
          shall be limited to the maximum extent permitted by law,
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 14 - INDEMNIFICATION <br /> You agree to indemnify, defend and
          hold harmless VSSN Analytics Pvt. Ltd. and our parent, subsidiaries,
          affiliates, partners, officers, directors, agents, contractors,
          licensors, service providers, subcontractors, suppliers, interns and
          employees, harmless from any claim or demand, including reasonable
          attorneys’ fees, made by any third-party due to or arising out of your
          breach of these Terms of Service or the documents they incorporate by
          reference, or your violation of any law or the rights of a
          third-party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 15 - SEVERABILITY <br />
          In the event that any provision of these Terms of Service is
          determined to be unlawful, void or unenforceable, such provision shall
          nonetheless be enforceable to the fullest extent permitted by
          applicable law, and the unenforceable portion shall be deemed to be
          severed from these Terms of Service, such determination shall not
          affect the validity and enforceability of any other remaining
          provisions.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 16 - TERMINATION <br /> The obligations and liabilities of the
          parties incurred prior to the termination date shall survive the
          termination of this agreement for all purposes.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          These Terms of Service are effective unless and until terminated by
          either you or us. You may terminate these Terms of Service at any time
          by notifying us that you no longer wish to use our Services, or when
          you cease using our site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          If in our sole judgment, you fail, or we suspect that you have failed,
          to comply with any term or provision of these Terms of Service, we
          also may terminate this agreement at any time without notice and you
          will remain liable for all amounts due up to and including the date of
          termination; and/or accordingly may deny you access to our Services
          (or any part thereof).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 17 - ENTIRE AGREEMENT <br />
          The failure of us to exercise or enforce any right or provision of
          these Terms of Service shall not constitute a waiver of such right or
          provision.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          These Terms of Service and any policies or operating rules posted by
          us on this site or in respect to The Service constitutes the entire
          agreement and understanding between you and us and govern your use of
          the Service, superseding any prior or contemporaneous agreements,
          communications and proposals, whether oral or written, between you and
          us (including, but not limited to, any prior versions of the Terms of
          Service).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any ambiguities in the interpretation of these Terms of Service shall
          not be construed against the drafting party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 18 - GOVERNING LAW <br />
          These Terms of Service and any separate agreements whereby we provide
          you Services shall be governed by and construed in accordance with the
          laws of India and jurisdiction of Ahmedabad, Gujarat.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 19 - CHANGES TO TERMS OF SERVICE <br />
          You can review the most current version of the Terms of Service at any
          time at this page.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We reserve the right, at our sole discretion, to update, change or
          replace any part of these Terms of Service by posting updates and
          changes to our website. It is your responsibility to check our website
          periodically for changes. Your continued use of or access to our
          website or the Service following the posting of any changes to these
          Terms of Service constitutes acceptance of those changes.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          OVERVIEW
        </Typography>
        <Typography variant="body1" className={classes.content}>
          This website is operated by VSSN Analytics Pvt. Ltd.. Throughout the
          site, the terms “we”, “us” and “our” refer to VSSN Analytics Pvt.
          Ltd.. VSSN Analytics Pvt. Ltd. offers this website, including all
          information, tools and services available from this site to you, the
          user, conditioned upon your acceptance of all terms, conditions,
          policies and notices stated here.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          By visiting our site and/ or purchasing something from us, you engage
          in our “Service” and agree to be bound by the following terms and
          conditions (“Terms of Service”, “Terms”), including those additional
          terms and conditions and policies referenced herein and/or available
          by hyperlink. These Terms of Service apply to all users of the site,
          including without limitation users who are browsers, vendors,
          customers, merchants, and/ or contributors of content.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Please read these Terms of Service carefully before accessing or using
          our website. By accessing or using any part of the site, you agree to
          be bound by these Terms of Service. If you do not agree to all the
          terms and conditions of this agreement, then you may not access the
          website or use any services. If these Terms of Service are considered
          an offer, acceptance is expressly limited to these Terms of Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any new features or tools which are added to the current store shall
          also be subject to the Terms of Service. You can review the most
          current version of the Terms of Service at any time on this page. We
          reserve the right to update, change or replace any part of these Terms
          of Service by posting updates and/or changes to our website. It is
          your responsibility to check this page periodically for changes. Your
          continued use of or access to the website following the posting of any
          changes constitutes acceptance of those changes.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 1 - ONLINE STORE TERMS <br /> By agreeing to these Terms of
          Service, you represent that you are at least the age of majority in
          your state or province of residence, or that you are the age of
          majority in your state or province of residence and you have given us
          your consent to allow any of your minor dependents to use this site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You may not use our products for any illegal or unauthorized purpose
          nor may you, in the use of the Service, violate any laws in your
          jurisdiction (including but not limited to copyright laws).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You must not transmit any worms or viruses or any code of a
          destructive nature.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          A breach or violation of any of the Terms will result in an immediate
          termination of your Services.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 2 - GENERAL CONDITIONS <br />
          We reserve the right to refuse service to anyone for any reason at any
          time.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You understand that your content (not including credit card
          information), may be transferred unencrypted and involve (a)
          transmissions over various networks; and (b) changes to conform and
          adapt to technical requirements of connecting networks or devices.
          Credit card information is always encrypted during transfer over
          networks.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree not to reproduce, duplicate, copy, sell, resell or exploit
          any portion of the Service, use of the Service, or access to the
          Service or any contact on the website through which the service is
          provided, without express written permission by us.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The headings used in this agreement are included for convenience only
          and will not limit or otherwise affect these Terms.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION{" "}
          <br /> We are not responsible if information made available on this
          site is not accurate, complete or current. The material on this site
          is provided for general information only and should not be relied upon
          or used as the sole basis for making decisions without consulting
          primary, more accurate, more complete or more timely sources of
          information. Any reliance on the material on this site is at your own
          risk.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          This site may contain certain historical information. Historical
          information, necessarily, is not current and is provided for your
          reference only. We reserve the right to modify the contents of this
          site at any time, but we have no obligation to update any information
          on our site. You agree that it is your responsibility to monitor
          changes to our site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES <br />
          Prices for our products are subject to change without notice.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We reserve the right at any time to modify or discontinue the Service
          (or any part or content thereof) without notice at any time.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We shall not be liable to you or to any third-party for any
          modification, price change, suspension or discontinuance of the
          Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 5 - PRODUCTS OR SERVICES <br />
          Certain products or services may be available exclusively online
          through the website. These products or services may have limited
          quantities and are subject to return or exchange only according to our
          Return Policy.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We have made every effort to display as accurately as possible the
          colors and images of our products that appear at the store. We cannot
          guarantee that your computer monitor's display of any color will be
          accurate.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We reserve the right, but are not obligated, to limit the sales of our
          products or Services to any person, geographic region or jurisdiction.
          We may exercise this right on a case-by-case basis. We reserve the
          right to limit the quantities of any products or services that we
          offer. All descriptions of products or product pricing are subject to
          change at any time without notice, at the sole discretion of us. We
          reserve the right to discontinue any product at any time. Any offer
          for any product or service made on this site is void where prohibited.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We do not warrant that the quality of any products, services,
          information, or other material purchased or obtained by you will meet
          your expectations, or that any errors in the Service will be
          corrected.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION <br />
          We reserve the right to refuse any order you place with us. We may, in
          our sole discretion, limit or cancel quantities purchased per person,
          per household or per order. These restrictions may include orders
          placed by or under the same customer account, the same credit card,
          and/or orders that use the same billing and/or shipping address. In
          the event that we make a change to or cancel an order, we may attempt
          to notify you by contacting the e-mail and/or billing address/phone
          number provided at the time the order was made. We reserve the right
          to limit or prohibit orders that, in our sole judgment, appear to be
          placed by dealers, resellers or distributors.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree to provide current, complete and accurate purchase and
          account information for all purchases made at our store. You agree to
          promptly update your account and other information, including your
          email address and credit card numbers and expiration dates, so that we
          can complete your transactions and contact you as needed.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          For more detail, please review our Returns Policy.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 7 - OPTIONAL TOOLS <br />
          We may provide you with access to third-party tools over which we
          neither monitor nor have any control nor input.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You acknowledge and agree that we provide access to such tools ”as is”
          and “as available” without any warranties, representations or
          conditions of any kind and without any endorsement. We shall have no
          liability whatsoever arising from or relating to your use of optional
          third-party tools.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any use by you of optional tools offered through the site is entirely
          at your own risk and discretion and you should ensure that you are
          familiar with and approve of the terms on which tools are provided by
          the relevant third-party provider(s).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We may also, in the future, offer new services and/or features through
          the website (including, the release of new tools and resources). Such
          new features and/or services shall also be subject to these Terms of
          Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 8 - THIRD-PARTY LINKS <br />
          Certain content, products and services available via our Service may
          include materials from third-parties.a
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Third-party links on this site may direct you to third-party websites
          that are not affiliated with us. We are not responsible for examining
          or evaluating the content or accuracy and we do not warrant and will
          not have any liability or responsibility for any third-party materials
          or websites, or for any other materials, products, or services of
          third-parties.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We are not liable for any harm or damages related to the purchase or
          use of goods, services, resources, content, or any other transactions
          made in connection with any third-party websites. Please review
          carefully the third-party's policies and practices and make sure you
          understand them before you engage in any transaction. Complaints,
          claims, concerns, or questions regarding third-party products should
          be directed to the third-party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS <br />
          If, at our request, you send certain specific submissions (for example
          contest entries) or without a request from us you send creative ideas,
          suggestions, proposals, plans, or other materials, whether online, by
          email, by postal mail, or otherwise (collectively, 'comments'), you
          agree that we may, at any time, without restriction, edit, copy,
          publish, distribute, translate and otherwise use in any medium any
          comments that you forward to us. We are and shall be under no
          obligation (1) to maintain any comments in confidence; (2) to pay
          compensation for any comments; or (3) to respond to any comments
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We may, but have no obligation to, monitor, edit or remove content
          that we determine in our sole discretion are unlawful, offensive,
          threatening, libelous, defamatory, pornographic, obscene or otherwise
          objectionable or violates any party’s intellectual property or these
          Terms of Service.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree that your comments will not violate any right of any
          third-party, including copyright, trademark, privacy, personality or
          other personal or proprietary right. You further agree that your
          comments will not contain libelous or otherwise unlawful, abusive or
          obscene material, or contain any computer virus or other malware that
          could in any way affect the operation of the Service or any related
          website. You may not use a false e-mail address, pretend to be someone
          other than yourself, or otherwise mislead us or third-parties as to
          the origin of any comments. You are solely responsible for any
          comments you make and their accuracy. We take no responsibility and
          assume no liability for any comments posted by you or any third-party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 10 - PERSONAL INFORMATION <br />
          Your submission of personal information through the store is governed
          by our Privacy Policy.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS <br />
          Occasionally there may be information on our site or in the Service
          that contains typographical errors, inaccuracies or omissions that may
          relate to product descriptions, pricing, promotions, offers, product
          shipping charges, transit times and availability. We reserve the right
          to correct any errors, inaccuracies or omissions, and to change or
          update information or cancel orders if any information in the Service
          or on any related website is inaccurate at any time without prior
          notice (including after you have submitted your order).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We undertake no obligation to update, amend or clarify information in
          the Service or on any related website, including without limitation,
          pricing information, except as required by law. No specified update or
          refresh date applied in the Service or on any related website, should
          be taken to indicate that all information in the Service or on any
          related website has been modified or updated.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 12 - PROHIBITED USES <br />
          In addition to other prohibitions as set forth in the Terms of
          Service, you are prohibited from using the site or its content: (a)
          for any unlawful purpose; (b) to solicit others to perform or
          participate in any unlawful acts; (c) to violate any international,
          federal, provincial or state regulations, rules, laws, or local
          ordinances; (d) to infringe upon or violate our intellectual property
          rights or the intellectual property rights of others; (e) to harass,
          abuse, insult, harm, defame, slander, disparage, intimidate, or
          discriminate based on gender, sexual orientation, religion, ethnicity,
          race, age, national origin, or disability; (f) to submit false or
          misleading information; (g) to upload or transmit viruses or any other
          type of malicious code that will or may be used in any way that will
          affect the functionality or operation of the Service or of any related
          website, other websites, or the Internet; (h) to collect or track the
          personal information of others; (i) to spam, phish, pharm, pretext,
          spider, crawl, or scrape; (j) for any obscene or immoral purpose; or
          (k) to interfere with or circumvent the security features of the
          Service or any related website, other websites, or the Internet. We
          reserve the right to terminate your use of the Service or any related
          website for violating any of the prohibited uses.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY <br />
          We do not guarantee, represent or warrant that your use of our service
          will be uninterrupted, timely, secure or error-free.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We do not warrant that the results that may be obtained from the use
          of the service will be accurate or reliable.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You agree that from time to time we may remove the service for
          indefinite periods of time or cancel the service at any time, without
          notice to you.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          You expressly agree that your use of, or inability to use, the service
          is at your sole risk. The service and all products and services
          delivered to you through the service are (except as expressly stated
          by us) provided 'as is' and 'as available' for your use, without any
          representation, warranties or conditions of any kind, either express
          or implied, including all implied warranties or conditions of
          merchantability, merchantable quality, fitness for a particular
          purpose, durability, title, and non-infringement.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          In no case shall VSSN Analytics Pvt. Ltd., our directors, officers,
          employees, affiliates, agents, contractors, interns, suppliers,
          service providers or licensors be liable for any injury, loss, claim,
          or any direct, indirect, incidental, punitive, special, or
          consequential damages of any kind, including, without limitation lost
          profits, lost revenue, lost savings, loss of data, replacement costs,
          or any similar damages, whether based in contract, tort (including
          negligence), strict liability or otherwise, arising from your use of
          any of the service or any products procured using the service, or for
          any other claim related in any way to your use of the service or any
          product, including, but not limited to, any errors or omissions in any
          content, or any loss or damage of any kind incurred as a result of the
          use of the service or any content (or product) posted, transmitted, or
          otherwise made available via the service, even if advised of their
          possibility. Because some states or jurisdictions do not allow the
          exclusion or the limitation of liability for consequential or
          incidental damages, in such states or jurisdictions, our liability
          shall be limited to the maximum extent permitted by law.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" className={classes.content}>
          In no event shall the Company be liable for:
        </Typography>
        <Typography variant="body1" className={classes.content}>
          any indirect, incidental, special, consequential or exemplary damages,
          including but not limited to, damages for loss of profits, goodwill,
          use, data or other intangible losses (even if the Company has been
          advised of the possibility of such damages) arising out of or in
          connection with the Site, its Services or this Agreement (however
          arising, including negligence); and/or
        </Typography>
        <Typography variant="body1" className={classes.content}>
          any delay or failure or disruption of the content or services
          delivered through the Site resulting directly or indirectly from acts
          of nature, forces or causes beyond our reasonable control, including
          without limitation, internet failures, computer telecommunications or
          any other equipment failures, electrical power failures, strike,
          labour disputes, riots, insurrections, civil disturbances, shortage of
          labour or materials, fires, flood, storms, explosions, acts of God,
          war, governmental actions, order of domestic or foreign courts or
          tribunals or non-performance of third parties or other force majeure
          condition.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The Company, its associates and technology partners make no
          representations or warranties about the accuracy, reliability,
          completeness, and/or timeliness of any content, information, software,
          text, graphics, links or communications provided on or through the use
          of the Site or that the operation of the Site will be error free
          and/or uninterrupted. All such warranties, representations, conditions
          and undertakings are hereby excluded.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          User(s) acknowledge that inability to use the website wholly or
          partially for whatever reasons may have an adverse effect on its
          business. The Company assumes no liability whatsoever for any monetary
          or other damage suffered by the User including on account of any one
          or more of the following:
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The delay, failure, interruption, or corruption of any data or other
          information transmitted in connection with use of the Site or the
          Services;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The use or inability to use the Site or the Services;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any interruption or errors in the operation of the Site or the
          Services;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any unauthorized access by third parties (or User’s) to data or
          sensitive Personal Data/Information or other private information of a
          User;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any false, misleading or incorrect data or information Hosted on Site
          by a User or false misleading or incorrect statements or conduct of a
          User;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any violation of third party rights or claims or demands whatsoever in
          relation to the products or Services Hosted on the Site;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any matters relating to Services and/or the Site however arising,
          including negligence.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Notwithstanding anything contained herein, the Company's liability in
          any and all circumstances shall be limited to the lesser of the amount
          of fees and/or charges paid by the User or Rs. 50,00/- (Indian Rupees
          Five Thousand) or the US$ Dollar equivalent thereof.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 14 - INDEMNIFICATION <br />
          You agree to indemnify, defend and hold harmless VSSN Analytics Pvt.
          Ltd. and our parent, subsidiaries, affiliates, partners, officers,
          directors, agents, contractors, licensors, service providers,
          subcontractors, suppliers, interns and employees, harmless from any
          claim or demand, including reasonable attorneys’ fees, made by any
          third-party due to or arising out of your breach of these Terms of
          Service or the documents they incorporate by reference, or your
          violation of any law or the rights of a third-party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 15 - SEVERABILITY <br />
          In the event that any provision of these Terms of Service is
          determined to be unlawful, void or unenforceable, such provision shall
          nonetheless be enforceable to the fullest extent permitted by
          applicable law, and the unenforceable portion shall be deemed to be
          severed from these Terms of Service, such determination shall not
          affect the validity and enforceability of any other remaining
          provisions.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 16 - TERMINATION <br />
          The obligations and liabilities of the parties incurred prior to the
          termination date shall survive the termination of this agreement for
          all purposes.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          These Terms of Service are effective unless and until terminated by
          either you or us. You may terminate these Terms of Service at any time
          by notifying us that you no longer wish to use our Services, or when
          you cease using our site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          If in our sole judgment, you fail, or we suspect that you have failed,
          to comply with any term or provision of these Terms of Service, we
          also may terminate this agreement at any time without notice and you
          will remain liable for all amounts due up to and including the date of
          termination; and/or accordingly may deny you access to our Services
          (or any part thereof).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 17 - ENTIRE AGREEMENT <br />
          The failure of us to exercise or enforce any right or provision of
          these Terms of Service shall not constitute a waiver of such right or
          provision.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          These Terms of Service and any policies or operating rules posted by
          us on this site or in respect to The Service constitutes the entire
          agreement and understanding between you and us and govern your use of
          the Service, superseding any prior or contemporaneous agreements,
          communications and proposals, whether oral or written, between you and
          us (including, but not limited to, any prior versions of the Terms of
          Service).
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any ambiguities in the interpretation of these Terms of Service shall
          not be construed against the drafting party.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 18 - GOVERNING LAW <br />
          These Terms of Service and any separate agreements whereby we provide
          you Services shall be governed by and construed in accordance with the
          laws of India and jurisdiction of Bengaluru, Karnataka.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 19 - CHANGES TO TERMS OF SERVICE <br />
          You can review the most current version of the Terms of Service at any
          time at this page.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          We reserve the right, at our sole discretion, to update, change or
          replace any part of these Terms of Service by posting updates and
          changes to our website. It is your responsibility to check our website
          periodically for changes. Your continued use of or access to our
          website or the Service following the posting of any changes to these
          Terms of Service constitutes acceptance of those changes.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 20 - Grievance Redressal
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Grievance Redressal
        </Typography>
        <Typography variant="body1" className={classes.content}>
          For any complaints and grievances, User may contact the Grievance
          Officer, VSSN Analytics Private Limited via email:
          complaint@jweler.com
        </Typography>
        <Typography variant="body1" className={classes.content}>
          All complaints to the Grievance Officer shall be made in writing
          giving a detailed description of the complaint/grievance of the User.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The Grievance Officer shall redress all complaints within one (1)
          month from the date of receipt of complaint.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Arbitration Clause for Dispute
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any dispute or difference of any nature whatsoever arising out of or
          in relation to this Agreement including in respect of the indemnity
          clause of this Agreement shall be finally decided by a Sole Arbitrator
          to be nominated by the Director of the Company (hereinafter referred
          as "the nominating authority"). The Sole Arbitrator so appointed by
          the nominating authority shall be a practicing Advocate of not less
          than 5 years in practice or a retired judge of the High Court. The
          User shall not be entitled to raise any objection to any such Sole
          Arbitrator appointed by the nominating authority on any ground
          whatsoever. The arbitration shall be held in accordance with the
          provisions of the Arbitration &amp; am Conciliation Act, 1996 or any
          other applicable law at the relevant point of time. The language of
          the arbitration shall be English and the award rendered in arbitration
          shall be a reasoned award in writing and shall be conclusive and
          binding on the parties. The venue of arbitration shall be at New
          Delhi, India.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Governing Law and Jurisdiction
        </Typography>
        <Typography variant="body1" className={classes.content}>
          This Agreement and any dispute or matter arising out of or in
          connection with and/or incidental to the use of the Site and/or the
          Services shall be governed by the laws of India without regard to its
          conflict of laws provisions.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The User and the Company hereby irrevocably submit to the sole and
          exclusive jurisdiction of the courts at Delhi, India.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 20 - MEMBERSHIP ELIGIBLITY <br />
          The use of the Site is available only to persons who can form legally
          binding contracts under applicable law. Persons who are "incompetent
          to contract" within the meaning of the Indian Contract Act, 1872
          including minors, un-discharged insolvents etc. are not eligible to
          use the Site. A minor i.e. under the age of 18 years, cannot register
          as a member of the Site. The Company reserves the right to terminate
          the User membership and may refuse to provide the User with access to
          the Site if Company discovers that the User is under the age of 18
          years. The Site is not available to persons whose membership has been
          suspended or terminated by Company unless specifically invited by the
          Company. If the User is registering as a business entity, the User
          hereby represents and warrants that the User has the authority to bind
          the entity to this Agreement.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 21 - BREACH
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Without limiting other remedies, Company shall remove and disable all
          such content on the Site; may limit the Users' activity, immediately
          remove or end the Users listing, warn other Users and immediately
          temporarily/indefinitely suspend or terminate the User’s membership,
          and/or refuse to provide the User with access to the Site if:
        </Typography>
        <Typography variant="body1" className={classes.content}>
          User displays any information, data which is illegal or prohibited by
          any law for the time being in force including but not limited to the
          Illegal/Prohibited Content;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          User is in breach of the User Agreement or the documents it
          incorporates by reference;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company is unable to verify or authenticate any information the User
          provides;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          It is believed that the User actions may cause legal liability for the
          User, other Users or the Company;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          A User puts any material into the Site systems which contains any
          viruses, Trojan horses, worms, time bombs or other computer
          programming or similar routines that may damage, interfere with,
          surreptitiously intercept or expropriate any system, data or personal
          information;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          A User is unable to produce, when asked for by the Company, a
          certified copy of a consent, licence, approval, permission or similar
          certification requisite for goods and/or services a User proposes to
          Host/has Hosted on the Site;
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Any monies payable by the User to the Company are not paid on the due
          date; or
        </Typography>
        <Typography variant="body1" className={classes.content}>
          A complaint is received by the Company from another User or a third
          party and necessary action to resolve the complaint is not taken
          within 10 (ten) days by such User.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company may at any time at its sole discretion reinstate suspended
          Users. User(s) that has been indefinitely suspended may not register
          or attempt to register with Company or use the Site in any manner
          whatsoever until such time that such User is reinstated by Company.
          Notwithstanding the foregoing, if the User breaches the Agreement or
          the documents it incorporates by reference, Company reserves the right
          to recover any amounts due and owing by the User to Company and to
          take strict legal action including but not limited to initiating
          criminal proceedings against the User in this regard.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 22 - Warranties and Disclaimer
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company has endeavoured to ensure that all the information on the Site
          is correct, however Company neither warrants nor makes any
          representations regarding the accuracy or completeness of any data or
          information contained on the Site. This Company disclaims any
          liability, responsibility or any other claim, whatsoever, in respect
          of any loss, whether direct or consequential, to any User or any other
          person, arising out of or in connection with the use of the
          information, data and/or materials contained on the Site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company does not make any representation or warranty as to the
          attributes such as for quality, worth, marketability, etc. of the
          items or Services proposed to be sold or purchased by the Users of the
          Site. Company accepts no liability for any errors or omissions,
          whether on its behalf or on behalf of third parties, in this regard.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company does not make any representation or warranty as to the
          attributes to legal title, creditworthiness, identity, etc. of any
          kind about any product or services offered, displayed or hosted on the
          Site of its Users except to the extent that a Trust Stamp and/or
          Credit Report is obtained. The User is advised to independently verify
          the bona fides of any particular User that it chooses to deal with on
          the Site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company undertakes research and investigation through a repute private
          agency for some of its services. The information report created from
          such research and investigation is only provided to you as a tool to
          help your business and/or as an authentication of your existence as a
          business entity.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The Company does not collect any Sensitive Personal Data/Information
          of a User.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company conducts several phone enquiries on its Site to provide the
          Services, Company however does not have a mechanism to verify the
          credentials of these enquiries, hence buyers &amp; sellers are advised
          to exercise due caution in dealing with these enquiries &amp;
          finalizing business deals.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The Company provides the Site and Services "as is" and without any
          warranty or condition, express, implied or statutory and specifically
          disclaims any implied warranties of title, merchantability, fitness
          for a particular purpose and non-infringement. The User expressly
          agrees that use of the Site is at its own risk.Company as well as its
          management have created these pages and the Services as a specific
          feature and as a service to the global exim community.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          No warranty or condition expressed or implied or statutory is being
          provided to the User. Company hereby specifically disclaims any
          quality, durability, accuracy, reliability and all express or implied
          warranties including but not limited to warranties of title,
          merchantability, fitness for a particular purpose or performance.
          Company does not make any representation or warranties of any kind
          about any product or Services offered, or displayed or hosted on the
          Site. All such warranties, representations, conditions and
          undertakings are hereby excluded.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Under no circumstances shall Company be held liable for any delay or
          failure or disruption of the content or services delivered through the
          Site resulting directly or indirectly from acts of nature, forces or
          causes beyond our reasonable control, including without limitation,
          internet failures, computer, telecommunications or any other equipment
          failures, electrical power failues, strike, labor disputes, riots,
          insurrections, civil disturbances, shortage of labor or materials,
          fires, flood, storms, explosions, acts of God, war, governmental
          actions, order of domestic or foreign courts or tribunals or
          non-performance of third parties or other force majeure condition.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Listing of counterfeits, non-licensed replicas or unauthorized
          products is strictly prohibited on the site. Further no products can
          be advertised on the site without the explicit permission from the
          intellectual property right holder. It is clear inter-alia that all
          third party intellectual property rights are owned by the third party
          and not Infocom/its users.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Under no circumstances will Company be liable, direct, indirect,
          incidental, special, consequential or exemplary damages including but
          not limited to, damages for loss of profit, goodwill, use, data or
          other intangible losses arising out of or in connection with the use
          of the Services provided by Company (“Damages”) whether arising out of
          or in connection with or otherwise in relation to any business or
          other transaction conducted in relation to the Service(s). The
          Company’s liability is limited in any and all circumstances shall be
          limited to the lesser of the amount of fees and/or charges paid by the
          User or Rs. 50,00/- (Indian Rupees five Thousand)
        </Typography>
        <Typography variant="body1" className={classes.content}>
          The User hereby indemnifies and holds Company harmless against any and
          all losses, claims, injuries and Damages that may arise out of the
          User’s breach of this Disclaimer and/or the Agreement,
          Illegal/Prohibited Content, Warning against Fraud and or any breach of
          the terms and conditions or the representations or warranties made by
          the User herein or in the Agreement/usage terms.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Company reserves the right to change the nature of the paid Services
          offered here or discontinue its Services to a member without any prior
          notice.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          This document is an electronic record in terms of the Information
          Technology Act, 2000 and the provisions pertaining to electronic
          records in various statues amended by the Information Technology Act,
          2000.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          SECTION 23 - Privacy
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Please check Privacy Policy
        </Typography>
        <Typography variant="body1" className={classes.content}>
          FRAUD WARNING
        </Typography>
        <Typography variant="body1" className={classes.content}>
          All Users are advised to be very careful while doing business with
          individuals, body corporates or companies from any part of the world.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Users are advised to exercise due caution while transacting with a
          prospective buyer or a seller on the Site. Users must undertake
          interactions or transactions with organizations and/or individuals
          located on or through the Site, with reasonable caution and after
          undertaking thorough diligence on such organization and/or individual.
          Neither the Company nor its director’s, employees, officers or agents
          shall be liable to any User or otherwise for any illegal or fraudulent
          interaction or transaction with organizations and/or individuals
          located on or through the Site.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Users are advised to not send any advance money/legal fee or products
          unless there is cash in your account or an irrevocable letter of
          credit from the buyer, duly authorised by the buyer’s bank.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Users are advised not to transact business unless full payment is made
          to you before shipping of the products.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          CREDIT CARD SCAMS - When a User receives any online Order paid by
          Credit Card, it is recommended that you ask for a written Credit Card
          Authorisation to be faxed to you. Please get validity of the Credit
          Card checked with your Bank or contact VISA, Master Card or American
          Express directly. Unless the validity of the Credit Card is confirmed,
          please do not ship any goods.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          BANK DRAFT SCAMS - BANK DRAFT SCAMS - There have been cases of people
          receiving Bank Drafts with unauthorised printing of Bank Names. Before
          shipping any product or advancing a partial cash advance, you must
          wait for the Bank to clear the Bank Draft/Check.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Registration/License/Tender Fee SCAMS - Cases have been reported where
          an offer is sent to buy a large number of goods after the seller pays
          them a Registration/License/Tender Fee. They post Offers to BUY large
          quantity of Computers and other material.Once you submit your bid; you
          will be notified that your Tender has been accepted. You will then be
          asked to pay for Legal fees and Tender Fee. DO NOT PAY ANY FEE. Don't
          ship any Computers/Other products unless you have the cash in your
          account confirmed by your bank.
        </Typography>
        {/* <div className={classes.footer}>
        <div>
          <Typography variant="h6">
            &copy; 2020 Jweler | T&amp;C | Bank Details
          </Typography>
        </div>
      </div> */}
      </Box>
      <Footer />
    </>
  );
};

export default TermsAndConditionsView;
