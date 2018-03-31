<?php

class Request extends \Phalcon\Http\Request {

  public function __construct() {
  }

  public function getBody(): stdClass {
    $body = null;
    if ($this->isGet()) {
      $body = json_decode(rawurldecode($this->getQuery('body')));
    } else if ($this->isPost() || $this->isPut() || $this->isDelete()) {
      if (preg_match('/application\/json/', $this->getContentType())) {
        $body = $this->getJsonRawBody();
      }
    }

    return $body ?? (object)[];
  }

  // Request 内容から schema の path を返す
  public function getSchemaPath(): string {
    $di = $this->getDI();
    $config = $di->getConfig();

    // json の パス作成
    $uriTemplate = $di->getUriTemplate();
    return $uriTemplate->expand('{+schemasDir}{+uri}/{+method}.json', [
      'schemasDir' => $config->application->schemasDir,
      'uri' => $di->getRouter()->getRewriteUri(),
      'method' => strtolower($this->getMethod()),
    ]);
  }

  public function log(): void {
    $di = $this->getDI();

    $log = new Logs([
      'uri' => $di->getRouter()->getRewriteUri(),
      'method' => strtolower($this->getMethod()),
      'ip' => $_SERVER['HTTP_X_FORWARDED_FOR'],
    ]);

    if (!$log->create()) {
      throw new CustomException(CustomExceptionTypes::unknown);
    }
  }

  public function checkBody(): void {
    $path = $this->getSchemaPath();
    if (!file_exists($path)) {
      throw new CustomException(CustomExceptionTypes::notFound);
    }

    $di = $this->getDI();

    // validator
    $data = $this->getBody();
    $validator = $di->getJsonValidator();
    $validator->validate($data, (object)['$ref' => 'file://' . $path]);
    if (!$validator->isValid()) {
      // print_r($validator->getErrors());

      throw new CustomException(CustomExceptionTypes::badRequest);
    }
  }

  public function checkLimit(): void {
    $path = $this->getSchemaPath();
    if (!file_exists($path)) {
      throw new CustomException(CustomExceptionTypes::notFound);
    }

    $schema = json_decode(file_get_contents($path));
    $limit = $schema->limit ?? null;
    // no limit data
    if (!$limit || !is_int($limit)) {
      throw new CustomException(CustomExceptionTypes::notFound);
    }

    // no limit = -1
    if ($limit < 0) {
      return;
    }

    $count = Logs::count([
      'conditions' => 'uri = :uri: AND method = :method: AND ip = :ip: AND created_at > :created_at:',
      'bind' => [
        'uri' => $this->getURI(),
        'method' => strtolower($this->getMethod()),
        'ip' => $_SERVER['HTTP_X_FORWARDED_FOR'],
        'created_at' => time() - (60 * 60)
      ],
    ]);

    if ($count > $limit) {
      throw new CustomException(CustomExceptionTypes::tooManyRequests);
    }
  }
}
