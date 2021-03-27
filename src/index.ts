import { LinkedList } from "./ts/LinkedList";
let list = new LinkedList();

list.add(10);
list.addLast(50);
list.add(20);
list.add(30);
list.addLast(80);
list.add(5);
list.print();

let list2 = list.clone();
list2.removeFirst();
list2.add(1);
list2.print();
list.print();