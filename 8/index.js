$(".filter-button").click(function () {
  let valuDataFilter = $(this).attr("data-filter");
  if (valuDataFilter === "all") {
    $(".filter").show(300);
  } else {
    $(".filter")
      .not("." + valuDataFilter)
      .hide(300);
    $(".filter")
      .filter("." + valuDataFilter)
      .show(300);
  }
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    $(this).addClass("active");
  }
});

// $(".filter-select").click(function () {
//   let valuDataFilter = $(this).attr("data-filter");
//   if (valuDataFilter === "semua") {
//     $(".diskon").show(300);
//   } else {
//     $(".diskon")
//       .not("." + valuDataFilter)
//       .hide(300);
//     $(".diskon")
//       .filter("." + valuDataFilter)
//       .show(300);
//   }
//   if ($(".filter-select").removeClass("active")) {
//     $(this).removeClass("active");
//     $(this).addClass("active");
//   }
// });
