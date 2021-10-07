class snake {
    //获取蛇的dom
    element: HTMLElement
    //获取蛇的头部
    head: HTMLElement
    //    获取蛇的身体  HTMLCollection时html元素的集合
    body: HTMLCollection
    constructor() {
        this.element = document.getElementById("snake")
        this.head = document.querySelector("#snake>div")
        this.body = document.getElementById("snake").getElementsByTagName('div') 
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        //如果当前位置和value一样则不做操作
        if (this.X === value) {
            return;
        }
        //捕获蛇撞墙
        if (value < 0 || value > 440) {
            //抛出异常
            throw new Error('蛇撞墙了,游戏结束')
        }
        if(this.body[1]&&(this.body[1] as HTMLElement).offsetLeft===value){
            if(value>this.X){
        //如果新的value也就是新的x坐标大于旧的x坐标=>想做移动不让他掉头，让x坐标-10
                value=this.X-10
            }else{
                value=this.X+10
            }
           
    }
        this.bodymove()
               this.head.style.left = value + 'px'
               this.headbody()
    }
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 390) {
            //抛出异常
            throw new Error('蛇撞墙了,游戏结束')
        }
        //判断是否有第二节然后是否做出了掉头举动
        //只要判断第二节是否和第一节的左边一样，一样则发生了掉头
        if(this.body[1]&&(this.body[1] as HTMLElement).offsetTop===value){
                if(value>this.Y){
            //如果新的value也就是新的x坐标大于旧的x坐标=>想做移动不让他掉头，让x坐标-10
                    value=this.Y-10
                }else{
                    value=this.Y+10
                }
               
        }
        this.bodymove()
        this.head.style.top = value + "px"
        this.headbody()
    }
    //迟到食物增加身体长度
    addbody() {
        //增加标签 第一个参数表示在那增加第二个表示增加的内容
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
    bodymove(){
        for(let i=this.body.length-1;i>0;i--){
            //获取前面一节蛇的身体
           let x=(this.body[i-1] as HTMLElement).offsetLeft;
           let y=(this.body[i-1] as HTMLElement).offsetTop;
           //将前面一节身体的位置赋值给下一节身体
           (this.body[i] as HTMLElement).style.left=x+'px';
           (this.body[i] as HTMLElement).style.top=y+'px'
        }
    }
    //检查蛇是否撞到自己
    headbody(){
      //遍历每一个身体
      for(let i=1;i<this.body.length;i++){
          let b=this.body[i] as HTMLElement
          //如果下一步的x和y和身体的哪一个坐标相对证明撞到自己了
          if(this.X===b.offsetLeft&&this.Y===b.offsetTop){
              //抛出异常
              throw Error("你撞到了自己，游戏结束")
          }
      }
    }
}
export default snake