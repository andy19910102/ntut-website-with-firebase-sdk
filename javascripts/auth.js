// Scripts start here...

// Select DOM from web

// Sign Up form
var $signUpForm = $("#signUpForm"),
    $signUpEmail = $("#signUpEmail"),
    $signUpPassword = $("#signUpPassword");

// Sign in form
var $signInForm = $("#signInForm"),
    $signInEmail = $("#signInEmail"),
    $signInPassword = $("#signInPassword");

// Sign out button
var $signOutBtn = $("#signOutBtn");

$signUpForm.submit(function (e) {
    e.preventDefault();
    // When sign up form submitted
    console.log("Ready for sign up");
});

$signInForm.submit(function (e) {
    e.preventDefault();
    // When sign in form submitted
    console.log("Ready for sign in");
});

$signOutBtn.click(function () {
    // When click sign out button
    console.log("Ready for sign out");
});

