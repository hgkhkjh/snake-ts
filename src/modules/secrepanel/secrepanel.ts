class secrepanel {
    score = 0;
    level = 1;
    //初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    levelmax: number;
    scoremax: number;
    constructor(levelmax: number, scoremax: number) {
        this.levelmax = levelmax
        this.scoremax = scoremax
        this.scoreEle = document.getElementById('scores')
        this.levelEle = document.getElementById('levels')
    }
    //提升等级
    up() {
        if (this.level < this.levelmax) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
    //增加分数
    add() {
        if (this.score < this.scoremax) {
            this.scoreEle.innerHTML = ++this.score + '';
            console.log(this.score % 10 == 0);
            if (this.score % 2 == 0) {
                this.up()
            }
        }
    }


}
export default secrepanel