const Progress = ({ currentStep = 1 }) => {
	//5 steps
	//5 circles
	//4 lines
	//5 circles showing step

	return (
		<div
			className='flex'
			style={{ flexDirection: 'row', gap: '16px', position: 'relative' }}>
			<div
				style={{
					width: '10px',
					height: '10px',
					backgroundColor: 'red',
					borderRadius: '100%',
				}}></div>
			<div
				style={{
					width: '10px',
					height: '10px',
					backgroundColor: 'red',
					borderRadius: '100%',
				}}></div>
			<div
				style={{
					width: '10px',
					height: '10px',
					backgroundColor: 'red',
					borderRadius: '100%',
				}}></div>
			<div
				style={{
					width: '10px',
					height: '10px',
					backgroundColor: 'red',
					borderRadius: '100%',
				}}></div>
			<div
				style={{
					width: '10px',
					height: '10px',
					backgroundColor: 'red',
					borderRadius: '100%',
				}}></div>
		</div>
	);
};

export default Progress;
