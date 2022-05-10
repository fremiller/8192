"use strict"; //https://love2dev.com/blog/javascript-strict-mode/

( function () {

  // Wait till the browser is ready to render the game (avoids glitches)
  window.requestAnimationFrame( function () {
    new GameManager( 4, KeyboardInputManager, HTMLActuator, LocalStorageManager );
  } );

  // addToHomescreen( {
  //   autostart: true,
  //   autoHide: 0,
  //   logging: true,
  //   minSessions: 2,
  //   onShow: function () {
  //     console.log( "showing" );
  //   },
  //   onInit: function () {
  //     console.log( "initializing" );
  //   },
  //   onAdd: function () {
  //     console.log( "adding" );
  //   },
  //   onInstall: function () {
  //     console.log( "Installing" );
  //   },
  //   onCancel: function () {
  //     console.log( "Cancelling" );
  //   },
  //   displayNextPrime: true,
  //   customCriteria: true,
  //   displayPace: 0,
  //   customPrompt: {
  //     src: "meta/icon-48x48.png"
  //   }
  // } );

} )();