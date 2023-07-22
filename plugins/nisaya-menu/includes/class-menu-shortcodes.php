<?php
// addresses issue #3
function nisaya_shortcode(){
	return '<div id="root">There will be a menu here!</div>';
}

add_shortcode('nisaya_menu', 'nisaya_shortcode');

