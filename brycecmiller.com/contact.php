<?php
	function validate($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$name = validate($_POST["name"]);
		$email = validate($_POST["email"]);
		$phone = validate($_POST["phone"]);
		$message = validate($_POST["message"]);

		$from = "brycfptw@server223.web-hosting.com";
		$subject = "brycecmiller.com Contact Form";
		$body = "Name: $name\n Email: $email\n Phone: $phone\n Message:\n $message";

		$to = "bcmiller713@gmail.com";
		$headers = "From: $from" . "\r\n" . "Reply-To: $email";
 
		// Check if name has been entered
		if (!$_POST["name"]) {
			$errName = "Please enter your name";
		}
		
		// Check if email has been entered and is valid
		if (!$_POST["email"] || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
			$errEmail = "Please enter a valid email address";
		}

		// Check if phone has been entered
		if (!$_POST["phone"]) {
			$errPhone = "Please enter a phone number";
		}
		
		//Check if message has been entered
		if (!$_POST["message"]) {
			$errMessage = "Please enter your message";
		}
 
		// If there are no errors, send the email
		if (!$errName && !$errEmail && !$errPhone && !$errMessage) {
			mail($to, $subject, $body, $headers);
			// header("Location: index.html");
		}
	}
?>
