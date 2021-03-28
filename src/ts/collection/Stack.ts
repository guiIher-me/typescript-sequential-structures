import { SequentialList } from './SequentialList';

export class Stack<E> extends SequentialList<E> {

    constructor() {
        super();
        this.STRUCTURE = 'Stack';
    }

    public push(data: E): void {
        return this.addFirst(data);
    }

    public peek(): E {
        return super.peekFirst();
    }

    public pop(): E {
        return this.removeFirst();
    }

}