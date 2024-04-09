$(document).ready(function () {
  // Function to check if all required fields in screen 1 are filled
  function checkScreen1Fields() {
    var name = $('#screen1 input[type="text"]').val();

    var workModeChecked =
      $('#screen1 input[name="work_mode"]:checked').length > 0;
    var workExperienceChecked =
      $('#screen1 input[name="work_experience"]:checked').length > 0;
    // Count the number of filled fields in screen 1
    var filledFieldsScreen1 = 0;
    if (name.length >= 3) filledFieldsScreen1++;
    if (workModeChecked) filledFieldsScreen1++;
    if (workExperienceChecked) filledFieldsScreen1++;
    // Calculate percentage of completion for screen 1
    var totalFieldsScreen1 = 3; // Total number of fields in screen 1
    var completionPercentageScreen1 =
      (filledFieldsScreen1 / totalFieldsScreen1) * 100;

    return completionPercentageScreen1;
  }

  // Function to check if all required fields in screen 2 are filled
  function checkScreen2Fields() {
    var previousCompany = $('#screen2 input[type="text"]').val();

    // var branchSelected = $(
    //   '#screen2 select[name="branch"] option:selected'
    // ).val(); // Corrected selector for select element

    var branchSelected = $("#branch_id").find(":selected").val();

    var positionSelected = $("#position_id").find(":selected").val();

    var filledFieldsScreen2 = 0;
    if (previousCompany.length >= 3) filledFieldsScreen2++;
    if (branchSelected) filledFieldsScreen2++;
    if (positionSelected) filledFieldsScreen2++;

    console.log(previousCompany);
    console.log(branchSelected);
    console.log(positionSelected);
    // Calculate percentage of completion for screen 2
    var totalFieldsScreen2 = 3; // Total number of fields in screen 2
    var completionPercentageScreen2 =
      (filledFieldsScreen2 / totalFieldsScreen2) * 100;
    return completionPercentageScreen2;
  }

  // Function to update the progress bar dynamically
  function updateProgressBar() {
    var completionPercentageScreen1 = checkScreen1Fields();
    var completionPercentageScreen2 = checkScreen2Fields();
    var totalCompletionPercentage =
      (completionPercentageScreen1 + completionPercentageScreen2) / 2; // Average completion percentage
    $(".progress").css("width", totalCompletionPercentage + "%");
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
    // Reset input fields in screen 2
    $('#screen2 input[type="text"]').val("");
    $('#screen2 select[name="branch"]').val(""); // Reset select element for branch
    $('#screen2 select[name="position"]').val(""); // Reset select element for position
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

  //
  $("#screen2 input, #screen2 select").on("change", function () {
    // if (checkScreen1Fields() === 100) {
    //   navigateToScreen2();
    // }
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
