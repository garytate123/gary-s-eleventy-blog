---
layout: layouts/home.njk
title: Tip Calculator
templateClass: tmpl-post
eleventyNavigation:
  key: Tip Calculator
  order: 6
---

<div class="container">
<div class="text-center">
    <h1>JavaScript Projects</h1>
    <hr>
    <br>
  </div>
<div class="row">
<div class="col-md-4">

<form class="form-control form-signin">
<h1>Simple Form</h1>
<p>This form will take your first and last name as inputs and will display your full name.</p>
<hr>
<h3 id="userName">You Name</h3>
<br>
<input name="firstName" id="firstName" type="text" placeholder="Your First Name">
<br>
<br>
<input name="lastName" id="lastName" type="text" placeholder="Your Last Name">
<br>
<br>
<button class="btn" type="button" id="name-btn" >Submit</button>
</form>

</div>
<div class="col-md-4">

<form class="form-control form-signin">
<h1>Simple Calculator</h1>
<p>This is a simple addition calculator. Enter two numbers and see the answer below.</p>
<hr>
<br>
<input name="num1" id="num1" type="number" placeholder="Number 1">
<h1>+</h1>
<input name="num2" id="num2" type="number" placeholder="Number 2">
<br>
<br>
<button class="btn" type="button" id="calc-btn">Submit</button>
<h1 id="answer"></h1>
</form>

</div>
<div class="col-md-4">
<form class="form-control form-signin">
     <h1>Tip Calculator</h1>
     <p>This a tip calculator.</p>
     <br>
      <p>How much was your bill?
        <p>
          £ <input id="billamt" type="text" placeholder="Bill Amount">
          <p>How much tip would you like to give?
            <p>
              <select id="serviceQual">
            <option disabled selected value="0">Choose an percentage</option>
            <option value="0.05">5&#37;</option>
            <option value="0.1">10&#37;</option>
            <option value="0.15">15&#37;</option>
            <option value="0.2">20&#37;</option>
            <option value="0.3">30&#37;</option>
            <option value="0.4">40&#37;</option>
            <option value="0.5">50&#37;</option>
        </select>
    <br>
    <p>How many people are sharing the bill?</p>
    <input id="peopleamt" type="text" placeholder="Number of People"> people
    <br>
    <br>
    <button class="btn" type="button" id="calculate">Calculate!</button>
  <!--calculator end-->
  <br>
  <br>
  <div id="totalTip">
  <h5 id="each">You will each pay a tip of:</h5>
    <h2><sup>£</sup><span id="tip">0.00</span> </h2>
  </div>
  <!--totalTip end-->
</form>

</div>
</div>
</div>
</div>

<script src="/js/tip-calc.js"></script>
