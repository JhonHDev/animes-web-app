import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { store } from './config/redux/store';

import AuthProvider from './router/AuthProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<AuthProvider />
			</Provider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;
