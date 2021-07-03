// Одежда: майка -> футболка -> рубашка
function Undershirt() {
  this.color = "white";
  this.size = "L";
  Object.defineProperty(this, "canBeWashed", {
    get: function () {
      return true;
    },
  });
}

function Tshirt() {
  this.color = "red";
  this.brand = "Nike";
  this.print = "Swoosh";
}
Tshirt.prototype = new Undershirt();

function Shirt() {
  this.color = "black";
  this.brand = "Marks & Spencer";
  this.collar = "classic";
  this.cuffinks = true;
}
Shirt.prototype = new Tshirt();

const nikeTshirt = new Tshirt();
const blackShirt = new Shirt();
