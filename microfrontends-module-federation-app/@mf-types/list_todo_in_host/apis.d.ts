
    export type RemoteKeys = 'list_todo_in_host/list';
    type PackageType<T> = T extends 'list_todo_in_host/list' ? typeof import('list_todo_in_host/list') :any;