<?php
if($_POST)
{
	$to_Email   	= "hello@sandip.io"; //Replace with recipient email address
	$subject        = "Inquiry"; //Subject line for emails


	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error',
			'text' => 'Request must come from Ajax'
		));

		die($output);
    }

	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["fullName"]) || !isset($_POST["userMobile"]) || !isset($_POST["userEmail"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$user_Name         = filter_var($_POST["fullName"], FILTER_SANITIZE_STRING);
	$user_Mobile       = filter_var($_POST["userMobile"], FILTER_SANITIZE_EMAIL);
	$user_Email        = filter_var($_POST["userEmail"], FILTER_SANITIZE_STRING);
	//additional php validation
	if(strlen($user_Name)<3) // If length is less than 4 it will throw an HTTP error.
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
		die($output);
	}
	if(strlen($user_Mobile)<8) // If length is less than 8 it will throw an HTTP error.
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter correct phone number!'));
		die($output);
	}
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
	//email body
    $message_body = "Name : ".$user_Name."\r\n\r\nEmail : ".$user_Email."\r\n\r\nPhone : ".$user_Mobile;


	//proceed with PHP email.
	$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	$sentMail = @mail($to_Email, $subject, $message_body, $headers);

	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_Name .' Thanks for your email. You will receive an answer within 24 hours'));
		die($output);
	}
}
?>
