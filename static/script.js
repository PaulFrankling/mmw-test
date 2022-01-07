// Light/dark mode
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Enquiry form validation
$("#form").validate({
  rules: {
    fullname: { required: true },
    sizeSelected: "required",
    email: { email: true, required: true },
    competitor: "required",
    competitorUrl: { required: false },
    enquiry: { required: true, minlength: 50, maxlength: 200 },
    productId: "required",
  },

  messages: {
    fullname: {
      required: "Please enter your full name",
    },
    email: {
      email: "Please use the format: 'abc@domain.tld'",
      required: "Please enter an email address",
    },
    competitorUrl: {
      required: "If yes, please can you state the URL of the competitor",
    },
    enquiry: {
      required: "Please enter a message in your enquiry",
      minlength: "Must be at least 50 characters",
      maxlength: "Must be below the 200 characters limit",
    },
  },

  submitHandler: function (form) {
    $.ajax({
      url: form.action,
      type: form.method,
      data: $(form).serialize(),
      success: function (response) {
        $("#answers").html(response);
      },
    });
  },
});
