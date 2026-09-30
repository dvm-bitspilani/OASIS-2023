import tasks from "./Events";
export async function getCollegeData() { return {data:[{id:"demo-college",name:"Representative demo college"}]}; }
export async function getEventsData() { return {data:[{events:tasks.map(t=>({id:t.key,name:t.name}))}]}; }
