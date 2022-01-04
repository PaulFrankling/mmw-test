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
    fullname: "Please fill name",
    email: { email: "Enter Valid Email!", required: "Enter Email!" },
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
