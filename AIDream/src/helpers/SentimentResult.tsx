export interface SentimentInfo {
  originalText: string;
  label: string;
  score: number;
  summary: string;
  advice: string;
  date: string;
}

export const buildSentimentResult = (apiData: any, text: string): SentimentInfo => {
  const top = apiData[0]?.[0];
  const date = new Date().toLocaleDateString('tr-TR');
  const { summary, advice } = getSummaryAndAdvice(top.label);

  return {
    originalText: text,
    label: top.label,
    score: top.score,
    summary,
    advice,
    date,
  };
};

const getSummaryAndAdvice = (label: string) => {
  switch (label) {
    case 'Very Positive':
      return {
        summary: 'Bugün kendini harika hissediyorsun.',
        advice: 'Bu enerjiyi sevdiğin insanlarla veya aktivitelerle paylaşmayı deneyebilirsin.',
      };
    case 'Positive':
      return {
        summary: 'Günün genel olarak iyi geçmiş.',
        advice: 'Kısa bir yürüyüş veya sevdiğin bir hobi bu hissi pekiştirebilir.',
      };
    case 'Neutral':
      return {
        summary: 'Duyguların bugün dengeli görünüyor.',
        advice: 'Kendine sakin bir mola ayırmak iyi olabilir.',
      };
    case 'Negative':
      return {
        summary: 'Bugün biraz zorlanmış gibisin.',
        advice: 'Nefes egzersizi, müzik veya güvendiğin biriyle konuşmak iyi gelebilir.',
      };
    case 'Very Negative':
      return {
        summary: 'Bugün senin için oldukça ağır geçmiş.',
        advice: 'Kendini yalnız hissetmemeye çalış; biraz ailen ile vakit geçirmeye ne dersin?',
      };
    default:
      return {
        summary: '',
        advice: '',
      };
  }
};