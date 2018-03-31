<?php

$app->error(function (\Exception $error) use ($app) {
  $code = $error instanceof \CustomException ? $error->getStatusCode() : 500;
  $app->response->setStatusCode($code);
  return $app->response->setJsonContent((object)[]);
});
