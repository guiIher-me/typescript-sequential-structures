/* this is an example of using Queue */

import { Queue } from "./lib/collection/Queue";

const queue = new Queue<number>();

queue.add(10);
queue.add(20);
queue.add(30);

queue.print();

console.log("last/tail: " + queue.peek());
console.log("exists : " + queue.peek());

const it = queue.iterator();
while(it.hasNext())
	console.log(it.next());

queue.clear();