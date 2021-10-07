import Food from "../Food/Food";
import secrepanel from "../secrepanel/secrepanel";
import snake from "../snake/snake"
class gamecontral {
    food: Food
    secrepanel: secrepanel
    snake: snake
    //创建一个属性来保存键盘事件
    direction: string = 's'
    // 设置蛇是否存活
    isLive: boolean = true;
    constructor() {
        this.food = new Food()
        this.secrepanel = new secrepanel(20, 200)
        this.snake = new snake()
        this.init()
        this.run()
    }
    init() {
        //bind改变this指向
        document.addEventListener('keydown', this.keydowns.bind(this))
    }
    keydowns(event: KeyboardEvent) {
        this.direction = event.key
    }
    //定义蛇迟到食物的方法
    eat(x:number,y:number){
        if(x===this.food.X&&y===this.food.Y){
       //重新定义食物的位置
       this.food.change(this.snake.body)
       //分数增加、
       this.secrepanel.add()
       //蛇的身体张一节
       this.snake.addbody()
        }
    }
    //让蛇移动
    run() {
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case "a":
                x -= 10
                break;
            case "d":
                x += 10
                break;
            case "w":
                y -= 10
                break;
            case "s":
                y += 10
                break;
        }
        //把充值的x和y传给eat函数
        this.eat(x,y)
        //捕获snake里面抛出的异常
        
        try {
            this.snake.X = x
            this.snake.Y = y
        } catch (error) {
            alert(error.message)
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 200 - (this.secrepanel.level - 1) * 30)

        // setTimeout(() => {
        //     this.run.bind(this)
        // }, 300);
    }


}
export default gamecontral