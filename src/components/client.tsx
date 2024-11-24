"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import { useBloc } from '@blac/react';
import LanguageCubit from '@/data/providers/languageCubit';
import { useEffect } from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
            staleTime: 1000 * 60 * 5
        }
    }
})


export default function Client(props?: { children: JSX.Element | JSX.Element[] | React.ReactNode } ){
    const [_, e] = useBloc(LanguageCubit);
    useEffect(() => {
        e.init();
    })
    return (
        <QueryClientProvider client={queryClient}>
            {props?.children}
            <ToastContainer />
        </QueryClientProvider>
    )
}