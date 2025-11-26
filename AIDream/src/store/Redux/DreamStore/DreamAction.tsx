import { buildSentimentResult } from "../../../helpers/SentimentResult";
import { postSentiment } from "./DreamCrud";
import { setDreamInfo } from "./DreamSlice";
import { saveSentimentToHistory } from '../../../helpers/HistoryStorage';


export const postSentimentDetailAction = (data: any, token: any) => async (dispatch: any) => {
  try {
    const response = await postSentiment(data, token);

    const sentimentInfo = buildSentimentResult(response.data, data.inputs);

    dispatch(setDreamInfo(sentimentInfo));

    await saveSentimentToHistory(sentimentInfo);

  } catch (error) {
    console.error(error);
  }
};