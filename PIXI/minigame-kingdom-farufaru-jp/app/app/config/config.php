<?php
/*
 * Modified: prepend directory path of current file, because of this file own different ENV under between Apache and command line.
 * NOTE: please remove this comment.
 */
defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');

// enviroment
if (!defined('STAGE')) {
  define('STAGE_LOCAL', 'local');
  define('STAGE_SANDBOX', 'sandbox');
  define('STAGE_DEV', 'development');
  define('STAGE_PROD', 'production');
  if (in_array(getenv('STAGE'), [STAGE_LOCAL, STAGE_SANDBOX, STAGE_DEV, STAGE_PROD])) {
    define('STAGE', getenv('STAGE'));
  } else {
    throw new \Exception('undefined enviroment');
  }
}

if (isset($_GET['now']) && $now = strtotime($_GET['now'])) {
  setcookie('now', $now, time() + 99999, '/');
  $_COOKIE['now'] = $now;
}

$now = time();
if (STAGE != STAGE_PROD && isset($_COOKIE['now']) && $dummyNow = $_COOKIE['now']) {
  $now = $dummyNow;
}

$isFever = false;
if ($now >= strtotime('2017-07-27 1500')) {
  $isFever = true;
}

$isClose = false;
if ($now >= strtotime('2017-07-30 1459')) {
  $isClose = true;
}

$stages = ['2X3aJhew', 'aJ2CDBqV', 'eT7p6uF9', 'W7wUbGj9'];
if ($isFever) {
  $stages = ['X9yWwtYK', '2X3aJhew', 'aJ2CDBqV', 'eT7p6uF9', 'W7wUbGj9'];
}

if (STAGE != STAGE_PROD) {
  $domain = 'dev-faru.kingdom-eiyunokeifu.com';
} else {
  $domain = 'faru.kingdom-eiyunokeifu.com';
}

return new \Phalcon\Config([
    'database' => require APP_PATH . '/config/database/' . STAGE . '.php',
    'stages' => $stages,
    'domain' => $domain,
    'isFever' => $isFever,
    'isClose' => $isClose,
    'application' => [
        'modelsDir'      => APP_PATH . '/models/',
        'migrationsDir'  => APP_PATH . '/migrations/',
        'viewsDir'       => APP_PATH . '/views/',
        'librariesDir'   => APP_PATH . '/libraries/',
        'routesDir'      => APP_PATH . '/routes',
        'tasksDir'       => APP_PATH . '/tasks',
        'mysqlsDir'      => APP_PATH . '/mysqls',
        'schemasDir'     => APP_PATH . '/schemas',
        'composerDir'    => APP_PATH . '/vendor',
        'logsDir'        => '/var/log/php',
    ]
]);
