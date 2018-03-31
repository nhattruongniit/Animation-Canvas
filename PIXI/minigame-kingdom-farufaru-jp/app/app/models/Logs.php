<?php

class Logs extends \Phalcon\Mvc\Model {

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
     * @var string
     * @Column(type="string", length=190, nullable=false)
     */
    public $uri;

    /**
     *
     * @var string
     * @Column(type="string", length=190, nullable=false)
     */
    public $method;

    /**
     *
     * @var string
     * @Column(type="string", length=190, nullable=false)
     */
    public $ip;

    /**
     *
     * @var integer
     * @Primary
     * @Column(type="integer", length=10, nullable=false)
     */
    public $created_at;

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
        return 'logs';
    }

    public function beforeValidationOnCreate() {
      $this->created_at = time();
    }
}
