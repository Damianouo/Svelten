import { tooltip } from "../state/tooltipState.svelte";

export function tooltipAction(node, content) {
  function handleMouseOver(event) {
    tooltip.show(content, event.clientX, event.clientY);
  }

  function handleMouseLeave() {
    tooltip.hide();
  }

  function handleMouseMove(event) {
    tooltip.move(event.clientX, event.clientY);
  }

  node.addEventListener("mouseover", handleMouseOver);
  node.addEventListener("mouseleave", handleMouseLeave);
  node.addEventListener("mousemove", handleMouseMove);

  return {
    update(newContent) {
      content = newContent;
    },
    destroy() {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseleave", handleMouseLeave);
      node.removeEventListener("mousemove", handleMouseMove);
    },
  };
}
