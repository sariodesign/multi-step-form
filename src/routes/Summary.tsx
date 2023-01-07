import * as formStep from "../components/FormSteps/FormStep.css"

const Summary = () => {
    return (
        <div className={formStep.container}>
            <h2 className={formStep.legend}>Finishing up</h2>
            <p className={formStep.subLegend}>Double-check everything looks OK before confirming.</p>
            
        </div>
    )
}

export default Summary