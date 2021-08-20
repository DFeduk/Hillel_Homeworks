import $ from "jquery";
import "../css/style.css";

const URL = `ws://fep-app.herokuapp.com/`;

const $sizeEl = $("#size");
const $colorEl = $("#color");
const $menu = $(`#menu`);
const $body = $(`body`);
let socket = null;

const myBall = {
  id: Date.now(),
  color: $colorEl.val(),
  size: $sizeEl.val(),
  x: 150,
  y: 150,
};

function init() {
  socket = new WebSocket(URL);

  socket.onopen = () => {
    send({
      type: "add",
      payload: myBall,
    });
  };

  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.type === `add`) {
      onLoad(data);
    } else {
      update(data);
    }
  };

  socket.onclose = () => {
    init();
    console.log(`closed`);
  };

  socket.onerror = (err) => {
    alert(`disconected`);
  };
}
function send(msg) {
  if (socket.readyState == WebSocket.OPEN) {
    socket.send(JSON.stringify(msg));
  }
}
init();

function onLoad({ payload }) {
  let $ball = $("<div></div>");
  $ball.addClass(`ball-item`);
  $ball.attr("id", payload.id);
  $ball.css({
    top: payload.y,
    left: payload.x,
    height: payload.size,
    width: payload.size,
    background: payload.color,
  });
  $body.append($ball);
}
function update({ payload }) {
  let $ball = $(`#${payload.id}`);
  $ball.css({
    left: payload.left - parseInt(payload.size) / 2,
    top: payload.top - parseInt(payload.size) / 2,
    background: payload.color,
    height: payload.size,
    width: payload.size,
  });
}

$body.on(`mousedown`, `#${myBall.id}`, onMouseDown);

function onMouseDown() {
  $body.on(`mousemove`, `#${myBall.id}`, onMouseMove);
  $body.on(`mouseup`, `#${myBall.id}`, onMouseUp);
}
function onMouseUp(e) {
  $body.off(`mousemove`, `#${myBall.id}`, onMouseMove);
  $body.off(`mouseup`, `#${myBall.id}`, onMouseUp);
}
function onMouseMove(e) {
  let left = e.pageX;
  let top = e.pageY;
  let id = $(e.target).attr("id");
  let color = $(e.target).css(`background`);
  let size = $(e.target).css(`width`);
  send({
    type: "update",
    payload: { id: id, top, left, size, color },
  });
}
$menu.on(`change`, changeBallParams);
function changeBallParams() {
  let $ball = $(`#${myBall.id}`);
  $ball.css({
    background: $colorEl.val(),
    width: $sizeEl.val(),
    height: $sizeEl.val(),
  });
  // $ball.css(`width`, $sizeEl.val());
  // $ball.css(`height`, $sizeEl.val());
}
