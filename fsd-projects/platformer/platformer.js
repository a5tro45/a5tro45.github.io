$(function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  let gameWon = false;

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;

      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50);
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)"
    );
    createPlatform(-50, -50, 50, canvas.height + 500);
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(100, 620, 220, 20);
    createPlatform(400, 500, 160, 20);
    createPlatform(620, 420, 25, 200);
    createPlatform(700, 570, 160, 20);
    createPlatform(900, 430, 170, 20);
    createPlatform(1120, 300, 150, 20);
    createPlatform(1190, 180, 120, 20);
    createPlatform(1280, 110, 70, 60, "red");


    // TODO 3 - Create Collectables

    createCollectable("diamond", 450, 460, 0, 0);
    createCollectable("steve", 760, 530, 0, 0);
    createCollectable("max", 950, 390, 0, 0);
    createCollectable("grace", 1160, 260, 0, 0);
    createCollectable("kennedi", 1220, 140, 0, 0);


    // TODO 4 - Create Cannons

    createCannon("left", 250, 3000);
    createCannon("right", 450, 2300);
    createCannon("top", 700, 3500);
    createCannon("bottom", 1050, 2700);


    function checkRedGoal() {

      // Horizontal overlap with the red square
      let touchingX =
        player.x + hitBoxWidth >= 1280 &&
        player.x <= 1350;

      let touchingY =
        player.y + hitBoxHeight >= 110 &&
        player.y <= 170;

      if (touchingX && touchingY) {
        player.winConditionMet = true;
      }
    }
    setInterval(checkRedGoal, 20);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});