<?php

class DbTask extends \Phalcon\Cli\Task {

    public function mainAction() {
        echo "DbTask main";
    }

    public function initAction() {
      $this->dropTables();
      $this->createTables();
    }

    public function dropTables() {
      if (STAGE != STAGE_LOCAL) { return; }

      $results = $this->db->query('SHOW TABLES');

      $this->db->begin();
      while ($result = $results->fetch()) {
        $this->db->execute("DROP TABLE `$result[0]`;");
      }
      $this->db->commit();
    }

    public function createTables() {
      if (STAGE != STAGE_LOCAL) { return; }

      $sqls = $this->utils->rglob($this->config->application->mysqlsDir, 'sql');
      $this->db->begin();
      foreach ($sqls as $sql) {
        $this->db->execute(file_get_contents($sql));
      }
      $this->db->commit();
    }

}
