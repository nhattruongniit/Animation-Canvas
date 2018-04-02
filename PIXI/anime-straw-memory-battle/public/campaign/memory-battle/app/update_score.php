<?php
require 'bootstrap.php';

if ( ! DEBUGGABLE) {
    require_auth();
}

$token = config('token');

if ( ! (isset($_GET['token']) && $_GET['token'] === $token)) {
    require '404.html';
    die(1);
}

if ( ! empty($_GET['score'])) {
    $score = $_GET['score'];

    if ( ! is_numeric($score)) {
        ?>
        <script>alert('Score must be an integer');</script>
        <?php

    } else {
        $scoreDetail = [
            'score' => $score,
            'updated_at' => getUpdateTime()
        ];

        $s3Client = getAwsS3Client();

        $awsConfig = config('aws');

        $result = $s3Client->putObject([
            'Bucket' => $awsConfig['AWS_BUCKET'],
            'Key' => $awsConfig['AWS_ROOT_PATH'] . '/score.json',
            'Body' => json_encode($scoreDetail),
            'ContentType' => 'application/json'
        ]);
        ?>
        <h1>New score updated: <span style="color: green"><?= $score ?></span></h1>
        <h2>Updated at: <span style="color: green"><?= getUpdateTime() ?></span></h2>
        <hr>
        <?php
    }
}
?>
<style>
    * {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        outline: none;
    }

    input {
        width: 300px;
        max-width: 100%;
        padding: 5px 10px;
        font-size: 1.2em;
        display: block;
    }

    input + input {
        margin-top: 10px;
    }

</style>
<h1>Update score</h1>
<form method="get">
    <input type="hidden" name="token" value="<?= $token ?>">
    <input type="number" name="score" placeholder="New Score" required>
    <br>
    <input type="submit" value="Update">
</form>
