import { SequentialList } from './SequentialList';
import { Nullable, Node } from './Node';

export class LinkedList<E> extends SequentialList<E> {

    constructor() {
        super();
    }

    public add(data: E): void {
        return this.addFirst(data);
    }

    public addFirst(data: E): void {
        return super.addFirst(data);
    }

    public addLast(data: E): void {
        return super.addLast(data);
    }

    public peek(): E {
        return this.peekFirst();
    }

    public peekFirst(): E {
        return super.peekFirst();
    }

    public peekLast(): E {
        return super.peekLast();
    }

    public remove(): E {
        return this.removeFirst();
    }

    public removeFirst(): E {
        return super.removeFirst();
    }

    public removeLast(): E {
        return super.removeLast();
    }

    public clone(): LinkedList<E> {
        const cloned = new LinkedList<E>();

        if(this.empty())
            return cloned;

        cloned.head   = new Node(this.head.data);
        cloned.tail   = super.clone_impl(cloned.head, this.head);
        cloned.length = this.length;

        return cloned;
    }

}