<?php

// echo "body";
print_r($_POST);
// session_start();

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;
// use phpmailerException as Exception;

// require  __DIR__ . '../../vendor/autoload.php';

// header('Content-Type: application/json');


// if (isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['subject']) && isset($_POST['message'])) {



// 	$mail = new PHPMailer(true); //Argument true in constructor enables exceptions

// 	//From email address and name
// 	$mail->From = "savvy@gmail.com";
// 	$mail->FromName = "no-reply";

// 	$mail->isSMTP();
// 	$mail->CharSet = "utf-8";
// 	$mail->SMTPAuth = true;
// 	$mail->SMTPSecure = 'tls';
// 	$mail->Host = 'smtp.gmail.com';
// 	$mail->Port = 587;
// 	$mail->SMTPOptions = array(
// 		'ssl' => array(
// 			'verify_peer' => false,
// 			'verify_peer_name' => false,
// 			'allow_self_signed' => true
// 		)
// 	);
// 	/* Username (email address). */
// 	$mail->Username = 'gitplus123@gmail.com';

// 	/* Google account password. */
// 	$mail->Password = 'mzjkicshrmnuxjdt';

// 	/* Reply to the address if need be */
// 	//  $mail->AddReplyTo( $email, 'Reply to '.'ADMIN');
// 	/* Set the mail sender. */
// 	$mail->setFrom('gitplus123@gmail.com', 'Paloma');

// 	//To address and name
// 	// $mail->addAddress("recepient1@example.com", "Recepient Name");
// 	$mail->addAddress($_POST['email']); //Recipient name is optional
// 	// $mail->addAddress($me); //Recipient name is optional

// 	//Address to which recipient will reply
// 	$mail->addReplyTo("no-reply@savvy.com", "Reply");

//     $body = $_POST['message'];

// 	//CC and BCC
// 	$mail->addCC("cc@example.com");
// 	$mail->addBCC("bcc@example.com");

// 	//Send HTML or Plain Text email
// 	$mail->isHTML(true);

// 	$mail->Subject = $_POST['subject'];
// 	$mail->Body = $body;
// 	$mail->AltBody = $body;

// 	try {
// 		$mail->send();
// 		return;
// 	} catch (Exception $e) {
// 		echo "Mailer Error: " . $mail->ErrorInfo;
// 	}
// }

