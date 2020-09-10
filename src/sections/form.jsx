import React, { useState } from 'react';
import EvaluationForm from '../components/evaluation-form';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const FormSection = (props) => {
	const [ inProp, setInProp ] = useState(false);

	return (
		<div className="form-container">
			<h2>Form Title</h2>
			<div className="form-component">
				<EvaluationForm />
			</div>
		</div>
	);
};

export default FormSection;
