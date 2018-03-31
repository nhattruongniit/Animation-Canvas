<?php

class CustomException extends Exception {

  private $statusCode;

  public function __construct(int $statusCode) {
    $this->statusCode = $statusCode;
  }

  public function getStatusCode(): int {
    return $this->statusCode;
  }
}
