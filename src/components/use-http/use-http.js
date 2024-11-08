import { useCallback } from "react";



export const useHttp = () => {
  const request = useCallback( async (url,method = 'GET', headers = {"Content-Type": "application/json",}, body=null) => {
    try {
      const response = await fetch(url,{method,headers,body})
      if(!response.ok) {
        console.log(2)
        throw new Error(`Error in ${url},status is ${response.status}`)
      }
  
      const data = await response.json()
      return data
    }catch(err) {
      throw new Error(err)
    }
  
  
  },[])

  return {request}
}
