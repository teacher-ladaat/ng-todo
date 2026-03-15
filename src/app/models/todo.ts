export interface Todo {
    id: number | string;
    title: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endDate: Date | number;
}
