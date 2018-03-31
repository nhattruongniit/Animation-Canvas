<?php

$app->post($app->url->get('/point'), function () {
  if ($this->config->isClose) {
    throw new CustomException(CustomExceptionTypes::badRequest);
  }

  $body = $this->request->getBody();

  $record = new Points([
    'point' => $body->point,
    'stage_id' => $body->stage_id,
  ]);

  if (!$record->create()) {
    throw new CustomException(CustomExceptionTypes::unknown);
  }

  $response = [
    'points' => Points::getTotalPoints(),
    'point' => $record->toArray(),
  ];
  return $this->response->setJsonContent($response);
});
