export const SummaryForm = ({ data }) => {
	return (
		<div>
			<p>Summary</p>
			{Object.keys(data)?.map((key) => {
				return (
					<div key={key}>
						{Object.keys(data[key]).map((stepDataKey) => (
							<div key={stepDataKey}>{data[key][stepDataKey]}</div>
						))}
					</div>
				);
			})}
		</div>
	);
};
