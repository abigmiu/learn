<?php
    $x = 1;
    $y = 2;

    function add() {
        echo $GLOBALS['x'] + $GLOBALS['y'];
    }

    add();

    echo($_SERVER['REMOTE_ADDR']);
    echo($_SERVER['SCRIPT_URI']);
?>