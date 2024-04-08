$(document).ready(function () {
  // Function to check if all required fields in screen 1 are filled
  function checkScreen1Fields() {
    var name = $('#screen1 input[type="text"]').val();
    var workModeChecked =
      $('#screen1 input[name="work_mode"]:checked').length > 0;
    var workExperienceChecked =
      $('#screen1 input[name="work_experience"]:checked').length > 0;
    // Count the number of filled fields
    var filledFields = 0;
    if (name.length >= 3) filledFields++;
    if (workModeChecked) filledFields++;
    if (workExperienceChecked) filledFields++;
    // Calculate percentage of completion
    var totalFields = 3; // Total number of fields in screen 1
    var completionPercentage = (filledFields / totalFields) * 100;
    return completionPercentage;
  }

  // Function to update the progress bar dynamically
  function updateProgressBar() {
    var completionPercentage = checkScreen1Fields();
    $(".progress").css("width", completionPercentage + "%");
  }

  // Function to navigate from screen 1 to screen 2
  function navigateToScreen2() {
    $("#screen1").removeClass("active");
    $("#screen2").addClass("active");
    updateProgressBar(); // Update progress bar when navigating to screen 2
  }

  // Function to reset the form and show screen 1 with blank inputs
  function resetForm() {
    // Reset input fields in screen 1
    $('#screen1 input[type="text"]').val("");
    $('#screen1 input[type="radio"]').prop("checked", false);
    // Show screen 1
    $("#screen2").removeClass("active");
    $("#screen1").addClass("active");
    $(".progress").css("width", "0%");
  }

  // Function to handle submission of the questionnaire
  function submitQuestionnaire() {
    // You can perform any additional processing here if needed
    // For now, let's just show a "Thank you" message
    alert("Thank you for submitting the questionnaire!");
    // Reset the form and show screen 1 with blank inputs after the message
    resetForm();
  }

  // Enable navigation to screen 2 when all required fields in screen 1 are filled
  $("#screen1 input, #screen1 select").on("change", function () {
    if (checkScreen1Fields() === 100) {
      navigateToScreen2();
    }
    updateProgressBar(); // Update progress bar dynamically on field change
  });

  // Previous button click event to navigate back to screen 1
  $(".prev-btn").on("click", function () {
    $("#screen2").removeClass("active");
    $("#screen1").addClass("active");
    updateProgressBar(); // Update progress bar when navigating back to screen 1
  });

  // Submit button click event to submit the questionnaire
  $(".submit-btn").on("click", function () {
    submitQuestionnaire();
  });
});
