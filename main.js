function main(){
  var list1 = [$('#cover'), $('#doggies'), $('#pictures'), $('#resume'), $('#whatscooking')];
  var list2 = ['#liHome', '#liDoggies', '#liPictures', '#liResume', '#liWhatscooking'];

  var $text1 = "Blank page";
  var $lastClick = "Home";

  var navNAColor = "#000";
  var navActiveColor = "#F48942";
  var navNAFontSize = "16px";
  var navActiveFontSize = "20px";
  var navNAFontWeight = "300px";
  var navActiveFontWeight = "500px";

  var indexCurrent = 0;
  var indexLast = 0;

  $(list1[1]).hide();
  $(list1[2]).hide();
  $(list1[3]).hide();
  $(list1[4]).hide();
  $(list2[0]).css("color", navActiveColor);
  $(list2[0]).css("font-size", navActiveFontSize);
  $(list2[0]).css("font-weight", navActiveFontWeight);

  $('.navigation').on('click', function() {

  $text1 = $(event.target).text();

  switch ($text1) {
  case 'Home': indexCurrent = 0; break;
  case 'Pinky and Lucy':  indexCurrent = 1; break;
  case 'Pictures':  indexCurrent = 2; break;
  case 'Resume':  indexCurrent = 3; break;
  case 'What\'s cooking':  indexCurrent = 4; break;
  default:  indexCurrent = 99; break;  }

  if (indexCurrent < 99) {
    switch ($lastClick) {
      case 'Home': indexLast = 0; break;
      case 'Pinky and Lucy':  indexLast = 1; break;
      case 'Pictures':  indexLast = 2; break;
      case 'Resume':  indexLast = 3; break;
      case 'What\'s cooking':  indexLast = 4; break;
      default:  indexLast = 99; break;  }

    $(list1[indexLast]).hide();
    $(list2[indexLast]).css("color", navNAColor);
    $(list2[indexLast]).css("font-size", navNAFontSize);
    $(list2[indexLast]).css("font-weight", navNAFontWeight);

    $lastClick = $text1;
  }

  if ( indexCurrent < 99) {

  switch (indexCurrent) {
    case 4: //whatscooking
         $(list1[indexCurrent]).css("background", "#F2F07B");
         break;
    default:
         break;
    }

    $(list1[indexCurrent]).show();
    $(list2[indexCurrent]).css("color", navActiveColor);
    $(list2[indexCurrent]).css("font-size", navActiveFontSize);
    $(list2[indexCurrent]).css("font-weight", navActiveFontWeight);
  }

});  // end of onClick function
  
} 

$(document).ready(main);