import React, {createContext, useState, ReactNode, useEffect} from 'react'
import { getRideRequests } from '../../utils/testService'

interface RiderContextType {
  // Add your context properties here
  requests: any[]
  setRequests: (requests: any[]) => void
  selectedRequest: any
  setSelectedRequest: (request: any) => void
  refreshRequests: () => Promise<void>  
}

export const RiderContext = createContext<RiderContextType | null>(null)

const RiderProvider = ({children}: {children: ReactNode}) => {
  const [requests, setRequests] = useState<any[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const refreshRequests = async () => {
    const requests = await getRideRequests()
    setRequests(requests)
  }

  useEffect(() => {
    const fetchRequests = async () => {
      const requests = await getRideRequests();
      setRequests(requests)
    }
    fetchRequests()
    const interval = setInterval(() => {
      fetchRequests()
    }, 1000*60*5);

    return () => clearInterval(interval);
  }, []);

  return (
    <RiderContext.Provider value={{requests, refreshRequests, setRequests, selectedRequest, setSelectedRequest}}>
      {children}
    </RiderContext.Provider>
  )
}

export default RiderProvider
