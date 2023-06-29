<?php

if($_SERVER["REQUEST_METHOD"] === "GET"){
	if($_GET["currency"] === "now"){
		$data = file_get_contents('https://api.privatban');
		$data_raw = json_decode($data, TRUE);

		print_r(json_encode($data_raw));
	}
}