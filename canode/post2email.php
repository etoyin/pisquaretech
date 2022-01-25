<?php
 
if(isset($_POST["email"])) {
  $to = "toyinadesina2015@gmail.com"; // your mail here
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $fname = filter_var($_POST["fname"], FILTER_SANITIZE_STRING);
  $lname = filter_var($_POST["lname"], FILTER_SANITIZE_STRING);
  $country = filter_var($_POST["country"], FILTER_SANITIZE_STRING);
  $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
  $subject = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
  $company = filter_var($_POST["company"], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
  $body = "Message: $message\nE-mail: $email\nFirst Name: $fname\nCompany: $company";
  
  //mail headers are mandatory for sending email
  $headers = 'From: ' .$email . "\r\n". 
  'Reply-To: ' . $email. "\r\n" . 
  'X-Mailer: PHP/' . phpversion();
 
  if(mail($to, $subject, $body, $headers)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    echo($message);
    die($output);
  }
}
else{
  echo("No posting....................");
}