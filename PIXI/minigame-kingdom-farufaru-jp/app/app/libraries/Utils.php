<?php

class Utils {
  function rglob(string $dir, $ext = 'php'): array {
    $files = glob(rtrim($dir, '/') . '/*');
    $list = [];
    foreach($files as $file) {
      if (pathinfo($file, PATHINFO_EXTENSION) == $ext) {
        $list[] = $file;
      } else if (is_dir($file)) {
        $list = array_merge($list, $this->rglob($file, $ext));
      }
    }

    return $list;
  }
}
