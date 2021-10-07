import "./style/index.less"
// console.log("asdasdasd");
import Food from "./modules/Food/Food"
import secrepanel from "./modules/secrepanel/secrepanel"
import gamecontral from "./modules/gamecontral/gamecontral"
const food=new Food
console.log(food.X,food.Y);
// food.change()
// // 定义记分牌
new gamecontral()
// const secrepanels = new secrepanel(20, 200)
// for (let i = 0; i < 300; i++) {
//     secrepanels.add()
// }