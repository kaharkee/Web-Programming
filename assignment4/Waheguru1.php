<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8" lang="en">
    <title>Slot Machine</title>
</head>
<style>
#main {


    margin: 0 auto;
    width: 50%;
    text-align: center;

}


img {

    width: 100px;
    height: 100px;
    border: 2px solid black;

}

input {
    width: 100px;
    height: 100px;
    border: 2px solid black;
    font-size: 30px;
    background: red;
    color: white;

}

p {
    font-size: 30px;
}

h1 {
    text-align: center;
}
</style>
</style>

<body>
    <h1>Slots</h1>
    <div id="main">

        <?php
        // echo "<h1 text-align=center>Slots</h1>"; //for message display
        
        $pic1 = "";
        $pic2 = "";
        $pic3 = "";

        $f1 = rand(1, 3);
        $f2 = rand(1, 3);
        $f3 = rand(1, 3);

        function displayRandom($numImages = 3)
        {
            $imagesAreas = array("fruit/1.png", "fruit/2.png", "fruit/3.png", "fruit/4.png", "fruit/5.png", "fruit/6.png", "fruit/7.png");
            //shuffle($imagesAreas);
            $selectedImages = [];
            // $randomNumber = rand(0, (count($imagesAreas) - 1));
            // $randomNumber1 = rand(0, (count($imagesAreas) - 1));
            // $randomNumber2 = rand(0, (count($imagesAreas) - 1));
        
            // echo '<img src="' . $imagesAreas[$randomNumber] . '" width="35" height="100">';
            // echo '<img src="' . $imagesAreas[$randomNumber1] . '" width="35" height="100">';
            // echo '<img src="' . $imagesAreas[$randomNumber2] . ' width="35" height="100">';
        

            for ($i = 0; $i < $numImages; $i++) {
                $randomNumber = rand(0, count($imagesAreas) - 1);
                $selectedImages[] = $imagesAreas[$randomNumber];
                echo '<img src="' . $imagesAreas[$randomNumber] . '" alt="Slot Image" "width="35" "height="100">';
            }
            return $selectedImages;
        }

        $pics = displayRandom();
        $winMessages = [
            "You won a Jackpot!!",
            "Win!",
            "Win",
            "win",
            "Sorry you lose!"
        ];

        $uniquePics = array_unique($pics);
        if (count($uniquePics) == 1) {
            echo "<p>" . $winMessages[0] . "</p>";
        } elseif (count($uniquePics) == 2) {
            echo "<p>" . $winMessages[1] . "</p>";
        } else {
            echo "<p>" . $winMessages[4] . "</p>";
        }

        // if ($f1 == 1 || $f2 == 1 || $f3 == 1) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        
        //     echo "You won a Jackpot!!";
        // } else if ($f1 == 1 || $f2 == 1 || $f3 != 1) {
        
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Win";
        // } else if ($f1 == 1 || $f3 == 1 || $f2 != 1) {
        
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "win";
        // } else if ($f2 == 1 || $f3 == 1 || $f1 != 1) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Win!";
        // } else if ($f1 == 2 || $f2 == 2 || $f3 == 2) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Win";
        // } else if ($f1 == 2 || $f2 == 2 || $f3 != 2) {
        
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "win";
        // } else if ($f1 == 2 || $f3 == 2 || $f2 != 2) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        
        //     echo "Win";
        
        // } else if ($f2 == 2 || $f3 == 2 || $f3 != 2) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Win";
        // } else if ($f1 == 3 || $f2 == 3 || $f3 == 3) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Win";
        // } else if ($f1 == 3 || $f2 == 3 || $f3 != 3) {
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Win";
        // } else if ($f2 == 3 || $f3 == 3 || $f1 != 3) {
        
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Jackpot!";
        // } else if ($f1 == 3 || $f3 == 3 || $f2 != 3) {
        
        //     $pic1 = $f1;
        //     $pic2 = $f2;
        //     $pic3 = $f3;
        //     echo "Jackpot!";
        // } else {
        //     echo "Sorry you lose!";
        // }
        // displayRandom();
        
        ?>
        <!-- <div id="main">
        <input type="submit" name="Spin" value="Spin" onclick='window.location.reload(true);'>
    </div> -->

        <form method="post">
            <input type="submit" name="Spin" value="Spin" onclick='window.location.reload(true);'>
        </form>
    </div>
</body>

</html>