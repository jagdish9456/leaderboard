import axios from "axios"
import { IUser, IRegisterResponse, ILoginUser, ILoginResponse, IGetTopScorers, ICommitRequest, IcommitResponse } from './model'

export const AxioApi = axios.create({
    baseURL:'http://www.janshakti.org.in/testApi'
})

export async function RegisterUser(user: IUser) : Promise<IRegisterResponse> {
    const result =  await AxioApi.post('/register.php',JSON.stringify({
        user
    }));
    const returnResult: IRegisterResponse = result.data[0];
    return returnResult;
}

export async function LoginUser(user: ILoginUser) : Promise<ILoginResponse> {
    const result =  await AxioApi.post('/login.php',JSON.stringify({
        user
    }));
    const returnResult: ILoginResponse = result.data[0];
    return returnResult;
}

export async function GetTopScorers() : Promise<IGetTopScorers[]> {
    const result =  await AxioApi.post('/getTopScorers.php');
    const returnResult: IGetTopScorers[] = result.data;
    return returnResult;
}

export async function AddNewCommitForUser(commit: ICommitRequest) : Promise<IcommitResponse> {
    const result =  await AxioApi.post('/submitNewCommit.php',JSON.stringify({
        commit
    }));
    const returnResult: IcommitResponse = result.data[0];
    return returnResult;
}