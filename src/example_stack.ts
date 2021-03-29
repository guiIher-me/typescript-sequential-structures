/* this is an example of using Stack */

import { Stack } from "./lib/collection/Stack";

const stack = new Stack<string>();

stack.push('k');
stack.push('c');
stack.push('a');
stack.push('t');
stack.push('s');

stack.print();

console.log("contains 'x'? ", stack.contains('x'));
console.log("letters: " + stack.size());
console.log("Top: " + stack.peek());

//we could also use an iterator
while(!stack.empty())
	console.log(stack.pop());