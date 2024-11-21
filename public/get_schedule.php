<?php

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
if($id) {
    $url = "https://kiroe.com.ua/electricity-blackout/websearch/v2/$id?ajax=1";
    if($response = file_get_contents($url)) {
        echo $response;
        exit;
    }
}

echo json_encode([]);
