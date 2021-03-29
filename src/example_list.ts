/* this is an example of using Linked List */

import { LinkedList } from "./lib/collection/LinkedList";

let list = new LinkedList<number>();

list.addFirst(10);
list.addLast(50);
list.add(20); //in first
list.addFirst(30);
list.addLast(80);
list.addFirst(5);
list.removeLast(); //remove 80

console.log("Exists 20? " + list.contains(20));
console.log("whats the last? " + list.peekLast());
list.print();

console.log("iterator:");
let it = list.iterator();
while(it.hasNext())
	console.log(it.next());

list.clear();
console.log("Empty? " + list.empty());