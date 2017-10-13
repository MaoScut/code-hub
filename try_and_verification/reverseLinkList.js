// 根据一个数组产生链表
// 头节点是没有数据的
// 最后一个节点的数据是数组的最后一个元素，且next属性为null
function LinkListFactory(data) {
  const head = {
    next: null,
  };
  let pointer = head;
  for (let i = 0; i < data.length; ++i) {
    const tmp = {
      value: data[i],
    };
    pointer.next = tmp;
    pointer = tmp;
  }
  pointer.next = null;
  return head;
}
// 遍历链表
function travel(head) {
  let pointer = head.next;
  while (pointer !== null) {
    console.log(pointer.value);
    pointer = pointer.next;
  }
}
// travel(head);
// 反转一个单链表
function reverseLinkList(head) {
  let before = null;
  let pointer = head.next;
  let after = null;
  while (pointer !== null) {
    after = pointer.next;
    pointer.next = before;
    before = pointer;
    pointer = after;
  }
  head.next = before;
}
const head = LinkListFactory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
reverseLinkList(head);
travel(head);
