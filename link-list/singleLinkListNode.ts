/*
 * @Author: John Liu
 * @Date: 2020-08-11 21:00:58
 * @LastEditTime: 2020-08-11 21:06:27
 * @LastEditors: Please set LastEditors
 * @Description: Node of single linkList 
 * @FilePath: \typescript-data-structure\link-list\singleLinkListNode.ts
 */
class SingleLinkListNode<T> {
  value: T
  next: any
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export default SingleLinkListNode