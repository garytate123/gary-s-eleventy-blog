---
layout: layouts/home.njk
title: Tip Calculator
templateClass: tmpl-post
eleventyNavigation:
key: Tip Calculator
order: 9
---

<div class="container">
<div class="row">
<div class="col-md-6">

<form class="form-control form-signin">
<p>This form will take your first and last name as inputs and will display your full name.</p>
<h1 id="userName">You Name</h1>
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
<div class="col-md-6">

<form class="form-control form-signin">
<p>This is a simple addition calculator. Enter two numbers and see the answer below.</p>

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
</div>
</div>

<script src="/js/tip-calc.js"></script>
