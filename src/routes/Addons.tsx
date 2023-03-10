import { useState } from "react";
import StepNavigation from "../components/StepNavigation/StepNavigation";
import SelectField from "../components/SelectField/SelectField";
import * as formStep from "../components/FormSteps/FormStep.css"
import * as data from "../data/mock";

const Addons = ():JSX.Element => {
    const [addonsSelected, setAddonsSelected] = useState(data.addonsList)

    const addonsHandler = (e:any, i:any) => {
        let newAddons = addonsSelected.map(addon => {
            if(addon.id === i){
                return {...addon, selected: true}
            } else {
                return {...addon, selected: false}
            }
        });
        setAddonsSelected([...newAddons])
    }

    return <>
        <div className={formStep.container}>
            <h2 className={formStep.legend}>Pick add-ons</h2>
            <p className={formStep.subLegend}>Add-ons help enhance your gaming experience.</p>
            { addonsSelected.map((item, index) => {
                return (
                    <SelectField 
                        key={index}
                        check={item.check}
                        name={item.name}
                        price={item.price}
                        interval={item.interval}
                        selected={item.selected}
                        handler={(event:any) => addonsHandler(event, index)}
                    />
                )
            })}
        </div>
        <StepNavigation label="Next Step" next="/summary" back="/select-plan" backLink={true} />
    </>
}

export default Addons   
