<?php

class EventsHandler {

  public function beforeExecuteRoute(\Phalcon\Events\Event $event, \Phalcon\Mvc\Micro $app) {
    $app->request->checkBody();
    if (strtolower($app->request->getMethod()) != 'get') {
      $whiteLists = [
        '192.168.34.1',
        '27.131.11.254',
        '27.131.11.251',
        '172.16.0.191',
        '172.16.4.224',
      ];

      if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !in_array($_SERVER['HTTP_X_FORWARDED_FOR'], $whiteLists)) {
        $app->request->log();
        $app->request->checkLimit();
      }
    }
  }

  public function beforeNotFound(\Phalcon\Events\Event $event, \Phalcon\Mvc\Micro $app) {
    throw new CustomException(CustomExceptionTypes::notFound);
  }

  public function beforeException(\Phalcon\Events\Event $event, \Phalcon\Mvc\Micro $app, \Exception $exception) {
    $data = [
      'code' => 500,
      'file' => $exception->getFile(),
      'line' => $exception->getLine(),
      'message' => $exception->getMessage(),
    ];

    if ($exception instanceof \CustomException) {
      $data['code'] = $exception->getStatusCode();
    }

    $data['request'] = [
      'uri' => $app->request->getURI(),
      'method' => $app->request->getMethod(),
    ];

    $message = json_encode($data, JSON_UNESCAPED_SLASHES);
    $app->logger->error($message);
  }
}
