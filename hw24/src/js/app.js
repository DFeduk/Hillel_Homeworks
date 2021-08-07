import $ from "jquery";
import "../css/app.css";
import "./all.js";
import "./materialize.js";
import TodosController from "./controller/TodosController.js";

$(() => {
  new TodosController($(`.card`));
});
