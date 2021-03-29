import { SequentialList } from './SequentialList';

export class Queue<E> extends SequentialList<E> {

    constructor() {
        super();
        this.STRUCTURE = 'Queue';
    }

    public add(data: E): void {
        return this.addLast(data);
    }

    public peek(): E {
        return super.peekLast();
    }

    public remove(): E {
        return this.removeFirst();
    }

}