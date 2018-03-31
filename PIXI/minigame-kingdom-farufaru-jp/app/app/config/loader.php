<?php

require $config->application->composerDir . '/autoload.php';

/**
 * Registering an autoloader
 */
$loader = new \Phalcon\Loader();

$loader->registerDirs(
    [
        $config->application->modelsDir,
        $config->application->librariesDir,
    ]
)->register();
