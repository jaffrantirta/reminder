<?php
define('HOSTNAME', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', 'KeP=[LKWBQ>gh4qn');
define('DB_SELECT', 'qrtaxclub');

$koneksi = new mysqli(HOSTNAME, USERNAME, PASSWORD, DB_SELECT) or die (mysqli_errno());

$query = "UPDATE driver SET performa_driver = '100';";

$exeinsert = mysqli_query($koneksi, $query);

if($exeinsert){
		$response['status']="berhasil";
	}else{
		$response['status']="gagal";
	}

	echo json_encode($response);

 ?>