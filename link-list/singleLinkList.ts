/*
 * @Author: John Liu
 * @Date: 2020-08-10 19:22:40
 * @LastEditTime: 2020-08-11 21:52:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-data-structure\link-list\main.ts
*/

import SingleLinkListNode from './singleLinkListNode'


interface LinkListAction<T> {
     add: Function,
     delete: Function,
     find,
}

class SingleLinkList<T> implements LinkListAction<T> {
     head: SingleLinkListNode<T>
     constructor() {
          this.head.value = null
          this.head.next = null
     }

     add(val: T) {

     }

     delete(val: T): T {
          return val
     }

     find({ val: T = undefined, callback: Function }) {

     }

}

export default SingleLinkListNode