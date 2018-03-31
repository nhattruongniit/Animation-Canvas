<?php

$app->get($app->url->get('/point'), function () {
  return $this->response->setJsonContent(Points::getTotalPoints());
});
