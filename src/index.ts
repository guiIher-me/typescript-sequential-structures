import { LinkedList } from "./ts/collection/LinkedList";

let list = new LinkedList<number>();

list.addFirst(10);
list.addLast(50);
list.addFirst(20);
list.addFirst(30);
list.addLast(80);
list.addFirst(5);
list.removeFirst();
list.print();

let it = list.iterator();

console.log("iterador:");
while(it.hasNext()) {
	console.log(it.next());
}