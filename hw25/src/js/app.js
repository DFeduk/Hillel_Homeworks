import $ from "jquery";
import "../css/style.css";
import "../css/bootstrap.css";
import Controller from "./controller/Controller";

$(() => {
  new Controller($(".container"));
});
