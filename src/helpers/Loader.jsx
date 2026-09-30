import {useEffect} from "react";
export default function Loader({setIsLoading}) {useEffect(()=>{setIsLoading(false)},[setIsLoading]);return null;}
