const API_URL: string = "https://oq5npnwovb.execute-api.us-east-1.amazonaws.com/default/randomSakuga";
export const getCuts = async () => {
    return fetch(API_URL).then((res) => res.json())
}