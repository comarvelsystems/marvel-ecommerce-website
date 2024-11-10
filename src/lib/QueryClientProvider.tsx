"use client";

import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props {
  children: React.ReactNode;
}

const QueryClientProvider: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
        },
      }),
  );

  return (
    <ReactQueryProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryProvider>
  );
};

export default QueryClientProvider;
