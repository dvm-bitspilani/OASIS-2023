"use client";
import {useEffect} from "react";
export default function PDFDocument({setIsLoading,pdfFile}) {
 useEffect(()=>{setIsLoading?.(false)},[setIsLoading]);
 return <div style={{width:"100%",height:"75vh"}}><iframe loading="lazy" title="Oasis publication" src={pdfFile} style={{width:"100%",height:"100%",border:0}}/><a href={pdfFile} target="_blank" rel="noopener noreferrer">Open PDF</a></div>;
}
