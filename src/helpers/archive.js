import tasks from "./Events";
export async function getEventDetails() { return tasks.map(t => ({name:t.name,about:t.desc,img_url:t.image,img_mobile_url:t.image,organiser:"Historical repository record",contact:"Registration closed"})); }
export const sponsors = [{id:1,name:"Representative demo sponsor",category:"Portfolio demonstration — original backend records unavailable",url:"/static/images/eventsOasisLogo.png",web_url:"#"}];
export const media = [{name:"Representative demo publication",publication:true,link:"#",icon:"/static/images/eventsOasisLogo.png"},{name:"Representative demo creator",publication:false,link:"#",icon:"/static/images/eventsOasisLogo.png"}];
export const wallmag = [{name:"Representative demo wall magazine",dept:"Portfolio demonstration",desc:"This sample illustrates the original magazine card. Original backend entries are unavailable; this is not a historical publication.",image:"/static/images/eventsOasisLogo.png"}];
