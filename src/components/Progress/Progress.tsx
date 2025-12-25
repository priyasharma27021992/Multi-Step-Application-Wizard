import styles from './Progress.module.css';

interface ProgressProps {
	currentStep: number;
	steps?: number;
}

const Progress = ({ currentStep = 0, steps = 5 }: ProgressProps) => {
	return (
		<div className={styles.progress}>
			<div className={styles.progress__line}></div>
			{Array(steps)
				.fill(0)
				.map((step, index) => {
					return (
						<div
							key={step}
							className={`${styles.progress__step} ${
								index <= currentStep ? styles.progress__step__active : ''
							}`}></div>
					);
				})}
		</div>
	);
};

export default Progress;
