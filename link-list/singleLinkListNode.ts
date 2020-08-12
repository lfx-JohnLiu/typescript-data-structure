/*
 * @Author: John Liu
 * @Date: 2020-08-11 21:00:58
 * @LastEditTime: 2020-08-12 18:45:27
 * @LastEditors: Please set LastEditors
 * @Description: Node of single linkList 
 * @FilePath: \typescript-data-structure\link-list\singleLinkListNode.ts
 */
class SingleLinkListNode<T> {
  value: T | null
  next: SingleLinkListNode<T>
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export default SingleLinkListNode