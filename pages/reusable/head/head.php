<!DOCTYPE html>
<html lang="en">
<head>
  <title>StefaK forum</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href=<?php echo $_SESSION["theme"];?>>
  <link rel="stylesheet" type="text/css" href="/static/style/style.css">
  <meta http-equiv="cache-control" content="no-cache" />
</head>
<body>
  <nav>
    <!-- User Pic -->
    <img src="<?php 
      $hasPic = userHasProfilePicture();
      if (!userHasProfilePicture()) {
        echo "/static/uploads/users/m.jpg";
      } else {
        echo "/static/uploads/".$_SESSION["username"].".png";
      }
    ?>" onclick="REDIRECTS.profile()">
    <!-- Username -->
    <a href="#"><?php echo $_SESSION["username"];?></a>
    <?php require PAGES_FOLDER."reusable/head/mobileAndMediumMenu.php" ?>
    <?php require PAGES_FOLDER."reusable/head/largeMenu.php" ?>
  </nav>