import { tooltip } from "../store/tooltipStore";

export function tooltipAction(node, content) {
  function handleMouseOver(event) {
    // 當滑鼠移入時，顯示 tooltip 並傳入內容和事件物件
    tooltip.show(content, event);
  }

  function handleMouseLeave() {
    // 當滑鼠移出時，隱藏 tooltip
    tooltip.hide();
  }

  function handleMouseMove(event) {
    // 當滑鼠移動時，更新 tooltip 的位置
    tooltip.move(event);
  }

  // 為元素加上事件監聽
  node.addEventListener("mouseover", handleMouseOver);
  node.addEventListener("mouseleave", handleMouseLeave);
  node.addEventListener("mousemove", handleMouseMove);

  // 當 component 被銷毀時，清除事件監聽，避免 memory leak
  return {
    destroy() {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseleave", handleMouseLeave);
      node.removeEventListener("mousemove", handleMouseMove);
    },
    // 當傳入的 content 改變時，更新它
    update(newContent) {
      content = newContent;
    },
  };
}
