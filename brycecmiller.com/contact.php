<?php
	// input validation function
	function validate($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	// Send email with validated data
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
		mail($to, $subject, $body, $headers);



		// // Check if name has been entered
		// if (empty($_POST["name"])) {
  //  		$errName = "Name is required";
  //  		echo $errName;
  // 	} 
  // 	else {
  //   	$name = validate($_POST["name"]);
	 //    // check if name only contains lette rs and whitespace
	 //    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
	 //      $errName = "Only letters and white space allowed"; 
  //  			echo $errName;
	 //    }
  // 	}
		
		// // Check if email has been entered and is valid
		// if (empty($_POST["email"])) {
	 //    $errEmail = "Email is required";
	 //    echo $errEmail;
	 //  } 
	 //  else {
	 //    $email = validate($_POST["email"]);
	 //    // check if e-mail address is well-formed
	 //    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	 //      $errEmail = "Please enter a valid email address";
	 //      echo $errEmail;
	 //    }
	 //  }

		// // Check if phone has been entered
		// if (empty($_POST["phone"])) {
		// 	$errPhone = "Phone number is required";
		// 	echo $errPhone;
		// }
		// else {
		// 	$phone = validate($_POST["phone"]);
		// }
		
		// //Check if message has been entered
		// if (empty($_POST["message"])) {
		// 	$errMessage = "Message is required";
		// 	echo $errMessage;
		// }
		// else {
		// 	$message = validate($_POST["message"]);
		// }

		// // Email components
		// $from = "brycfptw@server223.web-hosting.com";
		// $subject = "brycecmiller.com Contact Form";
		// $body = "Name: $name\n Email: $email\n Phone: $phone\n Message:\n $message";
		// $to = "bcmiller713@gmail.com";
		// $headers = "From: $from" . "\r\n" . "Reply-To: $email";
 
		// // If there are no errors, send the email
		// if (!$errName && !$errEmail && !$errPhone && !$errMessage) {
		// 	mail($to, $subject, $body, $headers);
		// 	$success = "Your message has been sent!";
		// }
	}
?>
