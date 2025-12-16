import './App.css';
import StepsForms from './components/StepsForms/StepsForms';
import { StepProvider } from './providers/StepProvider';

function App() {
	return (
		<StepProvider>
			<StepsForms />
		</StepProvider>
	);
}

export default App;
