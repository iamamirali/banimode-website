    export interface IComment {
        title: string;
        content: string;
        customer_name: string;
        grade: number;
        date_add: Date;
        rate: number;
        answer: string;
        sender: string;
        date_answer: string;
    }

    export interface CommentRootObject {
        status: string;
        status_code: number;
        message: string;
        data: IComment[];
    }

