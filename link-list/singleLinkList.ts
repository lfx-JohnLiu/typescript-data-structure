/*
 * @Author: John Liu
 * @Date: 2020-08-10 19:22:40
 * @LastEditTime: 2020-08-12 19:53:03
 * @Description: In User Settings Edit
 * @FilePath: \typescript-data-structure\link-list\main.ts
*/

import SingleLinkListNode from './singleLinkListNode'


interface LinkList<T> {
     head: SingleLinkListNode<T>,
     tail: SingleLinkListNode<T>,
     add: (val: T) => SingleLinkList<T>,
     delete: (val: T) => SingleLinkList<T>,
     find: (val: T, callback: Function) => boolean,
}

class SingleLinkList<T> implements LinkList<T> {
     public head: SingleLinkListNode<T>
     public tail: SingleLinkListNode<T>
     readonly length: number
     constructor() {
          this.head = new SingleLinkListNode<T>(null, null)
          this.tail = this.head
          this.length = 1
     }

     add(val: T): this {
          const newNode = new SingleLinkListNode<T>(val, null)
          this.tail.next = newNode
          return this
     }

     delete(val: T): this {
          let currentNode = this.head
          let preNode = null
          for(let i = 0; i < this.length; i++) {
               if (currentNode.value === val) {
                    preNode.next = currentNode.next
                    return this
               }
               preNode =  currentNode
               currentNode = currentNode.next
          }
          return this
     }

     find(val: T, callback: Function) {
          return false
     }

}

export default SingleLinkListNode