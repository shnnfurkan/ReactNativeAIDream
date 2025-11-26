import { PostMethodExecutorWithToken } from "../../MethodsExecutors";


export const postSentiment = (data: any,token: any) => {
    return PostMethodExecutorWithToken("https://router.huggingface.co/hf-inference/models/tabularisai/multilingual-sentiment-analysis",data,token);
};