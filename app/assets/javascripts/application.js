// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Playing with JQUERY

$(document).ready(function(){

  console.log('Document is ready');

  // Jquery Workout

  // 1. Print all the post titles in the console

  // 2. Print all the post categories

  // 3. Give all the avataras a 5px black border

  // 4. Make the edit title work
  //  It prompts a window asking for the new title
  //  On submit the title changes

  // 5. Destroy
  //  On click remove prompt a confirmation for the user.
  //  Are you sure?
  //  If the user confirms the post is removed. If not nothing happens


  // 6. Make the edit content work
  //  On click in the <p> the text content turns into a text area
  //  A button appears at the bottom that saves "save".
  //  On click in the button the textarea turns back to simple text

  // 7. Make the edit author work
  //  On click the author turns into a select field
  //  There are three available authors (Adrian, Amed and Ana)
  //  When the select changes the avatar changes as well
  //  On the side of the select field a link to save appears.
  //  If clicked the author turns back into a link

});