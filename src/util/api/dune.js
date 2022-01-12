import store from '../../store/index';
import { setLastPrice, setMarketCap, setTotalCirculating } from '../../store/actionCreators';
const axios = require('axios');

const http=axios.create({
    baseURL:`https://core-hsr.duneanalytics.com`,
    timeout:30000
})
http.interceptors.request.use(config=>{
　　　config.headers['Content-Type']="application/json";
     config.data=JSON.stringify(generateDuneNode());  
   return config;
})

export const fetchMarketData = () => {
    const url = `/v1/graphql/`;
    return http
        .post(url)
        .then(function (response) {
            // console.log("response : " + JSON.stringify(response));
            // console.log("response.data : " + JSON.stringify(response.data));
            // console.log("response.data.data : " + JSON.stringify(response.data.data));
            // console.log("response.data.data.get_result_by_result_id : " + JSON.stringify(response.data.data.get_result_by_result_id));
            // console.log("response.data.data.get_result_by_result_id[0].data : " + JSON.stringify(response.data.data.get_result_by_result_id[0].data));

            // console.log("response.data.data.get_result_by_result_id[0].data.【last price】 : " + JSON.stringify(response.data.data.get_result_by_result_id[0].data['last price']));
            store.dispatch(setLastPrice(response.data.data.get_result_by_result_id[0].data['last price'].toFixed(3)))
            // console.log("response.data.data.get_result_by_result_id[0].data.【market cap】 : " + JSON.stringify(response.data.data.get_result_by_result_id[0].data['market cap']));
            store.dispatch(setMarketCap(response.data.data.get_result_by_result_id[0].data['market cap']/1e6.toFixed(3)))
            // console.log("response.data.data.get_result_by_result_id[0].data.【total circulating】 : " + JSON.stringify(response.data.data.get_result_by_result_id[0].data['total circulating']));
            store.dispatch(setTotalCirculating(response.data.data.get_result_by_result_id[0].data['total circulating']/1e6.toFixed(0)))
        })
        .catch(function (error) {
            console.log("error : " + error);
        });
};

export function generateDuneNode() {
    var duneNode = {}
    var resultId = {}
    resultId['result_id'] = "598d7ab2-dfea-4e9e-b959-afffa03f0ae3"
    duneNode['operationName'] = "FindResultDataByResult"
    duneNode['variables'] = resultId
    duneNode['query'] = "query FindResultDataByResult($result_id: uuid!) {\n  query_results(where: {id: {_eq: $result_id}}) {\n    id\n    job_id\n    error\n    runtime\n    generated_at\n    columns\n    __typename\n  }\n  get_result_by_result_id(args: {want_result_id: $result_id}) {\n    data\n    __typename\n  }\n}\n"
    // console.log("generateDuneNode : " + JSON.stringify(duneNode));
    return duneNode
  }