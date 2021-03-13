---
layout: layouts/home.njk
title: Tip Calculator
templateClass: tmpl-post
eleventyNavigation:
  key: Tip Calculator
  order: 6
---

<div class="text-center">
    <h1>JavaScript Projects</h1>
    <hr>
    <br>
  </div>
<div class="row">
<div class="col-md-4">

  <form class="form-control form-signin box-styling">
    <h1>Simple Form</h1>
    <p>This form will take your first and last name as inputs and will display your full name.</p>
    <hr>
    <h3 id="userName">You Name</h3>
    <label>Your first name<br>
    <input name="firstName" id="firstName" type="text" placeholder="Your first name">
    </label>
    <br>
    <label>Your last name<br>
    <input name="lastName" id="lastName" type="text" placeholder="Your last name">
    </label>
    <br>
    <br>
    <button class="btn" type="button" id="name-btn" >Submit</button>
  </form>

</div>
<div class="col-md-4">

  <form class="form-control form-signin box-styling">
    <h1>Simple Calculator</h1>
    <p>This is a simple addition calculator. Enter two numbers and see the answer below.</p>
    <hr>
    <label>First number<br>
    <input name="num1" id="num1" type="number" placeholder="First number">
    </label>
    <h2>+</h2>
    <label>Second number<br>
    <input name="num2" id="num2" type="number" placeholder="Second number">
    </label>
    <br>
    <br>
    <button class="btn" type="button" id="calc-btn">Calculate!</button>
    <h1 id="answer"></h1>
  </form>

</div>
<div class="col-md-4">
  <form class="form-control form-signin box-styling">
    <h1>Tip Calculator</h1>
    <p>Enter your bill amount and select the percentage of tip you would like to give. If there is only one person paying, you can either leave the number of people blank or enter 1.</p>
    <hr>
    <label>Bill amount<br>
    <span>£ </span><input id="billamt" type="text" placeholder="Bill amount">
    </label>
    <br>
    <label>How much tip would you like to give?<br>
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
      </label>
      <br>
      <label>How many people are sharing the bill?
      <input id="peopleamt" type="text" placeholder="Number of People">
      </label>
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

<script src="/js/tip-calc.js"></script>
