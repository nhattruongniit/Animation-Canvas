<?php

$app->get($app->url->get('/'), function () {
  $config = [
    'stage' => STAGE,
    'stages' => $this->config->stages->toArray(),
    'domain' => $this->config->domain,
    'pointRate' => $this->config->isFever ? 2 : 1,
    'isFever' => $this->config->isFever,
    'isClose' => $this->config->isClose,
  ];

  if ($id = $this->request->getQuery('id')) {
    if ($record = Points::findFirstByEncryptId($id)) {
      $config['point'] = $record->toArray();
    }
  }

  $this->view->config = $config;
  echo $this->view->render('index/get');
});
