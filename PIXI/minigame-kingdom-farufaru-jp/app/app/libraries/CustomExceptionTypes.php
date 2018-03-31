<?php

final class CustomExceptionTypes extends Enum {
  const badRequest = 400;
  const notFound = 404;
  const tooManyRequests = 429;
  const unknown = 500;
}
