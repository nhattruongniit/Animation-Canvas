<?php

/**
 * Get config
 *
 * @param string [$name]
 * @param mixed   [$default=null]
 *
 * @return mixed|null
 */
function config($name = '', $default = null)
{
    static $config;

    if ( ! $config) {
        $config = require 'config.php';
    }

    if ( ! func_num_args()) {
        return $config;
    }

    if (array_key_exists($name, $config)) {
        return $config[$name];
    }

    return $default;
}

/**
 * @param string $name
 * @param mixed  [$default = null]
 *
 * @return mixed
 */
function env($name, $default = null)
{
    $value = getenv($name);

    return $value !== false ? $value : appEnv($name, $default);
}

/**
 * @param string $name
 * @param mixed  [$default = null]
 *
 * @return mixed
 */
function appEnv($name, $default = null)
{
    static $env;

    if ( ! is_array($env)) {
        $envFile = APP_DIR . '/env.php';

        if (file_exists($envFile)) {
            $env = (array)(require $envFile);
        } else {
            $env = [];
        }
    }

    if ( ! func_num_args()) {
        return $env;
    }

    if (array_key_exists($name, $env)) {
        return $env[$name];
    }

    return $default;
}

function getUpdateTime()
{
    static $updateTime;

    if ( ! $updateTime) {
        $updateTime = (new DateTime())->format('n/j H:i');
    }

    return $updateTime;
}

function require_auth()
{
    $auth = config('auth');
    $AUTH_USER = $auth['user'];
    $AUTH_PASS = $auth['password'];

    header('Cache-Control: no-cache, must-revalidate, max-age=0');

    $has_supplied_credentials = ! (empty($_SERVER['PHP_AUTH_USER']) && empty($_SERVER['PHP_AUTH_PW']));
    $is_not_authenticated = (
        ! $has_supplied_credentials ||
        $_SERVER['PHP_AUTH_USER'] != $AUTH_USER ||
        $_SERVER['PHP_AUTH_PW'] != $AUTH_PASS
    );
    if ($is_not_authenticated) {
        header('HTTP/1.1 401 Authorization Required');
        header('WWW-Authenticate: Basic realm="Access denied"');
        exit;
    }
}


/*
| AWS functions
|--------------------------------------------------------------------------
*/

/**
 * @return \Aws\Sdk
 */
function getAwsSDK()
{
    static $sdk;

    if ($sdk) {
        return $sdk;
    }

    $awsConfig = config('aws');

    $sdkArgs = [
        'credentials' => [
            'key' => $awsConfig['AWS_ACCESS_KEY_ID'],
            'secret' => $awsConfig['AWS_SECRET_ACCESS_KEY']
        ],
        'region' => $awsConfig['AWS_DEFAULT_REGION'],
        'version' => 'latest',
    ];
    $sdk = new Aws\Sdk($sdkArgs);

    return $sdk;
}

/**
 * @return \Aws\S3\S3Client
 */
function getAwsS3Client()
{
    static $s3Client;

    if ($s3Client) {
        return $s3Client;
    }

    $sdk = getAwsSDK();

    $s3Client = $sdk->createS3();

    return $s3Client;
}


