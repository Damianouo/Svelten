class TooltipState {
  #visible = $state(false);
  #content = $state("");
  #x = $state(0);
  #y = $state(0);

  get visible() {
    return this.#visible;
  }

  get content() {
    return this.#content;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  show(content, x, y) {
    this.#visible = true;
    this.#content = content;
    this.#x = x;
    this.#y = y;
  }

  hide() {
    this.#visible = false;
    this.#content = "";
  }

  move(x, y) {
    this.#x = x;
    this.#y = y;
  }
}

export const tooltip = new TooltipState();
