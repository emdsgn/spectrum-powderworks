var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$placeholder.html('<img src="http://placehold.it/100x100" alt="">');
/*
	.get() returns the native Javascript element for us to access
	When using jQuery we don't have access to the original HTML
	elements directly, we are using juery to manipulate them.

	Example:
	$dialog.show() - Will call jQuery's 'show()' function
	$dialog.get(0).show() - Will call Javascript's native 'show()' function
*/

	$dialog.get(0).showModal();
	// show() -> allows multiple dialogs
	// showModal() -> single dialog, with no user interaction behind
});


$('#btn-close').on('click', function () {
	$dialog.get(0).close();
	$placeholder.html('');
});
