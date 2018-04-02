<?php
return [
    'token' => appEnv('APP_TOKEN', 'R4Kuxfti0vSwNNA3602tEP70Cf6E1P'),
    'auth' => [
        'user' => appEnv('AUTH_USER', 'straw2018admin'),
        'password' => appEnv('AUTH_PASSWORD', 'gpK2p75cw3Y6q')
    ],
    'debuggable' => appEnv('APP_DEBUGGABLE', false),
    'campaign_ended' => '2018-04-20 00:00:00',
    'aws' => [
        'AWS_ACCESS_KEY_ID' => env('AWS_ACCESS_KEY_ID', 'secret'),
        'AWS_SECRET_ACCESS_KEY' => env('AWS_SECRET_ACCESS_KEY', 'secret'),
        'AWS_DEFAULT_REGION' => env('AWS_DEFAULT_REGION', 'ap-northeast-1'),
        'AWS_BUCKET' => env('AWS_BUCKET', ''),
        'AWS_ROOT_PATH' => env('AWS_ROOT_PATH', 'campaign/memory-battle'),
    ],
    'score_s3_sub_path' => ''
];
