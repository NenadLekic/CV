/*
Jquery je open source JavaScript library i može se preuzeti sa jquery.com.
*/

$(document).ready(function() {

          $('#obr').on('click', function() {
            $('#obrazovanje').toggle();
            $('#iskustvo, #sposobnosti, #profil').hide();
            $('#1').toggleClass('active');
            $('#2, #3, #4').removeClass('active');
          })
          $('#isk').on('click', function() {
            $('#iskustvo').toggle();
            $('#obrazovanje, #sposobnosti, #profil').hide();
            $('#2').toggleClass('active');
            $('#1, #3, #4').removeClass('active');
          })
          $('#spo').on('click', function() {
            $('#sposobnosti').toggle();
            $('#obrazovanje, #iskustvo, #profil').hide();
            $('#3').toggleClass('active');
            $('#1, #2, #4').removeClass('active');
          }) 
            $('#pro').on('click', function() {
            $('#profil').toggle();
            $('#obrazovanje, #iskustvo, #sposobnosti').hide();
            $('#4').toggleClass('active');
            $('#1, #2, #3').removeClass('active');
          })

});  




    




   

