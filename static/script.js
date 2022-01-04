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
    sizeSelected: { required: true },
    email: { email: true, required: true },
    competitor: { required: true },
    enquiry: { required: true, minlength: 50 },
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
