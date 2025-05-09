
    export type RemoteKeys = 'add_todo_in_host/todo';
    type PackageType<T> = T extends 'add_todo_in_host/todo' ? typeof import('add_todo_in_host/todo') :any;