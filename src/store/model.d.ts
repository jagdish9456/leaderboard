export interface IUser {
    username: string;
    password: string;
    name: string;
}

export interface IRegisterResponse{
    status: string;
    userId: string;
}

export interface ILoginUser{
    username: string;
    password: string;
}

export interface ILoginResponse{
    status: string;
    username: string;
    name: string;
}

export interface IGetTopScorers{
    name: string;
    points: number;
}

export interface ICommitRequest{
    DateTime: string;
    username: string;
    commitcomment: string;
}

export interface IcommitResponse{
    status: string;
    username: string
}