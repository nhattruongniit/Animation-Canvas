<?php

error_reporting(E_ALL);

define('BASE_PATH', dirname(__DIR__));
define('APP_PATH', BASE_PATH . '/app');

try {

  $di = new Phalcon\Di\FactoryDefault\Cli();

  /**
  * Include Services
  */
  include APP_PATH . '/config/services.php';

  /**
  * Get config service for use in inline setup below
  */
  $config = $di->getConfig();

  /**
  * Include Autoloader
  */
  include APP_PATH . '/config/loader.php';

  $app = new Phalcon\Cli\Console($di);

  foreach ($app->utils->rglob($config->application->tasksDir) as $file) {
    include $file;
  }

  /**
   * Process the console arguments
   */
  $arguments = [];

  foreach ($argv as $k => $arg) {
      if ($k == 1) {
          $arguments['task'] = $arg;
      } elseif ($k == 2) {
          $arguments['action'] = $arg;
      } elseif ($k >= 3) {
          $arguments['params'][] = $arg;
      }
  }

  /**
   * Handle
   */
  $app->handle($arguments);

  echo PHP_EOL;
} catch (\Exception $e) {
  echo $e->getMessage() . PHP_EOL;
  echo $e->getTraceAsString() . PHP_EOL;
  exit(255);
}
