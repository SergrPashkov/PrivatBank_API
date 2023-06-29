<?php

if($_SERVER["REQUEST_METHOD"] === "GET"){
	if($_GET["currency"] === "now"){
		$data = file_get_contents('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5$');
		$data_raw = json_decode($data, TRUE);

		print_r(json_encode($data_raw));
	}
}