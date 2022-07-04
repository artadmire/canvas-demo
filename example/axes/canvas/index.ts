import Canvas from 'common/canvas';
import Grid from './grid';
import Axes, { AxesData } from './axes';
import browser from 'common/browser';
import { random, windowToCanvas, throttle } from 'common/util';

class AxesCanvas extends Canvas {
  ctx: CanvasRenderingContext2D | any;
  grid: Grid;
  axes: Axes;
  data: AxesData[];
  constructor() {
    super();
    this.ctx = this.getContext('2d');
    this.initData();
    this.bindMouseEvent();
  }

  /* 初始化随机数据 */
  initData() {
    let rangeX = [0, 100];
    let rangeY = [0, 100];
    let count = 10;
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: random(rangeX[0], rangeX[1]),
        y: random(rangeY[0], rangeY[1]),
      });
    }
    this.data = data;
  }

  /* 绑定鼠标移动事件 */
  bindMouseEvent() {
    let { el } = this;
    el.addEventListener(browser.mobile ? 'touchmove' : 'mousemove', throttle(this.drawGuide.bind(this), 100), false);
  }

  /* 绘制提示线 */
  drawGuide(e: MouseEvent | TouchEvent) {
    let x;
    let y;
    let { el } = this;
    e.preventDefault();
    if (browser.pc) {
      e = e as MouseEvent;
      x = e.x;
      y = e.y;
    } else {
      x = (e as TouchEvent).changedTouches[0].pageX;
      y = (e as TouchEvent).changedTouches[0].pageY;
    }
    let canvasPoint = windowToCanvas(el, x, y);
    this.axes.drawGuide(canvasPoint.x, canvasPoint.y);
  }

  /* 渲染 */
  render(container: HTMLElement) {
    super.render(container);
    // this.grid = new Grid(this.ctx);
    this.axes = new Axes(this.ctx, this.data);
    // this.grid.render();
    this.axes.render();
  }
}

export default AxesCanvas;
