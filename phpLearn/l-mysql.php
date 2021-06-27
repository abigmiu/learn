<?php
  $serverName = 'localhost';
  $username = "root";
  $password = "root";

  $conn = new mysqli($serverName, $username, $password);

  if ($conn -> connect_error) {
    die('连接失败'.$connect_error);
  }
  
  $sql = "CREATE DATABASE MYDB";

  if ($conn -> query($sql) === TRUE) {
    echo "connect databse success";
  } else {
    echo "create database ".$conn_error;
  }
  $conn->close();
?>