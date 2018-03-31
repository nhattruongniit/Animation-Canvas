<?php

use Phalcon\Mvc\View\Simple as View;
use Phalcon\Mvc\Url as UrlResolver;

/**
 * Shared configuration service
 */
$di->setShared('config', function () {
    return include APP_PATH . "/config/config.php";
});

/**
 * Sets the view component
 */
$di->setShared('view', function () {
    $config = $this->getConfig();

    $view = new View();
    $view->setViewsDir($config->application->viewsDir);
    return $view;
});

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->setShared('url', function () {
    $config = $this->getConfig();

    $url = new UrlResolver();
    $url->setBaseUri('');
    return $url;
});

/**
 * Database connection is created based in the parameters defined in the configuration file
 */
$di->setShared('db', function () {
    $config = $this->getConfig();

    $class = 'Phalcon\Db\Adapter\Pdo\\' . $config->database->adapter;
    $params = [
        'host'     => $config->database->host,
        'username' => $config->database->username,
        'password' => $config->database->password,
        'dbname'   => $config->database->dbname,
        'charset'  => $config->database->charset
    ];

    $connection = new $class($params);
    $connection->setEventsManager($this->getEventsManager());
    return $connection;
});

$di->setShared('utils', function () {
  return new Utils();
});

$di->setShared('request', function () {
  return new Request();
});

$di->setShared('uriTemplate', function () {
  return new \Rize\UriTemplate();
});

$di->setShared('jsonValidator', function () {
  return new \JsonSchema\Validator();
});

$di->setShared('eventsHandler', function () {
  return new EventsHandler();
});

$di->setShared('eventsManager', function() {
  $eventsHander = $this->getEventsHandler();
  $manager = new \Phalcon\Events\Manager();

  $manager->attach('micro:beforeExecuteRoute', $eventsHander);
  $manager->attach('micro:beforeException', $eventsHander);
  $manager->attach('micro:beforeNotFound', $eventsHander);

  return $manager;
});

$di->setShared('logger', function() {
  $config = $this->getConfig();
  $logger = new \Phalcon\Logger\Adapter\File($config->application->logsDir . '/app.log');
  $logger->setFormatter(new \Phalcon\Logger\Formatter\Json());
  return $logger;
});

$di->setShared('crypt', function() {
  $crypt = new \Phalcon\Crypt();
  $crypt->setCipher('aes-256-ecb');
  return $crypt;
});
