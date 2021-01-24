export default function createRoute(record,location) {
    let res = [];
    if(record){
        while(record){
            res.unshift(record);
            record = record.parent;
        }
    }
    return {
        ...location,
        matched:res
    }
}