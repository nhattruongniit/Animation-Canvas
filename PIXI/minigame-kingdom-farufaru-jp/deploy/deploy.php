<?php
namespace Deployer;

require 'recipe/common.php';
require 'recipe/rsync.php';

set('keep_releases', 3);
set('shared_dirs', [
  '.phalcon'
]);

set('release_name', function () {
  date_default_timezone_set('Asia/Tokyo');
  return date('Ymd-Hi');
});

set('rsync', [
    'exclude' => [
      '.phalcon',
      'assets',
      'script/vendor',
      '.DS_Store',
    ],
    'exclude-file' => false,
    'include' => [],
    'include-file' => false,
    'filter' => [],
    'filter-file' => false,
    'filter-perdir' => false,
    'flags' => 'rz',
    'options' => ['delete'],
    'timeout' => 300,
]);

set('rsync_src', realpath(__DIR__ . '/../app'));
set('rsync_dest', '{{release_path}}');

task('deploy:vendors', function () {
  run("cd {{release_path}}/app && ./composer.phar install");
  run("cd {{release_path}}/script && ./composer.phar install");
})->desc('Installing vendors');

host('54.92.88.76')
  ->user('ec2-user')
  ->stage('sandbox')
  ->set('deploy_path', '/var/www/app');

host('dev-kingdom-farufaru')
  ->identityFile('~/.ssh/kingdom-farufaru')
  ->stage('development')
  ->set('deploy_path', '/var/www/html/dev-faru.kingdom-eiyunokeifu.com');

host('prod-kingdom-farufaru-1')
  ->stage('production')
  ->set('deploy_path', '/var/www/html/faru.kingdom-eiyunokeifu.com');

host('prod-kingdom-farufaru-2')
  ->stage('production')
  ->set('deploy_path', '/var/www/html/faru.kingdom-eiyunokeifu.com');

task('mysql:migration', function () {
  $stage = input()->getArgument('stage');
  run("cd {{release_path}} && STAGE=$stage ./script/vendor/bin/phalcon.php migration run");
})->desc('Phalcon migration');

task('reload:php-fpm', function () {
    run('sudo service php-fpm restart');
});

task('deploy', [
    'deploy:prepare',
    'deploy:release',
    'rsync',
    'deploy:shared',
    'deploy:vendors',
    'mysql:migration',
    'deploy:symlink',
    'cleanup',
    'reload:php-fpm',
]);

// // Configuration
// set('keep_releases', 3);
// set('repository', 'git@github.com:OrderTokyo/order-account-admin.git');
// set('release_name', function () {
//   date_default_timezone_set('Asia/Tokyo');
//   return date('Ymd-Hi');
// });
//
// task('deploy:vendors', function () {
//   run("cd {{release_path}}/app && ./composer.phar install");
//   run("cd {{release_path}}/app/common-account && ./composer.phar install");
// })->desc('Installing vendors');
//
// task('mysql:migration', function () {
//     run("cd {{release_path}} && ./app/vendor/bin/phalcon.php migration run");
// })->desc('Phalcon migration');
//
// task('redis:clear', function () {
//     run("cd {{release_path}} && php ./script/index.php redis cacheClear --force");
// })->desc('cache clear on redis server');
//
// // Set Host
// host('52.68.13.217')
//   ->stage('development')
//   ->user('ec2-user')
//   ->port(22)
//   ->forwardAgent(true)
//   ->set('deploy_path', '/var/www/app')
//   ->set('branch', 'develop')
//   ->set('shared_dirs', [
//     '.phalcon'
//   ]);
//
// task('deploy', [
//     'deploy:prepare',
//     'deploy:lock',
//     'deploy:release',
//     'deploy:update_code',
//     'deploy:shared',
//     //'deploy:writable',
//     'deploy:vendors',
//     //'deploy:clear_paths',
//     'mysql:migration',
//     'redis:clear',
//     'deploy:symlink',
//     'deploy:unlock',
//     'cleanup',
//     'success'
// ]);
//
// // [Optional] if deploy fails automatically unlock.
// after('deploy:failed', 'deploy:unlock');
