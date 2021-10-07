class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        //获取food元素并将其值赋值给element
        this.element = document.getElementById('food');

    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop
    }
    change(body: HTMLCollection) {
        let top = Math.round(Math.random() * 39) * 10;
        let left = Math.round(Math.random() * 44) * 10;
        //防止食物出现在蛇身上
        let index: boolean = false
        //遍历蛇的身体判断蛇的每个身体的坐标是否和食物的坐标一样
        //如果一样就重新调用这个方法
        for (let i = 0; i < body.length; i++) {
            if (top === (body as any).offsetTop && left === (body as any).offsetLeft) {
                index = true
            }
        }
        if (index) {
            this.change(body)
        } else {
            this.element.style.left = left + 'px'
            this.element.style.top = top + 'px'
        }

    }
}
export default Food