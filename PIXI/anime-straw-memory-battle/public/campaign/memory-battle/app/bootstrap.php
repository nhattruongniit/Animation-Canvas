<?php
date_default_timezone_set('Asia/Tokyo');
define('APP_DIR', __DIR__);

require 'vendor/autoload.php';
require 'functions.php';


/*
| Config environment
|--------------------------------------------------------------------------
*/

define('DEBUGGABLE', config('debuggable', false));

if (DEBUGGABLE) {
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
} else {
    ini_set('error_reporting', E_ALL ^ E_NOTICE);
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
}


/*
| Set current time
|--------------------------------------------------------------------------
*/

if (DEBUGGABLE && isset($_GET['time'])) {
    define('CURRENT_TIME', strtotime($_GET['time']));
} else {
    define('CURRENT_TIME', time());
}

/*
| Boot others
|--------------------------------------------------------------------------
*/

define('CAMPAIGN_ENDED', CURRENT_TIME >= strtotime(config('campaign_ended')));
