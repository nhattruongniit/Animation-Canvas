<?php

class Points extends \Phalcon\Mvc\Model
{

    const ENCRYPT_ID_KEY = 'VmvT65jiwcBKVG97FExp8e97LxWCjjy7';

    /**
     *
     * @var integer
     * @Primary
     * @Identity
     * @Column(type="integer", length=20, nullable=false)
     */
    public $id;

    /**
     *
     * @var integer
     * @Column(type="integer", length=10, nullable=false)
     */
    public $stage_id;

    /**
     *
     * @var integer
     * @Column(type="integer", length=10, nullable=false)
     */
    public $point;

    /**
     *
     * @var integer
     * @Column(type="integer", length=10, nullable=false)
     */
    public $created_at;

    public function getEncryptId() {
      return $this->di->getCrypt()->encryptBase64($this->id, static::ENCRYPT_ID_KEY, true);
    }

    public function getRank() {
      $point = (int) $this->point;
      switch ($this->stage_id) {
        case '2X3aJhew':
          if ($point < 5000) {
            return 0;
          } else if ($point < 10000) {
            return 1;
          } else if ($point < 20000) {
            return 2;
          } else if ($point < 25000) {
            return 3;
          } else if ($point < 32000) {
            return 4;
          } else {
            return 5;
          }
          break;
        case 'aJ2CDBqV':
          if ($point < 10000) {
            return 0;
          } else if ($point < 30000) {
            return 1;
          } else if ($point < 50000) {
            return 2;
          } else if ($point < 80000) {
            return 3;
          } else if ($point < 120000) {
            return 4;
          } else {
            return 5;
          }
          break;
        case 'eT7p6uF9':
          if ($point < 100000) {
            return 0;
          } else if ($point < 130000) {
            return 1;
          } else if ($point < 140000) {
            return 2;
          } else if ($point < 150000) {
            return 3;
          } else if ($point < 160000) {
            return 4;
          } else {
            return 5;
          }
          break;
        case 'W7wUbGj9':
          if ($point < 100000) {
            return 0;
          } else if ($point < 130000) {
            return 1;
          } else if ($point < 160000) {
            return 2;
          } else if ($point < 200000) {
            return 3;
          } else if ($point < 260000) {
            return 4;
          } else {
            return 5;
          }
          break;

        case 'X9yWwtYK':
          if ($point < 200000) {
            return 0;
          } else if ($point < 300000) {
            return 1;
          } else if ($point < 400000) {
            return 2;
          } else if ($point < 450000) {
            return 3;
          } else if ($point < 500000) {
            return 4;
          } else {
            return 5;
          }
          break;
        default:
          return 0;
          break;
      }
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("kingdom");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'points';
    }

    public function beforeValidationOnCreate() {
      $this->created_at = time();
    }

    public function toArray($columns = null): array {
      return [
        'id' => $this->getEncryptId(),
        'stage_id' => $this->stage_id,
        'point' => $this->point,
        'rank' => $this->getRank(),
      ];
    }

    public static function findFirstByEncryptId(string $encryptId) {
      $di = \Phalcon\Di::getDefault();
      $id = $di->getCrypt()->decryptBase64($encryptId, static::ENCRYPT_ID_KEY, true);
      if (!$id) {
        return null;
      }

      return static::findFirstById($id);
    }

    public static function getTotalPoints(): array {
      $di = \Phalcon\Di::getDefault();

      $points = [];
      foreach ($di->getConfig()->stages as $stage) {
        $point = Points::sum([
          'column' => 'point',
          'conditions' => 'stage_id = :stage_id:',
          'bind' => [
            'stage_id' => $stage
          ],
        ]);

        $max = Points::maximum([
          'column' => 'point',
          'conditions' => 'stage_id = :stage_id:',
          'bind' => [
            'stage_id' => $stage
          ],
        ]);

        $points[$stage] = [
          'point' => (int) $point ?? 0,
          'max' => (int) $max ?? 0
        ];
      }

      return $points;
    }
}
