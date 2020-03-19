<!-- MOBILE AND TABLET -->
<div>
  <button class="mobileAndMedium" id="menu-button">Menu</button>
</div>
<div id="menu-cover" class="mobileAndMedium invisible"></div>
<div id="menu" class="mobileAndMedium" >
  <header>
    <div id="closeMenuButton"></div>
  </header>
  <nav>
    <div class="normalMenuButton" id="darkModeButton">
      <label> <?php 
        if (strcmp($_SESSION["theme"], "/static/style/themes/default/default.css"))
          echo "Dark Mode";
        else echo "Light Mode";
      ?></label>
    </div>
    <div class="normalMenuButton" onclick="REDIRECTS.dashboard()">
      <label>Dashboard</label>
    </div>
    <div class="normalMenuButton" onclick="REDIRECTS.profile()">
      <label>My Profile</label>
    </div>
    <div class="normalMenuButton" onclick="REDIRECTS.forums()">
      <label>Forums</label>
    </div>
    <div class="normalMenuButton">
      <label>My Posts</label>
    </div>
    <div class="normalMenuButton">
      <label>My Comments</label>
    </div>
    <div class="normalMenuButton">
      <label>Liked Posts</label>
    </div>
  </nav>
</div>