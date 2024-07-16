<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $first_name = $_POST["first_name"];
  $last_name = $_POST["last_name"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Create email message
  $to = "garret.degrande@gmail.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email\r\n";

  $email_message = "First Name: $first_name\n";
  $email_message .= "Last Name: $last_name\n";
  $email_message .= "Phone Number: $phone\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Message:\n$message";

  // Send email
  mail($to, $subject, $email_message, $headers);

  // Redirect to a thank-you page
  header("Location: thank_you.html");
  exit;
}
?>
