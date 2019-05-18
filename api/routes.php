<?php
//Method - context - callback in Controller


new Route("GET", "/get-characters", 'getCharacters');
new Route("GET", "/get-character", 'getCharacter');
new Route("GET", "/get-characters-full", 'getCharactersFullInfo');
new Route("POST", "/login", 'login');
new Route("POST", "/relogin", 'relogin');
new Route("GET", "/protected", 'protected');


class Route {

     public $method;
     public $endpoint;
     public $callBack;

     function __construct($method, $endpoint, $callBack) {
          global $routeManager;
  
          $this->method = $method;
          $this->endpoint = $endpoint;
          $this->callBack = $callBack;

          array_push($routeManager->routes, $this);
     }

}


?>