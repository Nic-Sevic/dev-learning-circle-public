<?php
/**
 * Plugin Name:     Dish Menu Plugin
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     The plugin adds a dish menu page
 * Author:          NiSaYa
 * Author URI:      YOUR SITE HERE
 * Text Domain:     nisaya-menu
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Nisaya_Menu
 */


 defined( 'ABSPATH' ) or exit();

//include shortcodes
require_once __DIR__ . '/includes/class-menu-shortcodes.php';

// load react app on menu pages - addresses issue #5
function nisaya_load_react() {
	if (is_page('menu')){
		wp_register_script('nisaya-menu-js', plugins_url( "nisaya-menu/dist/main.js", dirname( __FILE__ ) ));
		wp_enqueue_script('nisaya-menu-js');
	}
}

add_action('wp_enqueue_scripts', 'nisaya_load_react');

//enqueue css
function nisaya_enqueue_styles() {
    wp_enqueue_style( 'nisaya-styles', plugins_url( 'nisaya-menu/src/components/nisaya-styles.css', dirname(__FILE__ )) );
}
add_action( 'wp_enqueue_scripts', 'nisaya_enqueue_styles' );

global $wpdb;

// creates table for menu items
$table_name = $wpdb->prefix.'nisaya_menu_items';
$table_exists = $wpdb->get_var("SHOW TABLES LIKE '$table_name'") === $table_name;
if (!$table_exists){
	$sql = "CREATE TABLE $table_name (
		id INT(11) NOT NULL AUTO_INCREMENT,
		image VARCHAR(255) NOT NULL,
		title VARCHAR(255) NOT NULL,
		price DECIMAL(10,2) NOT NULL,
		currencySymbol VARCHAR(10) NOT NULL,
		description TEXT NOT NULL,
		PRIMARY KEY (id)
		) $charset_collate;";

	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
	dbDelta($sql);
}

// functions to add api - satisfies #10
function nisaya_get_menu_items() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'nisaya_menu_items';
	$items = $wpdb->get_results( "SELECT * FROM $table_name" );
	return json_encode($items);
}

// registers the callback function - satisfies #10
function nisaya_register_route () {
	register_rest_route( 'nisaya/v1', '/menu', array(
		'methods' => 'GET',
		'callback' => 'nisaya_get_menu_items',
		'permission_callback' => '__return_true', // required by wordpress even if all users can trigger
	) );
}
add_action( 'rest_api_init', 'nisaya_register_route' );

// TODO - add a function for the admin to add menu items as well
// maybe a form in a settings page along with a CSV import option (can maybe look at how subscriber import or woo product import works for this)
