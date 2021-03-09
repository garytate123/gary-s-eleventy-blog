---
layout: layouts/home.njk
title: Contact
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 4
---

<br>
<br>

<div class="text-center">
<!-- Contact info -->
<div class="row">
<div class="col-md-6">
<h1 class="h1 mb-3 font-weight-normal">Contact Information</h1>
<br />
<h2 class="h2 mb-3 font-weight-normal">Gary Tate</h2>
<br />
<h4 class="h4 mb-3 font-weight-normal">Address</h4>
<p>468 Green Avenue <br />West Yorkshire <br /> WF43 9PO </p>
<br />
<h4 class="h4 mb-3 font-weight-normal">Email Address</h4>
<p>garytatelufc@gmail.com </p>
<br />
<h4 class="h4 mb-3 font-weight-normal">Phone Number</h4>
<p>07123 123 123 </p>
</div>
<!-- contact form -->
<div class="col-md-6">
    <form class="form-signin form-control" name="contact" method="POST" data-netlify="true">
    <h1 class="h1 mb-3 font-weight-normal">Contact Form</h1>
      <h4 class="h4 mb-3 font-weight-normal">Please fill out the form to send your message</h4>
      <label for="inputName" class="sr-only">Your name</label>
      <input name="name" type="text" id="inputName" class="form-control top-contact-form-input" placeholder="Your name" required autofocus>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input name="email" type="email" id="inputEmail" class="form-control middle-contact-form-input" placeholder="Email address" required autofocus>
      <label for="message" class="sr-only">Message</label>
      <textarea type="textarea" name="message" id="message" class="form-control bottom-contact-form-input" placeholder="Your message" required></textarea>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" name="newsletter" id="newsletter" value="signUp"> Sign me up to the newsletter
        </label>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" name="accept-terms-and-conditions" id="accept-terms-and-conditions" value="accepted T&Cs" required> Accept Terms & Conditions
        </label>
        <a href="/t&c" target="_blank" ><p>Read T&C's</p></a>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Send Message</button>
    </form>
    </div>
</div>
</div>
