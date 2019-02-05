<?php

$mail = $_POST['email'];

if(isset($mail) && filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $file = '../emails.txt';
    $current = file_get_contents($file);
    $current .= $mail . "\n";
    file_put_contents($file, $current);
}

?>