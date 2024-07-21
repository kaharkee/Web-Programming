<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <style>
        h1 {
            Color: red;
            border: 2px solid blue;

        }
    </style>
    <?php
    $mname;
    $lemail;
    $mob;
    $page;
    $passed;

    $username = $_POST["name"];
    if (!isset($username) || empty($username) || (!preg_match("/^[a-zA-Z]*$/", $username))) {
        echo " <h1> enter the name! <a href='index.html'> Try Again </a></h1>";

    } else {
        $mname = $username;
    }

    $hemail = $_POST["email"];
    if (!isset($hemail) || empty($hemail) || !filter_var($hemail, FILTER_VALIDATE_EMAIL)) {
        $emailerr = "<h1>Enter Your email!<a href='index.html'> Try Again</a></h1>";

        echo $emailerr;
    } else {
        $lemail = $hemail;
    }

    $phone = $_POST["mobile"];

    if (!preg_match('/^[0-9]{10}+$/', $phone)) {

        echo "<h1>Phone Number is Not Valid! <a href='index.html'>Try again</a></h1>";

    } else {

        $mob = $phone;
    }



    $uage = $_POST["age"];
    if (!($uage > 16 && $uage < 99)) {
        echo "<h1>Age not empty and  must be (between 16-99)!<a href='index.html'> Try Again </a> </h1>";
    } else {
        $page = $uage;
    }
    $pass = $_POST["password"];
    if (!isset($pass) || strlen($pass) < 8) {

        echo "<h1> Password is Minimum 8 Characters!<a href='index.html'> Try Again </a> </h1>";
    } else {
        $passed = $pass;
    }



    if (!empty($mname) && !empty($passed) && !empty($page) && !empty($mob) && !empty($lemail)) {
        echo "<h1>hello " . $mname . "!!<br>" . "</h1>";
        echo "<h1>your email is " . $lemail . "<br>" . "</h1>";
        echo "<h1>your phone number is " . $mob . "<br>" . "</h1>";
        echo "<h1>Your Age is " . $page . "<br>" . "</h1>";
    }
    ?>
</body>

</html>