$(function () {
  $(".international").click(function () {
    $(this).css({
      color: "white",
      borderBottom: "6px solid #c65142",
    });

    $(".domestic").css({
      color: "rgba(255, 255, 255, .8)",
      borderBottom: "none",
    });
  });

  $(".domestic").click(function () {
    $(this).css({
      color: "white",
      borderBottom: "6px solid #c65142",
    });

    $(".international").css({
      color: "rgba(255, 255, 255, .8)",
      borderBottom: "none",
    });
  });

  $(".men, .m").click(function () {
    $(".men").css({
      backgroundColor: "#c65142",
    });

    $(".m").css({ color: "White" });
    $(".w").css({ color: "black" });

    $(".women").css({
      backgroundColor: "transparent",
    });
  });

  $(".women, .w").click(function () {
    $(".women").css({
      backgroundColor: "#c65142",
    });

    $(".m").css({ color: "black" });
    $(".w").css({ color: "white" });

    $(".men").css({
      backgroundColor: "transparent",
    });
  });

  $(".videos").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".fixtures,.results,.news,.players,.ranking,.stats,.sat, .archive").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });

  $(".fixtures").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.results,.news,.players,.ranking,.stats,.sat, .archive").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });

  $(".results").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.fixtures,.news,.players,.ranking,.stats,.sat, .archive").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });

  $(".news").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.results,.fixtures,.players,.ranking,.stats,.sat, .archive").css(
      { background: "none", color: "rgba(0, 0, 0, .5)" }
    );
  });

  $(".players").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.results,.news,.fixtures,.ranking,.stats,.sat, .archive").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });

  $(".ranking").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.results,.news,.players,.fixtures,.stats,.sat, .archive").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });

  $(".stats").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.results,.news,.players,.ranking,.fixtures,.sat, .archive").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });

  $(".sat").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(
      ".videos,.results,.news,.players,.ranking,.stats,.fixtures, .archive"
    ).css({ background: "none", color: "rgba(0, 0, 0, .5)" });
  });

  $(".archive").click(function () {
    $(this).css({
      background:
        "linear-gradient(180deg, rgba(240, 216, 213, 0) 0%, rgb(240, 216, 213) 100%)",
      color: "#c65142",
    });

    $(".videos,.results,.news,.players,.ranking,.stats,.sat, .fixtures").css({
      background: "none",
      color: "rgba(0, 0, 0, .5)",
    });
  });
});
